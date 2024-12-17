import React from 'react'

export const HeroCard = ({heroe}) => {

    const { id, superhero, publiisher, alter_ego, first_appearance, characters } = heroe;

    return( 
        <>
            <div className="col">
                <div className="card">
                    <div className="row no gutters">
                        <div className="col-4">
                            <img src="" alt={ superhero } className="card-img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
