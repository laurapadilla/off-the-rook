import { data } from "../../data";
import {
  Section,
  OpeningContainer,
  Videos,
  VideoLink,
  Sup,
  OpeningWrapper,
  OpeningName,
  Opening,
  DescWrapper,
  Black,
  White,
  PieceWrapper,
  Description
} from "./styles";

const openings = data;

export const Openings = () => {
  return (
    <Section>
      {openings.map(({ id, name, color, desc, moves, resources }) => {
        return (
          <OpeningContainer key={id}>
            <OpeningWrapper>
              <Opening>
                <Sup>{id}</Sup>
                <OpeningName>{name}</OpeningName>
              </Opening>
              <Videos>
                {resources.map(({ id, video, url }) => {
                  return (
                    <VideoLink href={url} key={id}>
                      {video}
                    </VideoLink>
                  );
                })}
              </Videos>
            </OpeningWrapper>
            <DescWrapper>
              <PieceWrapper>
                {color === "black" ? <Black /> : <White />}
                <p>{moves}</p>
              </PieceWrapper>
              <Description>{desc}</Description>
            </DescWrapper>
          </OpeningContainer>
        );
      })}
    </Section>
  );
};
