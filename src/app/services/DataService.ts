import {Observable, Subject} from "rxjs";

export interface Foo {
    a: number;
    b: string;
}

export interface DataProvider {
    data1(): number;

    yolo(foo: Foo): void;
}

export class DataService {
    private _value: number;
    private readonly provider: DataProvider;
    private readonly publisher: Subject<Foo>;

    public constructor(dataProvider: DataProvider) {
        this._value = 1;
        this.provider = dataProvider;
        this.publisher = new Subject<Foo>();
    }

    public get value(): number {
        return this._value;
    }

    public set value(value: number | string) {
        if (typeof value === 'number') {
            this._value = value;
        } else {
            this._value = parseFloat(value);
        }
    }

    public get firstFoo(): Promise<Foo> {
        return new Promise<Foo>(resolve => {
            resolve({
                'a': this.provider.data1(),
                'b': 'vv'
            });
        });
    }

    public get allFoos(): Promise<Array<Foo>> {
        return new Promise<Array<Foo>>(resolve => {
            resolve([{
                'a': this.provider.data1(),
                'b': 'vv'
            },
                {
                    'a': this.provider.data1(),
                    'b': 'ff'
                }]);
        });
    }

    public addFoo(foo: Foo): void {
        if (foo.a === 42) {
            this.publisher.next(foo);
            this.provider.yolo(foo);
        }
    }

    public get fooPublisher(): Observable<Foo> {
        return this.publisher;
    }

    public isPalindrome(txt: string): boolean {
        return txt === txt.split('').reverse().join('');
    }
}
