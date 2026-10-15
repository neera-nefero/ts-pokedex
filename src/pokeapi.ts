export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() { }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        try {
            const url = pageURL ?? `${PokeAPI.baseURL}/location-area/`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            throw new Error(`Error fetching locations: ${(error as Error).message}`);
        }
    }

    async fetchLocation(locationName: string): Promise<LocationDetail> {
        try {
            const url = PokeAPI.baseURL + "/location-area/" + locationName;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            throw new Error(
                `Error fetching location '${locationName}': ${(error as Error).message}`,
            );
        }
    }
}

export type ShallowLocations = {
    count: number,
    next: string | null,
    previous: string | null,
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