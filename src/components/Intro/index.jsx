import { IntroSection, Blurb } from "./styles";
import { Italic } from "../../styles";

export const Intro = () => {
  return (
    <IntroSection>
      <Blurb>
        Welcome to Off the Rook. This is a <Italic>collection</Italic> of all
        the most common <Italic>openings</Italic> available in{" "}
        <Italic>chess</Italic>.
      </Blurb>
    </IntroSection>
  );
};
