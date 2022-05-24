import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 96px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  margin-top: 32px;
`;

const Carousel = styled.div`
  display: flex;
  width: 1440px;
  padding: 0 150px;

  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    display: none;
  }
`;

const ArrowLeft = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 15px;
  top: 50%;
  right: 20px;
  transform: translate(-50%, -100%);
  width: 45px;
  height: 45px;
  color: #000;
  background-color: #fff;
  padding-left: 10px;
  border: 1px solid #e6e9ec;
  border-radius: 50%;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  cursor: pointer;
  z-index: 999;
  :hover {
    opacity: 1;
  }
  :active {
    opacity: 0.7;
  }
`;

const ArrowRight = styled(ArrowLeft)`
  left: 20px;
  transform: translate(50%, -100%);
  padding-left: 0;
  padding-right: 10px;
`;
export { Container, Wrapper, Carousel, ArrowLeft, ArrowRight };
