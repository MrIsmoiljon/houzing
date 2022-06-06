import React, { useState } from "react";
import Filter from "../Filter";
import Card from "../Card";
import { Container, Total, Wrapper } from "./style";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;
export const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();

  useQuery(
    ["get data", search],
    () => {
      return fetch(`${url}/v1/houses/list${search}`).then((res) => res.json());
    },

    {
      onSuccess: (res) => {
        setData(res?.data || []);
      },
    }
  );

  return (
    <Container>
      <Filter />
      <div className="title">Properties</div>
      <div className="description center">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Total> {data?.length} Total</Total>
      <Wrapper>
        {data?.map((value) => {
          return <Card key={value?.id} info={value} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default Properties;
