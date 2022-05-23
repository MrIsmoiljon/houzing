import { Carousel } from "antd";
import styled from "styled-components";
import { ReactComponent as arrowLeft } from "../../../assets/icons/nextLeft.svg";
import { ReactComponent as arrowRight } from "../../../assets/icons/nextRight.svg";

const Wrapper = styled.div`
  position: relative;
`;

const Container = styled(Carousel)`
  width: 100%;
  /* height: 570px; */
  height: fit-content;
`;

const Img = styled.img`
  background-color: black;
  width: 100%;
  height: 100%;
`;

const Icon = styled.div``;

Icon.Left = styled(arrowLeft)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(100%, -50%);
  width: 45px;
  height: 45px;
  color: white;
  background-color: white;
  padding: 12px;
  opacity: 0.5;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
`;

Icon.Right = styled(arrowRight)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-100%, -50%);
  width: 45px;
  height: 45px;
  color: white;
  background-color: white;
  padding: 12px;
  opacity: 0.5;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
`;

export { Container, Img, Icon, Wrapper };
