import React from "react";
import {
  Container,
  Img,
  Info,
  InfoWrapper,
  Icons,
  Footer,
  User,
} from "./style";
import nobackgroundimg from "../../assets/imgs/noimg.jpeg";
import nouser from "../../assets/imgs/nouser.jpeg";

const Card = ({ info, mr }) => {
  return (
    <Container mr={mr}>
      <Img src={info?.img || nobackgroundimg} />
      <InfoWrapper>
        <User>
          <User.Img src={info?.user?.img || nouser} />
        </User>
        <div className="subtitle">New Apartment Nice Wiew</div>
        <div className="description">Quincy St, Brooklyn, NY, USA</div>
        <Info>
          <Info.Detail>
            <Icons.Bed />
            <div className="description"> {info?.beds || 0} Beds</div>
          </Info.Detail>

          <Info.Detail>
            <Icons.Bath />
            <div className="description"> {info?.baths || 0} Baths</div>
          </Info.Detail>
          <Info.Detail>
            <Icons.Garage />
            <div className="description"> {info?.garage || 0} Garage</div>
          </Info.Detail>
          <Info.Detail>
            <Icons.Ruler />
            <div className="description"> {info?.ruler || 0} Sq Ft</div>
          </Info.Detail>
        </Info>
      </InfoWrapper>
      <Footer>
        <Info.Detail>
          <div className="deleted description">12,00</div>
          <div className="subtitle">7,800$</div>
        </Info.Detail>
        <div className="endToRight">
          <Icons.Resize />
          <Icons.Love />
        </div>
      </Footer>
    </Container>
  );
};

export default Card;
