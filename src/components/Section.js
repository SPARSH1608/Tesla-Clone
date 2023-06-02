import React from "react";
import styled from "styled-components";
import "../index.css";
import { Fade } from "react-awesome-reveal";
function Section(props) {
  const { title, description, leftBtnText, rightBtnText, backgroundImg } =
    props;
  return (
    <Wrap bgImg={backgroundImg}>
      <Fade direction="up" cascade damping={1}>
        <ItemText>
          <h1>{title}</h1>
          <a href="#">{description}</a>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade direction="up" cascade delay={1}>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;

  a:hover {
    text-decoration: underline;
    font-size: 15.5px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;

const Buttons = styled.div``;