import React from 'react'
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroByName } from '../helpers';
import { HeroCard } from '../components';

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse( location.search ); // "q" value

    const { searchText, onInputChange } = useForm({
      searchText: q
    });

    const heroes = getHeroByName(q);
    const showSearch = (q.length === 0);
    const showError = (q.length > 0) && (heroes.length === 0);

    const onSearchSubmit = (event) => {
      event.preventDefault();
      // if (searchText.trim().length < 1) return;

      navigate(`?q=${ searchText }`);
    }

    return(
      <>
        <h1 className='mt-3'>Search</h1>
        <hr />

        <div className="row">
          <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={ onSearchSubmit }>
                <input 
                    type="text" 
                    placeholder='Seacrh a hero'
                    className='form-control'
                    name="searchText"
                    autoComplete='off'
                    value={ searchText }
                    onChange={ onInputChange }
                />

                <button className='btn btn-outline-primary mt-2'>
                  Search
                </button>
            </form>
          </div>

          <div className="col-7">
              <h4>Results</h4>
              <hr />
              
              {/* {
                ( q == '')
                ?
                <div className="alert alert-primary">
                  Search a hero
                </div>
                : (heroes.length  === 0) &&
                <div className="alert alert-danger">
                  There's no results with <strong>{ q }</strong>
                </div>
              } */}

              <div className='alert alert-primary animate__animated animate__fadeIn' style={{ display: showSearch ? '' : 'none' }}>
                Search a hero
              </div>

              <div className='alert alert-danger animate__animated animate__fadeIn' style={{ display: showError ? '' : 'none'}}>
                There's no results with <strong>{ q }</strong>
              </div>

              {heroes.map(hero => (
                <div className='mb-3'>
                  <HeroCard key={hero.id} heroe={hero} />
                </div>
              ))}
          </div>
        </div>
      </>
    )
}
