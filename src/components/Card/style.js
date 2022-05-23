import styled from "styled-components";

import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  min-width: 280px;
  height: 430px;
  background-color: #fff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  margin-right: ${({ mr }) => mr && `${mr}px`};
`;

const Img = styled.img`
  width: 100%;
  min-height: 220px;
  max-height: 220px;
`;

const InfoWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 25px;
  padding-bottom: 0;
  border-top: 1px solid #e6e9ec;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`;

Info.Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icons = styled.div``;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)`
  width: 35px;
  height: 35px;
  padding: 10px;

  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
  cursor: pointer;
`;

Icons.Love = styled(love)`
  width: 35px;
  height: 35px;
  padding: 10px;
  margin-left: 20px;
  background-color: #f6f8f9;
  border-radius: 50%;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 100%;
  border-top: 1px solid #e6e9ec;
`;

const User = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  right: 20px;
  top: -23px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
  overflow: hidden;
`;

User.Img = styled.img`
  width: 43px;
  height: 43px;
  object-fit: cover;
`;

export { Container, Img, InfoWrapper, Info, Icons, Footer, User };
