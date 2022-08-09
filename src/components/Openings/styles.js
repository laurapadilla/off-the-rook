import styled from "styled-components";
import { Link } from "../../styles";

export const Section = styled.section`
  padding: 0 2rem;
`;

export const OpeningContainer = styled.div`
  border-bottom: 2px solid black;
  padding: 2rem 0;
  display: block;
  justify-content: space-between;
  gap: 2rem;
  &:last-child {
    border-bottom: 0;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Videos = styled.article`
  margin-top: 1.5rem;
`;

export const VideoLink = styled(Link)`
  color: #1b671f;
  display: block;
  margin-bottom: 0.75rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const OpeningWrapper = styled.article`
  flex: 1;
`;

export const Opening = styled.article`
  display: flex;
`;

export const OpeningName = styled.h2`
  font-size: 3rem;
`;

export const Sup = styled.sup`
  font-family: "Reckless Neue TRIAL";
  font-size: xx-large;
  vertical-align: top;
  margin-right: 1rem;
`;

export const DescWrapper = styled.article`
  flex: 1;
  margin-top: 2rem;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const Piece = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const Black = styled(Piece)`
  background: #121212;
  border: 1px solid #121212;
`;

export const White = styled(Piece)`
  background: #ffffff;
  border: 1px solid #121212;
`;

export const PieceWrapper = styled.article`
  display: flex;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 450px;
  }
`;
