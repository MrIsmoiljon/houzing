import styled from "styled-components";

// import { ReactComponent as price } from "../../assets/icons/price.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { ReactComponent as advancedSearch } from "../../assets/icons/advancedSearch.svg";
import { ReactComponent as home } from "../../assets/icons/searchHome.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  padding: 0 130px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 1440px;
`;

const Icon = styled.div``;

Icon.Home = styled(home)`
  margin-right: 8px;
  margin-top: 6px;
`;

Icon.Setting = styled(advancedSearch)`
  margin-right: 8px;
  margin-top: 6px;
`;

Icon.Search = styled(search)`
  margin-right: 8px;
  margin-top: 6px;
`;

// Search

const Advanced = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;
`;

Advanced.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;

const Section = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: flex-end;
`;

export { Container, Wrapper, Icon, Advanced, Section };
