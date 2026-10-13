import * as readline from "node:readline";
export function startREPL() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });

    rl.prompt();

    rl.on("line", (input) => {
        const cleanedInput = cleanInput(input);
        if (cleanedInput.length > 0) {
            console.log(`Your command was: ${cleanedInput[0]}`);
        }
        rl.prompt();
    });
}

export function cleanInput(input: string): string[] {
    return input.trim().replace("  ", " ").toLowerCase().split(" ");
}

