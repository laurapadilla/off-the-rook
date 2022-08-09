import { HeaderContainer, Title, NavLink } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>Off The Rook</Title>
      <nav>
        <NavLink href="/">Pieces</NavLink>
        <NavLink href="/">Players</NavLink>
        <NavLink href="/">Openings</NavLink>
        <NavLink href="https://www.chess.com">Learn Chess</NavLink>
      </nav>
    </HeaderContainer>
  );
};
