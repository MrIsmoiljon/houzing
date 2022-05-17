import React from "react";
import { Advanced, Container, Icon, Section, Wrapper } from "./style";
import { Button, Input } from "../Generic";
import { Popover } from "antd";

const Filter = () => {
  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Section></Section>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Advanced.Title>Price</Advanced.Title>
    </Advanced>
  );

  return (
    <Container>
      <Wrapper>
        <Input
          pl="42px"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
        >
          <Icon.Home />
        </Input>
        <Popover
          placement="bottomRight"
          content={advancedSearch}
          trigger={"click"}
        >
          <Button width="131px" ml={20} type="secondary">
            <Icon.Setting /> Advanced
          </Button>
        </Popover>
        <Button width="131px" ml={20} type="primary">
          <Icon.Search /> Search
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Filter;
