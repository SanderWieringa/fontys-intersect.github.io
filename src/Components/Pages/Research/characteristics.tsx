import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Image,
  Text,
  Divider,
  ListItem,
  UnorderedList,
  Link,
} from "@chakra-ui/react";

export const Characteristics = () => (
  <Box w={"100%"} alignItems="center">
    <Image
      src={"/assets/images/owasp-logo.png"}
      alt="test"
      h={"15%"}
      w={"15%"}
      marginLeft={"10%"}
      marginTop={"1%"}
    />
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl"> CHARACTERISTICS </Text>
      <Text fontSize={"l"}>
        TODO
      </Text>
      <br />
      <Text fontSize={"l"}>
      TODO
      </Text>
      <br />
      <Text fontSize={"xl"}>Cases</Text>
      <Text fontSize={"l"}>
      TODO
        <UnorderedList>
          <ListItem>
            <Link href="#/case/wled" textColor={"blue"}>
            TODO
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#/case/printer" textColor={"blue"}>
            TODO
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#/case/airquality" textColor={"blue"}>
            TODO
            </Link>
          </ListItem>
        </UnorderedList>
      </Text>
      <Divider m={2} />
      <Text fontSize="3xl"> TODO </Text>
      <Text fontSize={"xl"}>
      TODO <br />
        <UnorderedList>
          <ListItem>
          TODO
            <Link href="https://www.keyfactor.com/blog/top-10-iot-vulnerabilities-in-your-devices/#:~:text=of%20Physical%20Hardening-,Lack%20of%20a%20Secure%20Update%20Mechanism,to%20securely%20update%20the%20device.&text=Some%20devices%20may%20have%20reached,critical%20to%20addressing%20this%20vulnerability.">
            TODO <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
          TODO
            <Link href="https://www.appsealing.com/owasp-iot-top-10/">
            TODO <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
      </Text>
    </Container>
  </Box>
);
