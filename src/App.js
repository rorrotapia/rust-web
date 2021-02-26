import React  from 'react';
import './App.css';
import Home from "./pages/Home";
import BackgroundVideo from "./pages/_partials/BackgroundVideo";
import styled from "styled-components";

const App = () => {
  const Wrapper = styled.div`
    height: 100vh;
    background-color: rgba(24,23,18,.9)
  `;
  return (
    <Wrapper>
      <BackgroundVideo />
      <Home />
    </Wrapper>
  );
}

export default App;
