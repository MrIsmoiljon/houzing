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
      <Img src={info?.attachments[0]?.imgPath || nobackgroundimg} />
      <InfoWrapper>
        <User>
          <User.Img src={info?.user?.img || nouser} />
        </User>
        <div className="subtitle">
          {info?.name || "house"}, {info?.address || "Address"},{" "}
          {info?.city || "City"}, {info?.country || "Country"},{" "}
        </div>
        <div
          className="description"
          // style={{ whiteSpace: "nowrap", overflow: "hiddin" }}
        >
          {info?.description}
        </div>
        <Info>
          <Info.Detail>
            <Icons.Bed />
            <div className="description">
              {" "}
              {info?.houseDetails?.beds || 0} Beds
            </div>
          </Info.Detail>
          <Info.Detail>
            <Icons.Bath />
            <div className="description">
              {" "}
              {info?.houseDetails?.bath || 0} Baths
            </div>
          </Info.Detail>
          <Info.Detail>
            <Icons.Garage />
            <div className="description">
              {" "}
              {info?.houseDetails?.garage || 0} Garage
            </div>
          </Info.Detail>
          <Info.Detail>
            <Icons.Ruler />
            <div className="description">
              {" "}
              {info?.houseDetails?.area || 0} Sq Ft
            </div>
          </Info.Detail>
        </Info>
      </InfoWrapper>
      <Footer>
        <Info.Detail>
          <div className="deleted description">{info?.salePrice || 0} $ </div>
          <div className="subtitle">{info?.price || 0} $ </div>
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
