import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {query, handleSearch} = useGlobalContext(); 
  return (
    <form className='search-form' onSubmit={(e)=>e.preventDefault()}>
      <h2> search hackernew</h2>
      <input className='form-input'
       onChange={(e)=>handleSearch(e.target.value)}
       value={query}
       placeholder="search"
      />
    </form>
  )
}

export default SearchForm
