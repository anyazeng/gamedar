import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      NavBar
    </HStack>
  );
};

export default NavBar;