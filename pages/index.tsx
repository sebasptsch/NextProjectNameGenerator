import { Container, Text } from "@chakra-ui/layout";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo title="Project Name Generator" />
      <Container>
        <Text>Next Project Generator</Text>
      </Container>
    </>
  );
}
