import styled from "styled-components";
import { Link } from "../../styles";

export const HeaderContainer = styled.header`
  background: #121212;
  padding: 0.5rem 2rem;
  display: block;
  align-items: center;
  color: #e9e6e4;
  border-bottom: 2px solid #e9e6e4;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  flex: 1;
  text-transform: uppercase;
`;

export const NavLink = styled(Link)`
  font-size: 1.25rem;
  display: inline-block;
  margin-top: 1rem;
  margin-right: 1rem;

  @media (min-width: 768px) {
    padding: 1rem;
    margin: 0;
  }
`;
