import React from 'react';
import styled from "styled-components";
import envelopeIcon from "./icons/envelope-solid.svg";
import languageIcon from "./icons/language-solid.svg";

const ContainerTop = () => {
  const ContainerTop = styled.div`
    margin: 5rem 0 auto;
  `;
  
  const IconLink = styled.a`
    width: 2rem;
    display:block;
    filter: invert(1);
    margin: 1rem auto;
  `;
  
  return (
    <ContainerTop>
      <IconLink href="#">
        <img src={envelopeIcon} />
      </IconLink>
      <IconLink href="#">
        <img src={languageIcon} />
      </IconLink>
    </ContainerTop>
  )
}

export default ContainerTop