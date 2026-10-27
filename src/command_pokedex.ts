import type { State } from "./state.js";

export async function commandPokedex(state: State): Promise<void> {
    if (Object.keys(state.userPokemons).length == 0) {
        console.log(`You don't have Pokemons captured yet!.`);
        return;
    }
    console.log("Your Pokedex:");
    for (const pokemon of Object.keys(state.userPokemons)) {
        console.log(`   - ${pokemon}`);
    }
};
