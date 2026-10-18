import { Cache } from "./pokecache.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private pokeCache = new Cache(1000 * 60);

    constructor() { }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        const url = pageURL || `${PokeAPI.baseURL}/location-area`;
        const cached = this.pokeCache.get(url);
        if (cached == undefined) {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const result = await response.json();
                this.pokeCache.add(url, result);
                return result;
            } catch (error) {
                throw new Error(`Error fetching locations: ${(error as Error).message}`);
            }
        }
        return cached;
    }

    async fetchLocation(locationName: string): Promise<LocationDetail> {
        const url = PokeAPI.baseURL + "/location-area/" + locationName;
        const cached = this.pokeCache.get(url);
        if (cached == undefined) {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const result = await response.json();
                this.pokeCache.add(url, result);
                return result;
            } catch (error) {
                throw new Error(
                    `Error fetching location '${locationName}': ${(error as Error).message}`,
                );
            }
        }
        return cached;
    }

    async fetchPokemon(pokemonName: string): Promise<PokemonDetail> {
        const url = PokeAPI.baseURL + "/pokemon/" + pokemonName;
        const cached = this.pokeCache.get(url);
        if (cached == undefined) {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const result = await response.json();
                this.pokeCache.add(url, result);
                return result;
            } catch (error) {
                throw new Error(
                    `Error fetching Pokemon '${pokemonName}': ${(error as Error).message}`,
                );
            }
        }
        return cached;
    }
}

export type ShallowLocations = {
    count: number,
    next: string,
    previous: string,
    results: Location[],
};

export type Location = {
    name: string
    url: string
}

export type LocationDetail = {
    id: number,
    name: string,
    game_index: number,
    encounter_method_rates: EncounterMethodRate[],
    location: Location,
    names: Name[],
    pokemon_encounters: PokemonEncounter[],
}

export type EncounterMethodRate = {
    encounter_method: EncounterMethod,
    version_details: VersionDetail[],
}

export type EncounterMethod = {
    name: string,
    url: string,
}

export type VersionDetail = {
    rate: number,
    version: Version,
}

export type Version = {
    name: string,
    url: string,
}

export type Name = {
    name: string,
    language: Language,
}

export type Language = {
    name: string,
    url: string,
}

export type PokemonEncounter = {
    pokemon: Pokemon,
    version_details: VersionDetail2[],
}

export type Pokemon = {
    name: string,
    url: string,
}

export type PokemonDetail = {
    id: number
    name: string
    base_experience: number
    height: number
    is_default: boolean
    order: number
    weight: number
}

export type VersionDetail2 = {
    version: Version2,
    max_chance: number,
    encounter_details: EncounterDetail[],
}

export type Version2 = {
    name: string,
    url: string,
}

export type EncounterDetail = {
    min_level: number,
    max_level: number,
    condition_values: any[],
    chance: number,
    method: Method,
}

export type Method = {
    name: string,
    url: string,
}