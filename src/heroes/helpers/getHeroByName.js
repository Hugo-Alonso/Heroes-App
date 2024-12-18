import { heroes } from "../data"

export const getHeroByName = ( name ) => {
    return heroes.find( heroe => heroe.superhero === name);
}