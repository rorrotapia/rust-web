import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const MenuItem = ({ name, active, disabled, url, index }) => {
  const NavTabItem = styled.li`
    font-family: 'Staatliches';
    font-size: 3rem;
    cursor: pointer;
    color: white;
  `;
  const NavTabLink = styled.a`
    text-decoration: unset;
    color: white;
  `;
  
  const [toggleState, setToggleState] = useState(0)
  
  const toggleTab = (index) => {
    setToggleState(index)
  }
  
  return (
    <NavTabItem className={toggleState === index ? "active" : "toto"} onClick={() => toggleTab(index)}>
      {url
        ? <NavTabLink href={`${url}`}>{name}</NavTabLink>
        : <span>{name}</span>
      }
      {disabled ? `(WIP)` : ``}
    </NavTabItem>
  )
}

export default MenuItem