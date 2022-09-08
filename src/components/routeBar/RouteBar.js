import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
    margin-top: 20px;
    display: flex;
    list-style-type: none;

& li {
    cursor: pointer;
    padding: 1px 10px;
    margin-right:10px;
    border: 1px solid grey;
    border-radius: 10px;
    box-shadow: 0 0 6px white;
}
& li:hover{
    box-shadow: 0 0 6px green;
}

& li a {
    color: rgb(219, 219, 219);
    text-decoration: none;
}

`

const RouteBar = () => {
    return (
      <Ul>
        <li>
          <NavLink to="/">Today</NavLink>
        </li>
        <li>
          <NavLink to="/Tomorrow">Tomorrow</NavLink>
        </li>
        <li>
          <NavLink to="/Next7Weather">Next 7 days</NavLink>
        </li>
      </Ul>
    );
}

export default RouteBar