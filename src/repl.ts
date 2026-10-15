import { createInterface } from "readline";
import { getCommands } from "./command_registry.js";

export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });

    rl.prompt();

    rl.on("line", async (input) => {
        const cleanedInput = cleanInput(input);
        if (cleanedInput.length > 0) {
            const commands = getCommands();
            const inputCommand = cleanedInput[0];
            if (commands[inputCommand]) {
                commands[inputCommand].callback(commands);
            }
        }
        rl.prompt();
    });
}

export function cleanInput(input: string): string[] {
    return input.trim().replace("  ", " ").toLowerCase().split(" ");
}

