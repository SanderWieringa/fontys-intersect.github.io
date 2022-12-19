import {
    Box,
    Container,
    Text,
    ListItem,
    UnorderedList,
    Link,
  } from "@chakra-ui/react";
  
  export const Research = () => (
    <Box w={"100%"} alignItems="center">
      <Container maxW={["100%", "80%"]} h={"100vh"} p={4}>
        <Text fontSize="3xl"> Best practices </Text>
        <Text fontSize={"l"}>
          A best practice is a method or technique that has been generally
          accepted as superior to any alternatives because it produces results
          that are better than those achieved by other means or because it has
          become a standard way of doing things, e.g. a standard way of complying
          with legal or ethical requirements. All the best practices are listed
          below:
        </Text>
        <br />
        <UnorderedList>
          <Link textColor={"blue"} href="/#/bestpractices/authentication"><ListItem>Authentication</ListItem></Link>
          
        </UnorderedList>
        <br />
      </Container>
    </Box>
  );
  