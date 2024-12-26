import React from 'react'
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { searchText, onInputChange } = useForm({
      searchText: ''
    });

    const { q = '' } = queryString.parse( location.search ); // "q" value

    const onSearchSubmit = (event) => {
      event.preventDefault();
      if (searchText.trim().length < 1) return;

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
              
              <div className="alert alert-primary">
                Search a hero
              </div>

              <div className="alert alert-danger">
                There's no results with { q }
              </div>

              {/* <HeroCard /> */}
          </div>
        </div>
      </>
    )
}
