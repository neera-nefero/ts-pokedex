import { createInterface } from "readline";
import { getCommands } from "./command_registry.js";
import { State } from "./state.js";

export async function startREPL(state: State): Promise<void> {
    state.readline.prompt();

    state.readline.on("line", async (input) => {
        const cleanedInput = cleanInput(input);
        if (cleanedInput.length > 0) {
            const inputCommand = cleanedInput[0];
            const restCommands = cleanedInput.slice(1);
            if (state.commands[inputCommand]) {
                await state.commands[inputCommand].callback(state, ...restCommands);
            }
        }
        state.readline.prompt();
    });
}

export function cleanInput(input: string): string[] {
    return input.trim().replace("  ", " ").toLowerCase().split(" ");
}

