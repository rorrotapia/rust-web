import React from 'react'
import styled from "styled-components";
import ContainerTop from "./_partials/ContainerTop";
import ContainerBottom from "./_partials/ContainerBottom";


const Footer = () => {
  const Footer = styled.div`
    display: flex;
    flex-direction: column;
    height:100%
  `;
  return (
    <Footer>
      <ContainerTop />
      <ContainerBottom />
    </Footer>
  )
}

export default Footer