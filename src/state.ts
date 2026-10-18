import { createInterface, type Interface } from "readline";
import { getCommands } from "./command_registry.js";
import { PokeAPI } from "./pokeapi.js";
import { PokemonDetail } from "./pokeapi.js";

export type State = {
    readline: Interface,
    commands: Record<string, CLICommand>,
    userPokemons: Record<string, PokemonDetail>,
    pokeApi: PokeAPI,
    nextLocationsUrl: string,
    prevLocationsURL: string,
};

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export function initState(): State {
    const state = {
        readline: createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: "Pokedex > ",
        }),
        commands: getCommands(),
        userPokemons: {},
        pokeApi: new PokeAPI,
        nextLocationsUrl: "",
        prevLocationsURL: "",
    }

    return state;
}