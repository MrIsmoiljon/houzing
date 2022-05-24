import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 130px;
  gap: 20px;
`;

const Total = styled.div`
  margin: 70px 0 16px 0;
  padding: 0 130px;
`;

export { Container, Total, Wrapper };
