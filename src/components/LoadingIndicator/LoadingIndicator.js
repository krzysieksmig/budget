import React from "react";
import styled, { keyframes } from "styled-components";

const circle = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Root = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;
const Content = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid black;
  border-radius: 50%;
  animation: ${circle} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: pink transparent transparent transparent;

  &:nth-child(1) {
    animation-delay: -0.45s;
  }
  &:nth-child(2) {
    animation-delay: -0.3s;
  }
  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

function LoadingIndicator() {
  return (
    <Root>
      <Content />
    </Root>
  );
}

export default LoadingIndicator;
