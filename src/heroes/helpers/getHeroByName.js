import { heroes } from "../data"

export const getHeroByName = ( name = '') => {
    // Limpiar url
    name = name.toLocaleLowerCase().trim();
    
    if (name.length === 0 ) return [];

    return heroes.filter( heroe => heroe.superhero.toLowerCase().includes(name));
}