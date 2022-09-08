import React from "react";
import styled from "styled-components";

const SearchStyle = styled.div`
    max-width: 800px;
    margin: 0 10px;
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


const SearchCity = () => {
    return (
      <SearchStyle>
        <div>
          Search City
          
            <Input type="text" placeholder="Your city"/>
          
        </div>
      </SearchStyle>
    );
}

export default SearchCity