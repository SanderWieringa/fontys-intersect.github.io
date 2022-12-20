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
      <br></br>
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
      <br></br>
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
      <Text fontSize={"l"}>
        IoT provides businesses with a real-time look into how their systems work, delivering insights into everything from the performance of machines to supply chain and logistics operations. IoT also enables companies to automate processes and reduce labor costs. It also cuts down on waste and improves service delivery, making it less expensive to manufacture and deliver goods. Lastly, it offers transparency in customer transactions.
      </Text>
      <br></br>
      <Text fontSize={"l"}>
        In domestic use, in addition to offering smart devices to automate homes, IoT helps people live and work smarter and gain complete control over their lives.
      </Text>
      <br></br>
      <Text fontSize={"l"}>
      <b>Real-world applications of IoT</b>
      </Text>
      <Text fontSize={"l"}>
        IoT applications appear in numerous industries, such as automotive, telecommunications, and energy. For example, in the consumer segment, Smart Homes can be controlled via computers and smartphones if they have remote-controlled electronic devices. On the other hand, wearable devices with sensors and software can collect, analyze user data, and send messages to other technologies about the users to help make users' lives more comfortable. Wearable devices are also used for public safety, for instance, providing optimized routes to a location and improving response times of first responders.
      </Text>
      <br></br>
      <Text fontSize={"l"}>
        IoT also offers many healthcare benefits, such as the ability to monitor patients closely, using an analysis of the generated data or help with inventory management for pharmaceuticals and medical instruments. Additionally, smart buildings, for instance, can reduce energy costs using sensors that detect how many occupants are in a room and adjust the temperature automatically.
      </Text>
      <br></br>
      <Text fontSize={"l"}>
        In agriculture, IoT-based intelligent farming systems have applications for monitoring light, temperature, humidity, and soil moisture of crop fields using connected sensors. Also, IoT is a crucial part of automated irrigation systems in agriculture.
      </Text>
      <br></br>
      <Text fontSize={"l"}>
        In a Smart City, IoT sensors and deployments, such as smart meters and streetlights, can help alleviate traffic, conserve energy, monitor and address environmental concerns, and improve sanitation.
      </Text>
      <br></br>
      <Text fontSize={"l"}>
      <b>IoT privacy</b>
      </Text>
      <Text fontSize={"l"}>
        Privacy is one of the key issues raised by IoT. The Internet of Things is becoming more widespread every day, meaning consumers need more and better security, which translates into privacy. 
      </Text>
      <br></br>
      <Text fontSize={"l"}>
        IoT privacy refers to the special considerations required to protect the information of individuals from exposure in the IoT environment in which almost any object or entity (physical or logical) can have a unique identifier and the ability to communicate autonomously over the internet or a similar network.
      </Text>
      <br></br>
      <Text fontSize={"l"}>
        As endpoints in the IoT environment transmit data autonomously, they also work in conjunction with other endpoints and communicate with them. Interoperability of things is essential to the IoT's functioning so that, for example, networked elements of a home, work together smoothly. 
      </Text>
      <br></br>
      <Text fontSize={"l"}>
        On its own, data transmitted by a given endpoint might not cause any privacy issues. However, even when fragmented data from multiple endpoints is gathered, collated, and analyzed, it can yield sensitive information. 
      </Text>
      <br></br>
      <Text fontSize={"l"}>
        The idea of networking appliances and other objects is new, especially in terms of global connectivity and autonomous data transfer, which are central to the Internet of Things. As such, there is not a lot of consideration for security in product design, which can make even everyday household objects points of vulnerability.
      </Text>
      <br></br>
      <Text fontSize={"l"}>
      <b>IoT protocols</b>
      </Text>
      <Text fontSize={"l"}>
        IoT devices communicate using IoT protocols. A protocol is a set of rules that dictates how data gets sent to the internet. IoT protocols ensure that information from one device or sensor gets read and understood by another device, a gateway, or a service. Different IoT protocols have been designed and optimized for different scenarios and usage. The type of IoT protocol needed depends on the system architecture layer in which the data will travel. Each IoT protocol in the IoT system architecture enables device-to-device, device-to-gateway, gateway-to-data center, or gateway-to-cloud communication, as well as communication between data centers.
      </Text>
      <br></br>
      <Text fontSize={"l"}>
        The application layer serves as the interface between the user and the device within a given IoT protocol. Examples of protocols in this layer are:
      </Text>
      <br></br>
      <UnorderedList>
        <ListItem>Advanced Message Queuing Protocol (AMQP) is an open-source standard for asynchronous messaging by wire. AMQP enables encrypted and interoperable messaging between organizations and applications. The protocol is used in client-server messaging and in IoT device management.</ListItem>
        <ListItem>Constrained Application Protocol (CoAP) is a constrained-bandwidth and constrained-network protocol designed for devices with limited capacity to connect in machine-to-machine communication. Also, CoAP is a document-transfer protocol that runs over User Datagram Protocol (UDP).</ListItem>
        <ListItem>Data Distribution Service (DDS) is a versatile peer-to-peer communication protocol that does everything, from running tiny devices to connecting high-performance networks. DDS streamlines deployment, increases reliability, and reduces complexity. It is also an IoT standard for real-time, scalable, and high-performance M2M communication.</ListItem>
      </UnorderedList>
      <br></br>
      <Text fontSize={"l"}>
      In any IoT protocol, the transport layer enables and safeguards the communication of the data as it travels between layers. This layer has the following protocols:
      </Text>
      <br></br>
      <UnorderedList>
        <ListItem>Transmission Control Protocol (TCP) is the dominant protocol for most internet connectivity. It offers host-to-host communication, breaking large data sets into individual packets and resending and reassembling packets as needed.</ListItem>
        <ListItem>User Datagram Protocol (UDP) is a communications protocol that enables process-to-process communication and runs on top of IP. UDP improves data transfer rates over TCP and best suits applications that require lossless data transmissions.</ListItem>
      </UnorderedList>
      <br></br>
      <Text fontSize={"l"}>
        The network layer of an IoT protocol helps individual devices communicate with the router. This layer has the following protocols:
      </Text>
      <br></br>
      <UnorderedList>
        <ListItem>Many IoT protocols utilize IPv4, with more recent executions using IPv6. This recent update to IP routes traffic across the internet and identifies and locates devices on the network.</ListItem>
        <ListItem>6LoWPAN is an open standard defined by the IETF. This IoT protocol works best with low-power devices that have limited processing capabilities. It enables any low-power radio to communicate to the internet.</ListItem>
      </UnorderedList>
      <br></br>
      <Text fontSize={"l"}>
        The data layer is the part of an IoT protocol that transfers data within the system architecture, identifying and correcting errors found in the physical layer. It contains the following protocols:
      </Text>
      <br></br>
      <UnorderedList>
        <ListItem>IEEE 802.15.4 is a protocol for low-powered wireless connection. It is used with other protocols to build wireless embedded networks.</ListItem>
        <ListItem>Low-power wide-area networks (LPWAN) networks enable communication across distances of five hundred meters to over 10km in some places. LoRaWAN is an example of LPWAN optimized for low power consumption. LoRaWAN stands for Long Range Wide Area Network. A protocol for WANs designed to support vast networks, such as smart cities, with millions of low-power devices.</ListItem>
      </UnorderedList>
      <br></br>
      <Text fontSize={"l"}>
        The physical layer is the communication channel between devices within a specific environment. Some example protocols in this layer include:
      </Text>
      <br></br>
      <UnorderedList>
        <ListItem>Bluetooth Low Energy (BLE) significantly decreases power consumption and costs while maintaining a similar communication range to traditional Bluetooth. Because of its low cost and extended battery life, BLE is quickly becoming a preference for consumer electronics.</ListItem>
        <ListItem>Ethernet is a wired connection that is a less expensive option that provides fast data connection and low latency.</ListItem>
        <ListItem>Long-term evolution (LTE) is a wireless broadband communication standard for mobile devices and data terminals. LTE increases the capacity and speed of wireless networks and supports multicast and broadcast streams.</ListItem>
        <ListItem>Power Line Communication (PLC) is a communication technology enabling sending and receiving of data over existing power cables. It allows for power and control of an IoT device through the same power cable.</ListItem>
        <ListItem>ZigBee is a low-power, low-data rate wireless network used in industrial settings. Based on the IEEE 802.15.4 standard for a suite of high-level communication protocols used to create personal area networks with small, low-power digital radios.</ListItem>
      </UnorderedList>
    </Container>
    <Container h={"200px"}></Container>
  </Box>
);
