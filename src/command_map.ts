import type { State } from "./state.js";
import type { ShallowLocations, Location } from "./pokeapi.js";

export async function commandMap(state: State): Promise<void> {
    let locations: ShallowLocations;
    if (state.nextLocationsUrl == null) {
        locations = await state.pokeApi.fetchLocations();
    } else {
        locations = await state.pokeApi.fetchLocations(state.nextLocationsUrl);
    }

    state.nextLocationsUrl = locations.next;
    state.prevLocationsURL = locations.previous;
    for (const location of locations.results) {
        console.log(location.name);
    }
};