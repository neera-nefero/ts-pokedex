import type { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
    if (!args[0]) {
        console.log("Please provide a Pokemon.");
        return;
    }

    const pokemonResponse = await state.pokeApi.fetchPokemon(args[0]);

    if (state.userPokemons[pokemonResponse.name]) {
        console.log(`You already have ${pokemonResponse.name}.`);
        return;
    }

    console.log(`Throwing a Pokeball at ${pokemonResponse.name}...`);
    if (isCaptured(pokemonResponse.base_experience)) {
        console.log(`${pokemonResponse.name} was caught!`);
        state.userPokemons[pokemonResponse.name] = pokemonResponse;
    } else {
        console.log(`${pokemonResponse.name} escaped!`);
    }
};

function isCaptured(difficulty: number) {
    return (Math.floor(Math.random() * 1000) - difficulty > 500);
}
