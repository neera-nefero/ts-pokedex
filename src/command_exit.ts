import type { State } from "./state.js";

export async function commandExit(state: State): Promise<void> {
    console.log("Closing the Pokedex... Goodbye!");
    state.readline.close();
    state.pokeApi.closeCache();
    process.exit(0);
};