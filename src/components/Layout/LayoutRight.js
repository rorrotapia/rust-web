import React from 'react'
import styled from "styled-components";
import Footer from "../Footer/Footer";


const LayoutRight = () => {
  const LayoutRight = styled.footer`
    width: 5%;
    min-width: 1rem;
  `;
  return (
    <LayoutRight>
     <Footer />
    </LayoutRight>
  )
}

export default LayoutRight