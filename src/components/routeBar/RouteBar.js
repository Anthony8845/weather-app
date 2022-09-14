import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  margin-top: 20px;
  display: flex;
  list-style-type: none;

  & a {
    cursor: pointer;
    padding: 1px 10px;
    margin-right: 10px;
    border: 1px solid grey;
    border-radius: 10px;
    box-shadow: 0 0 6px white;
    color: rgb(219, 219, 219);
    text-decoration: none;
  }
  & a:hover {
    box-shadow: 0 0 6px green;
  }

  & .active {
    box-shadow: 0 -1px 6px green;
  }
`;

const RouteBar = () => {
  return (
    <Ul>
      <li>
        <NavLink to="/">Сегодня</NavLink>
      </li>
      <li>
        <NavLink to="/Tomorrow">Завтра</NavLink>
      </li>
      <li>
        <NavLink to="/Next7Weather">Ближайшие 7 дней</NavLink>
      </li>
    </Ul>
  );
};

export default RouteBar;
