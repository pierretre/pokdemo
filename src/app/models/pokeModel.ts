export class PokeModel {
    abilities: any;
    base_experience: number;
    forms: any;
    game_indices: any;
    height: number;
    held_items: any;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: any;
    name: string;
    order: number;
    past_types: any;
    species: any;
    sprites: any;
    stats: any;
    types: any;
    weight: number;

    constructor( 
        abilities: any,
        base_experience: number,
        forms: any,
        game_indices: any,
        height: number,
        held_items: any,
        id: number,
        is_default: boolean,
        location_area_encounters: string,
        moves: any,
        name: string,
        order: number,
        past_types: any,
        species: any,
        sprites: any,
        stats: any,
        types: any,
        weight: number) {
            this.abilities = abilities;
            this.base_experience = base_experience;
            this.forms = forms;
            this.game_indices = game_indices;
            this.height = height;
            this.held_items = held_items;
            this.id = id;
            this.is_default = is_default;
            this.location_area_encounters = location_area_encounters;
            this.moves = moves;
            this.name = name;
            this.order = order;
            this.past_types = past_types;
            this.species = species;
            this.sprites = sprites;
            this.stats = stats;
            this.types = types;
            this.weight = weight;
        }

}