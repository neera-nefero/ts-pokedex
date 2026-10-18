import type { CLICommand } from "./state.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exit the Pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Displays a list of 20 locations. Subsecuent calls shows the next 20 locations.",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Displays the previous list of 20 locations.",
            callback: commandMapb,
        },
        explore: {
            name: "explore",
            description: "Displays all the Pokemons in a given area.",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Tries to catch a Pokemon.",
            callback: commandCatch,
        },
    };
}