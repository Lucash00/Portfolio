import styled, { keyframes, css } from "styled-components";

const enter = keyframes`
  0% {
    transform: translateY(100%) rotateX(-90deg);
    opacity: 0;
  }
  100% {
    transform: translateY(0%) rotateX(0deg);
    opacity: 1;
  }
`;

const exit = keyframes`
  0% {
    transform: translateY(0%) rotateX(0deg);
  }
  100% {
    transform: translateY(-100%) rotateX(90deg);
  }
`;

export const AnimatedSpan = styled.span`
  display: inline-block;
  will-change: transform;
  transform-style: preserve-3d;
  transform-origin: bottom;
  padding: ${(props) => (props.$letter === " " ? "0.325rem" : null)};
  opacity: ${(props) => (props.className === "in" ? 0 : 1)};  // Solo opacity en "in"

  animation: ${(props) => (props.className === "in" ? enter : exit)} 0.6s ease forwards;
  animation-delay: ${(props) => props.$index * 0.1}s;
`;
