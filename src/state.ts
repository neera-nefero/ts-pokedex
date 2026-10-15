import { createInterface, type Interface } from "readline";
import { getCommands } from "./command_registry.js";

export type State = {
    readline: Interface,
    commands: Record<string, CLICommand>,
};

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => void;
};

export function initState(): State {
    const state = {
        readline: createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: "Pokedex > ",
        }),
        commands: getCommands(),
    }

    return state;
}