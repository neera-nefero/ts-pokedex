import type { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
    if (!args[0]) {
        console.log("Please provide a Location.");
        return;
    }

    const locationResponse = await state.pokeApi.fetchLocation(args[0]);

    console.log(`Exploring ${args[0]}...`);
    console.log("Found Pokemon:");
    for (const pokemonEncounter of locationResponse.pokemon_encounters) {
        console.log(` - ${pokemonEncounter.pokemon.name}`);
    }
};