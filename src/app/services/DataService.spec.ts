import { TestBed } from '@angular/core/testing';
import { DataService, DataProvider, Foo } from './DataService';
import { describe, expect, beforeEach, it, test, vi } from 'vitest'
import { firstValueFrom } from 'rxjs';


describe('DataService', () => {

  let service: DataService;
  let dp: DataProvider;

  test.beforeEach(() => {
    dp = { data1: () => 42, yolo: () => { console.log('yolo') } };
    service = new DataService(dp)
    vi.useFakeTimers();
  })

  test.afterEach(() => {
    vi.useFakeTimers();
    vi.clearAllMocks();
  });

  test.each([
    'madam',
    'radar',
    'level',
    'rotor'
  ])('%s is palindrome', (s) => {
    expect(service.isPalindrome(s)).toBe(true);
  })

  test.each([
    'alo',
    'mot',
    'palindrome',
    'pokemon'
  ])('%s is not palindrome', (s) => {
    expect(service.isPalindrome(s)).toBe(false);
  })

  test('Asynchronous call', async () => {
    await expect(service.firstFoo).resolves.toMatchObject({ 'a': 42, 'b': 'vv' })
  })

  test('fooPublisher', async () => {
    // Vous lisez la première valeur
    const emittedPromise = firstValueFrom(service.fooPublisher);

    const foo42: Foo = { a: 42, b: 'nombre magique' }
    // Vous envoyez la valeur
    service.addFoo(foo42);

    // Vous attendez la valeur
    const emitted: Foo = await emittedPromise;

    expect(emitted).toBe(foo42);
  })

  test('fooPublisher timeout', () => {
    const received: Foo[] = [];
    // vous vous abonnez
    const sub = service.fooPublisher.subscribe((v) => received.push(v));
    // vous envoyez une valeur
    service.addFoo({ a: 1, b: 'test' });

    // On avance le timer, car au bout de 5s normalement y a un timeout
    vi.advanceTimersByTime(10000);
    // assertions:
    //...


    expect(received).toHaveLength(0)
  })
})
