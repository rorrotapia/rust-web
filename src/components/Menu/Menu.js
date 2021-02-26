import React from 'react';
import MenuItem from "./_partials/MenuItem";
import styled from 'styled-components';

const Menu = () => {
  const data = [
    {name: "home", active: true, disabled: false},
    {name: "store", active: false, disabled: false, url: "https://app.gpay.io/store/rustytrombone"},
    {name: "servers", active: false, disabled: false},
    {name: "stats", active: false, disabled: true}
  ];
  const Navtab = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    text-transform: uppercase
  `;
  const Nav = styled.nav`
    margin-top: 0;
    margin-bottom: auto;
  `;
  
  return (
    <Nav>
      <Navtab>
        {data.map(({name, active,disabled,url},  i) => {
          return <MenuItem key={i} index={i} name={name} active={active} disabled={disabled} url={url} />
        })}
      </Navtab>
    </Nav>
  )
  
}

export default Menu