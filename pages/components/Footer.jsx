import React from "react";
import { Container, Divider, Link, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <>
      <Divider w={"80%"} mx={"auto"} />
      <Container py={"2rem"}>
        <Text textAlign={"center"} fontSize={"1rem"}>
        WAGMI 🚀 {" "}
          <Link isExternal href="https://github.com/jv420/Buy--MeA--Coffee">
            Github
          </Link>
        </Text>
      </Container>
    </>
  );
}

export default Footer;
