import React from 'react'
import { HeroCard } from '../components'

export const SearchPage = () => {
  return (
    <>
      <h1 className='mt-3'>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form action="">
              <input 
                  type="text" 
                  placeholder='Seacrh a hero'
                  className='form-control'
                  name="searchText"
                  autoComplete='off'
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
              There's no results
            </div>

            {/* <HeroCard /> */}
        </div>
      </div>
    </>
  )
}
