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

export const ProsCons = () => (
  <Box w={"100%"} alignItems="center">
    <Container maxW={["100%", "75%"]} p={4}>
      <Text fontSize="3xl"> What are the advantages and disadvantages of IoT systems/devices? </Text>
      <br />
      <Text fontSize="20px">Pros and Cons of IoT</Text>
      <Text>IoT systems and devices come with a plethora of disadvantages and advantages.</Text><br/>
      <Text>Advanatges(Pros) of IoT:</Text>
      <UnorderedList>
        <ListItem>
        ability to access information from anywhere at any time on any device.
        </ListItem>
        <ListItem>
        improved communication between connected electronic devices.
        </ListItem>
        <ListItem>
        transferring data packets over a connected network saving time and money.
        </ListItem>
        <ListItem>
        Automating tasks helps to improve the quality of a business's services and reduces the need for human intervention. 
        </ListItem>
      </UnorderedList><br/>

      <Text>Disadvantages(cons) of IoT: </Text>
      <UnorderedList>
        <ListItem>
        The likelihood that a hacker may obtain confidential information rises as the number of connected devices rises and information is transmitted more widely between devices.
        </ListItem>
        <ListItem>
        Enterprises may eventually have to deal with massive numbers of IoT devices and collecting and managing the data from all those devices will be challenging. 
        </ListItem>
        <ListItem>
        If there is a bug in the system, every connected device will become corrupted. 
        </ListItem>
        <ListItem>
        Since there is no international compatibility standard for IoT, it is difficult for devices from different manufacturers to communicate with each other. 
        </ListItem>
      </UnorderedList><br/>

      <Text fontSize="20px">Benefits of IoT in organizations and industries</Text>
      <Text>The internet of things offers several benefits to organizations. Some benefits are industry-specific,
         and some are applicable across multiple industries. IoT touches every industry, including healthcare, finance,
          retail, and manufacturing businesses. IoT is most abundant in manufacturing, transportation, and utility organizations. 
          It makes use of sensors and other IoT devices. </Text>
          <Text>Some of the well-established benefits of IoT enable businesses to: </Text>
      <UnorderedList>
        <ListItem>
        Monitor their overall business processes 
        </ListItem>
        <ListItem>
        Improve the customer experience (CX) 
        </ListItem>
        <ListItem>Save time and money. </ListItem>
        <ListItem>Enhance employee productivity. </ListItem>
        <ListItem>Integrate and adapt business models. </ListItem>
        <ListItem>Make better business decisions. </ListItem>
        <ListItem>Generate more revenue. </ListItem>
        <ListItem>Improve business strategies.</ListItem>
      </UnorderedList>  <br/>  
      <Text>IoT benefits in agriculture revolve around sensors that can collect data on rainfall, humidity, 
        temperature, and soil content, as well as other factors that would help automate farming techniques.
         Infrastructure sensors, for example, could monitor events or changes within structural buildings, bridges,
          and other infrastructure, bringing benefits such as: </Text>
      <UnorderedList>
        <ListItem>Cost saving </ListItem>
        <ListItem>Saved time</ListItem>
        <ListItem>Quality-of-life workflow changes</ListItem>
        <ListItem>Paperless workflow</ListItem><br/>
        
      </UnorderedList>
      <Text>IoT also provides benefits in home automation. Businesses can utilize IoT to monitor and manipulate mechanical 
        and electrical systems in a building. On a broader scale, smart cities can help citizens reduce waste and energy consumption. </Text>

    </Container>
    <Container h={"200px"}></Container>
  </Box>
);
