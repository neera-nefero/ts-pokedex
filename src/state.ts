import { createInterface, type Interface } from "readline";
import { getCommands } from "./command_registry.js";
import { PokeAPI } from "./pokeapi.js";

export type State = {
    readline: Interface,
    commands: Record<string, CLICommand>,
    pokeApi: PokeAPI,
    nextLocationsUrl: string | null,
    prevLocationsURL: string | null,
};

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
};

export function initState(): State {
    const state = {
        readline: createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: "Pokedex > ",
        }),
        commands: getCommands(),
        pokeApi: new PokeAPI,
        nextLocationsUrl: null,
        prevLocationsURL: null,
    }

    return state;
}