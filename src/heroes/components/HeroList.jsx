
import React from 'react'
import { getHeroesByPublisher} from '../helpers/getHeroesByPublisher';

export const HeroList = ({publisher}) => {

    const heroesList = getHeroesByPublisher(publisher)

    return (
        // <pre>
        //     {
        //         JSON.stringify(heroesList, null, 3)
        //     }
        // </pre>
        <ul>
        { 
            heroesList.map(  heroe => {
                 <li>
                    { heroe.superhero }
                 </li>   
            })
        }
        </ul>
    )
}
