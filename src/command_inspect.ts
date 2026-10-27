import type { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]): Promise<void> {
    if (!args[0]) {
        console.log("Please provide a Pokemon.");
        return;
    }

    if (!state.userPokemons[args[0]]) {
        console.log(`You don't have ${args[0]} captured!.`);
        return;
    }

    const pokemonResponse = await state.pokeApi.fetchPokemon(args[0]);

    console.log(`Name: ${pokemonResponse.name}`);

    console.log(`Height: ${pokemonResponse.height}`);
    console.log(`Weight: ${pokemonResponse.weight}`);

    console.log(`Stats:`);
    for (const stat of pokemonResponse.stats) {
        console.log(`   ${stat.stat.name}: ${stat.base_stat}`)
    }

    console.log(`Types:`);
    for (const type of pokemonResponse.types) {
        console.log(`   - ${type.type.name}`)
    }
};
