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
            What are the characteristics of IoT? 
            </ListItem>
            <ListItem>
            What are the advantages and disadvantages of IoT systems/devices?
            </ListItem>
            <ListItem>
            How effective is current IoT security?
            </ListItem>
            <ListItem>
            What are the most effective strategies to improve IoT security?
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
              <td>Library</td>
              <td>Griffin</td>
              <td>Griffin</td>
            </tr>
            <tr>
              <td>Lois</td>
              <td>Griffin</td>
              <td>Hello</td>
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
              <td>Library</td>
              <td>Griffin</td>
              <td>Griffin</td>
            </tr>
            <tr>
              <td>Lois</td>
              <td>Griffin</td>
              <td>Griffin</td>
            </tr>
            <tr>
              <td>Lois</td>
              <td>Griffin</td>
              <td>Griffin</td>
            </tr>
            </table>
            </ListItem>
          </OrderedList>
          <br></br>
          
      </Container>
    </Box>
  );
  