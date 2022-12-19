import {
    Box,
    Container,
    Text,
    ListItem,
    OrderedList,
    UnorderedList,
    Link,
    Image,
  } from "@chakra-ui/react";
  
  export const Research = () => (
    <Box w={"100%"} alignItems="center">
      <Container maxW={["100%", "80%"]} h={"100vh"} p={4}>
        <Text fontSize="3xl"> Solution approach  </Text>
        <br></br>
        <Text fontSize={"xl"}><b>Research questions</b></Text>
        <Text fontSize={"l"}>
          How could the current security of IoT systems be improved?
        </Text>
        <OrderedList>
            <ListItem>
            <Link textColor={"blue"} href="/#/research/characteristics">What are the characteristics of IoT?</Link>
            </ListItem>
            <ListItem>
            <Link textColor={"blue"} href="/#/research/characteristics">What are the advantages and disadvantages of IoT systems/devices?</Link>
            </ListItem>
            <ListItem>
            <Link textColor={"blue"} href="/#/research/characteristics">How effective is current IoT security?</Link>
            </ListItem>
            <ListItem>
            <Link textColor={"blue"} href="/#/research/characteristics">What are the most effective strategies to improve IoT security?</Link>
            </ListItem>
          </OrderedList>
          <br></br>
        <Text fontSize={"xl"}><b>Research strategies</b></Text>
        <OrderedList>
            <ListItem>
            <b>What are the characteristics of IoT? </b>
            <table>
            <tr>
              <th>Strategy</th>
              <th>Approach</th>
              <th>Explanation</th>
            </tr>
            <tr>
              <td>
                <Image
                src={"/assets/images/Library.png"}
                alt="test"
                h={"50%"}
                w={"50%"}
                />
                Library
              </td>
              <td>Literature study</td>
              <td>We must locate publications to learn more about what IoT systems and devices entail, their privacy regulations, and how they are connected (protocols).</td>
            </tr>
            <tr>
              <td>
              <Image
                src={"/assets/images/Field.png"}
                alt="test"
                h={"50%"}
                w={"50%"}
                />
                Field
              </td>
              <td>Document analysis</td>
              <td>We must analyse the previous group's and company documentation.</td>
            </tr>
            </table>
            </ListItem>
            <br></br>
            <ListItem>
              <b>What are the advantages and disadvantages of IoT systems/devices?</b>
              <table>
                <tr>
                  <th>Strategy</th>
                  <th>Approach</th>
                  <th>Explanation</th>
                </tr>
                <tr>
                  <td>
                    <Image
                    src={"/assets/images/Library.png"}
                    alt="test"
                    h={"50%"}
                    w={"50%"}
                    />
                    Library
                  </td>
                  <td>
                  <UnorderedList>
                    <ListItem>Literature study</ListItem>
                    <ListItem>Best good and bad practices</ListItem>
                  </UnorderedList>
                  </td>
                  <td>We must find articles describing the advantages, disadvantages, and best practices for IoT systems and devices.</td>
                </tr>
              </table>
            </ListItem>
            <br></br>
            <ListItem>
            <b>How effective is current IoT security?</b>
            <table>
            <tr>
              <th>Strategy</th>
              <th>Approach</th>
              <th>Explanation</th>
            </tr>
            <tr>
              <td>
                <Image
                src={"/assets/images/Library.png"}
                alt="test"
                h={"50%"}
                w={"50%"}
                />
                Library
              </td>
              <td>
              <UnorderedList>
                <ListItem>Literature study</ListItem>
                <ListItem>Available product analysis</ListItem>
              </UnorderedList>
              </td>
              <td>We must find information regarding common IoT security flaws and how we can exploit IoT devices.</td>
            </tr>
            <tr>
              <td>
                <Image
                src={"/assets/images/Lab.png"}
                alt="test"
                h={"50%"}
                w={"50%"}
                />
                Lab
              </td>
              <td>Security test</td>
              <td>We must pen-test IoT devices to find security vulnerabilities. Either part of the common flaws research or new device-specific vulnerabilities.</td>
            </tr>
            </table>
            </ListItem>
            <br></br>
            <ListItem>
            <b>What are the most effective strategies to improve IoT security?</b>
            <table>
            <tr>
              <th>Strategy</th>
              <th>Approach</th>
              <th>Explanation</th>
            </tr>
            <tr>
              <td>
                <Image
                src={"/assets/images/Library.png"}
                alt="test"
                h={"50%"}
                w={"50%"}
                />
                Library
              </td>
              <td>
              <UnorderedList>
                <ListItem>Literature study</ListItem>
                <ListItem>Available product analysis</ListItem>
              </UnorderedList>
              </td>
              <td>We must find articles describing security solutions for common flaws in IoT devices, both in theory and implemented solutions.</td>
            </tr>
            <tr>
              <td>
                <Image
                src={"/assets/images/Lab.png"}
                alt="test"
                h={"50%"}
                w={"50%"}
                />
                Lab
              </td>
              <td>Non-functional test</td>
              <td>We must test the operating conditions under which the system delivers its intended functions.</td>
            </tr>
            <tr>
              <td>
                <Image
                src={"/assets/images/Workshop.png"}
                alt="test"
                h={"50%"}
                w={"50%"}
                />
                Lab
              </td>
              <td>Root cause analysis</td>
              <td>Identify the possible factors that could have led to each common security flaw in IoT devices and each security vulnerability we found during pen testing. For each one, we must define security measures to prevent those problems.</td>
            </tr>
            </table>
            </ListItem>
          </OrderedList>
      </Container>
      <Container h={"200px"}></Container>
    </Box>
  );
  