import React from 'react';
import styled from 'styled-components';
import LayoutLeft from "../components/Layout/LayoutLeft";
import LayoutContent from "../components/Layout/LayoutContent";
import LayoutRight from "../components/Layout/LayoutRight";

const Home = () => {
  const Body = styled.div`
    display: flex;
    height: 100%
  `;
  
  return (
    <Body>
      <LayoutLeft />
      <LayoutContent />
      <LayoutRight />
    </Body>
  )
  
}

export default Home