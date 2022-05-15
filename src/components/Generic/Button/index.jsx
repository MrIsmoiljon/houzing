import React, { memo } from "react";
import { Container } from "./style";

const Button = ({ children, onClick, height, width, type, mr, ml, mb, mt }) => {
  return (
    <Container
      children={children}
      onClick={onClick}
      height={height}
      width={width}
      type={type}
      mr={mr}
      ml={ml}
      mb={mb}
      mt={mt}
    >
      {children}
    </Container>
  );
};

export default memo(Button);
