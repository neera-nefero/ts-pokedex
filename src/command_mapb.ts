import type { State } from "./state.js";
import type { ShallowLocations, Location } from "./pokeapi.js";

export async function commandMapb(state: State): Promise<void> {
    let locations: ShallowLocations;
    if (state.prevLocationsURL == null) {
        console.log("you're on the first page");
    } else {
        locations = await state.pokeApi.fetchLocations(state.prevLocationsURL);
        state.nextLocationsUrl = locations.next;
        state.prevLocationsURL = locations.previous;
        for (const location of locations.results) {
            console.log(location.name);
        }
    }
};