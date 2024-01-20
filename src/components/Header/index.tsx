import Container from "../layout/Container";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="w-full bg-transparent fixed z-30 top-0 shadow-md bg-white">
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <Menu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
