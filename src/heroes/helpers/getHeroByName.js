import { heroes } from "../data"

export const getHeroByName = ( name = '') => {
    // Limpiar url
    name = name.toLocaleLowerCase().trim();
    
    if (name.length === 0 ) return [];

    return heroes.find( heroe => heroe.superhero.toLowerCase() == name);
}