export class Pokemon {
  height = 0;
  weight = 0;
  sprites: { front_default: string | null } = { front_default: null };
  types: { type: { name: string } }[] = [];
  stats: { base_stat: number; stat: { name: string } }[] = [];

  constructor(
    public id: string,
    public name: string,
  ) { }
}
