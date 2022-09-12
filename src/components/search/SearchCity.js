import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getWeather } from './../../action/weather';

const SearchStyle = styled.div`
    max-width: 800px;
    margin: 0 10px;
& button {
    padding: 8px;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 6px white;
    margin-left: 10px;
    background-color:grey;
    color: rgb(219, 219, 219);
    text-transform: uppercase;
}

& button:hover {
    box-shadow: 0 0 6px green;
}

& div {
    color: white;
}
`

const Input = styled.input`
    text-transform: uppercase;
    padding-left: 10px;
    color: rgb(219, 219, 219);
    height: 30px;
    width: 70%;
    margin-left: 20px;
    background: rgb(32, 32, 32);
    border:1px solid grey;
    border-radius: 10px;
    box-shadow: 0 0 6px white;

&::placeholder {
    padding-left: 10px;
}
&:hover{
    box-shadow: 0 0 6px green;
}
&:focus{
    box-shadow: 1px 2px 8px green;
    border: none;
    outline:none; 
}
`
export let city 

const SearchCity = () => {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')

    const searchHandler = () => {
       city = searchValue
       dispatch(getWeather(city))
    }

    

    return (
      <SearchStyle>
        <div>
          Search City
          
            <Input value={searchValue} onChange={e => setSearchValue(e.target.value)} type="text" placeholder="Your city"/>
            <button onClick={() => searchHandler()}>поиск</button>
            
        </div>
      </SearchStyle>
    );
}

export default SearchCity