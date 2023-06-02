import React from "react";
import styled from "styled-components";
import "../index.css";
import { Fade } from "react-awesome-reveal";

function Section(props) {
  const { title, description, leftBtnText, rightBtnText } = props;
  return (
    <Wrap>
      <VideoBackground>
        <video autoPlay loop muted>
          <source
            src="./images/car1.mp4"
            type="video/mp4"
            controls
            start="10"
          />
        </video>
      </VideoBackground>
      <Fade direction="up" cascade damping={1}>
        <ItemText>
          <h1 style={{ color: "white" }}>{title}</h1>
          <p style={{ color: "white" }}>{description}</p>
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

const VideoBackground = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  z-index: -1;

  video {
    loop: true;
    position: absolute;
    top: 0px;
    left: 0;
    muted: true;
    overflow-x: hidden;
    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  z-index: 100;
  position: relative;
  bottom: 180px;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    z-index: 100;
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
  z-index: 100;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
  z-index: 100;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
  z-index: 100;
`;

const Buttons = styled.div``;
