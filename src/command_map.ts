import type { State } from "./state.js";

export async function commandMap(state: State): Promise<void> {
    const locations = await state.pokeApi.fetchLocations(state.nextLocationsUrl);

    state.nextLocationsUrl = locations.next;
    state.prevLocationsURL = locations.previous;

    for (const location of locations.results) {
        console.log(location.name);
    }
};