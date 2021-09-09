import React from 'react';


function SearchForm({ handleSubmit, handleChange, searchString }) {
    return (
        <form onSubmit={handleSubmit} className='form-horizontal'>

            <input placeholder='Search' 
            type="text" 
            name='searchString' 
            required 
            />
            <button type='submit'>Search</button>
           
        </form>
    );
}

export default SearchForm;