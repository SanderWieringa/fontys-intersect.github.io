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
      <Text fontSize="3xl"> What are the characteristics of IoT? </Text>
      <br />
      <Text fontSize={"l"}>
      <b>What is IoT?</b>
      </Text>
      
      <Text fontSize={"l"}>
      IoT, or the Internet of Things, is a system of interrelated IoT computing devices, mechanical and digital machines, objects, animals, or people with assigned UIDs. A thing on the internet of things can be any natural or artificial object that can be given an IP address and is able to transfer data over a network without requiring human-to-human or human-to-computer interaction. For example, things, or the correct term 'IoT devices,' could be items like heart monitors, tesla cars, and animal biochips, to name a few.
      </Text>
      <br />
      <Text fontSize={"l"}>The technology ecosystem of an IoT system is composed of the following four layers:</Text>
      <UnorderedList>
        <ListItem>Device layer - This layer comprises the combination of sensors, actuators, hardware, software, connectivity, and gateways that constitute a device that connects and interacts with a network.</ListItem>
        <ListItem>Data layer - This layer constitutes the collected, processed, sent, stored, analyzed, presented, and used in business contexts data.</ListItem>
        <ListItem>Business layer - This layer comprises the business operations of IoT technology, such as billing and data marketplace administration.</ListItem>
        <ListItem>User layer - Comprises the people who interact with IoT devices and technologies.</ListItem>
      </UnorderedList>
      <br></br>
      <Text fontSize={"l"}>
      <b>How does it work?</b>
      </Text>
      <Text fontSize="l"> 
        The IoT ecosystem consists of web-enabled smart devices that use embedded systems, such as processors, sensors, and communication hardware, to collect, send and act on data gathered from their environments. On the other hand, IoT devices share sensor data they collect by connecting to an IoT gateway or another edge device where data is either sent to the cloud to be analyzed or analyzed locally. Sometimes, these devices communicate with other related devices and act on the information they get from one another. The devices do most of the work without human intervention, although people can interact with the devices. The connectivity, networking, and communication protocols used with these web-enabled devices depend on the specific IoT applications deployed. 
      </Text>
      <br></br>
      <Text fontSize="l"> 
        IoT can also use AI and machine learning to help make data-collecting processes more dynamic and easier. 
      </Text>
      <br></br>
      <Text fontSize="l"> 
        A significant aspect of IoT systems is determining the devices' IoT protocols. In other words, how the devices connect and communicate. In the IoT technology stack, devices connect through gateways or built-in functionality. Gateways are part of IoT technology and have their use in helping link IoT devices to the cloud. Though not all IoT devices require a gateway, they are used to establish device-to-device communication or connect devices that are not IP based and cannot connect to the cloud directly. IoT devices collected data moves through a gateway, gets preprocessed at the edge, and then gets sent to the cloud. Using IoT gateways can lower latency and reduce transmission sizes. Additionally, having gateways as part of a system's IoT protocols also allows one to connect devices without direct internet access and provides an additional layer of security by protecting data moving in both directions.  
      </Text>
      <br></br>
      <Text fontSize="l"> 
        The type of connectivity utilized as a part of IoT protocols depends on the device, its function, and its users. Typically, the distance the data must travel determines the type of IoT connectivity it needs. There are two types of IoT networks.
        Low-power, short-range networks are well-suited for homes, offices, and other small environments. They tend only to need small batteries and are usually inexpensive to operate. Some common examples of such networks are:
      </Text>
      <UnorderedList>
        <ListItem>Bluetooth is adequate for high-speed data transfer. It sends both voice and data signals up to ten meters.</ListItem>
        <ListItem>NFC is a set of communication protocols for transmission between two electronic devices over 4 cm (1 ⁄2 in) or less. NFC offers a low-speed connection with a simple setup that can be used to bootstrap more capable wireless connections.</ListItem>
        <ListItem>Wi-Fi/802.11 - The low cost of operating Wi-Fi makes it a standard across homes and offices. However, it may not be the right choice for all scenarios because of its limited range and 24/7 energy consumption.</ListItem>
        <ListItem>Z-Wave is a mesh network using low-energy radio waves to communicate from appliance to appliance.</ListItem>
        <ListItem>Zigbee - An IEEE 802.15.4-based specification for a suite of high-level communication protocols used to create personal area networks with small, low-power digital radios.</ListItem>
      </UnorderedList>
      <br></br>
      <Text fontSize="l"> 
        On the other hand, low-power, wide-area networks (LPWAN) enable communication across a minimum of five hundred meters, require minimal power, and are utilized for most IoT devices. Some examples of LPWAN networks are:
      </Text>
      <br></br>
      <UnorderedList>
        <ListItem>4G LTE IoT - These networks have a high capacity and low latency and are a splendid choice for IoT scenarios that require real-time information or updates.</ListItem>
        <ListItem>Cat-0 - These LTE-based networks are the lowest-cost option. They lay the groundwork for Cat-M, a technology that will replace 2G.</ListItem>
        <ListItem>Cat-1 - A standard for cellular IoT that will eventually replace 3G. Cat-1 networks are easy to set up and offer a solution for applications requiring a voice or browser interface.</ListItem>
        <ListItem>LoRaWAN - Long-range wide-area networks (LoRaWANs) connect mobile, secure, bi-directional battery-operated devices.</ListItem>
        <ListItem>LTE Cat-M1 - These networks are fully compatible with LTE networks. They optimize cost and power in the second generation of LTE chips designed specifically for IoT applications.</ListItem>
        <ListItem>Narrowband or NB-IoT/Cat-M2 - NB-IoT/Cat-M2 sends data directly to the server via direct-sequence spread spectrum (DSSS) modulation, removing the requirement for a gateway. Although NB-IoT networks are more expensive to set up, they are less costly to run since they do not require a gateway.</ListItem>
        <ListItem>Sigfox - This global IoT network supplier provides wireless networks to link low-power devices that continuously output data.</ListItem>
      </UnorderedList>
      <br></br>
      <Text fontSize={"l"}>
      <b>Importance of IoT</b>
      </Text>
      
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
    <Container h={"250px"}></Container>
  </Box>
);
