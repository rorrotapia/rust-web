import React from 'react';
import styled from "styled-components";
import steamIcon from "./icons/steam-brands.svg"
import discordIcon from "./icons/discord-brands.svg"

const ContainerBottom = () => {
  const ContainerBottom = styled.div`
    margin: auto 0 3rem;
  `;
  
  const IconLink = styled.a`
    width: 2rem;
    display:block;
    filter: invert(1);
    margin: 1rem auto;
  `;
  
  return (
    <ContainerBottom>
      <IconLink href="https://discord.gg/e3sMDUgqPH">
        <img src={discordIcon} />
      </IconLink>
      <IconLink href="#">
        <img src={steamIcon}/>
      </IconLink>
    </ContainerBottom>
  )
}

export default ContainerBottom