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

export const IoTStrategies = () => (
  <Box w={"100%"} alignItems="center">
    <Container maxW={["100%", "75%"]} p={4}>
      <Text fontSize="3xl"> What are the most effective strategies to improve IoT security?</Text>
      <br />
      
      <Text>There are many ways to improve the current IoT security strategies, some work alongside each other and some do not. The rising concern regarding IoT security raises the question of how we can improve IoT security. </Text><br/>
      <Text fontSize="20px">Automation in Security</Text>
      <Text>Firstly, artificial intelligence is a topic that is frequently discussed. This implies that numerous modern technologies are now available for both offensive and defensive cybersecurity operations. 

Not only are security analysts a crucial component of the security process, but they are also its most crucial component. So, instead of thinking about automation to replace security analysts, we should consider it as a tool to enable them to perform more of what they do best. This distinction is crucial.  

Having said that, relying only on automated security processes might pose a risk to a business, however, adopting automation is not always bad. And by combining human resources and modern technologies, we can have positive results in terms of security. </Text>

<br/><Text fontSize="20px">Consider the entire IoT ecosystem </Text>
<Text>Evaluate the security capabilities and responsibilities of your IoT product and service vendors. Establish clear lines of accountability and, in worst-case scenarios, liability.  

That includes deploying access controls for example. One of the biggest security concerns businesses face when linking assets, goods, and devices is controlling access inside an IoT ecosystem. Controlling network access also extends to the linked objects themselves. <br/>Prior to implementing rules that take this into account while at the same time not impeding processes, organizations should first determine the behaviors and activities that linked items inside the IoT environment find acceptable. <br/>says John Pironti, president of consulting firm IP Architects and an expert on IoT security. “Instead of using a separate VLAN (Virtual LAN) or network segment which can be restrictive and debilitating for IoT devices, implement context-aware access controls throughout your network to allow appropriate actions and behaviors, not just at the connection level but also at the command and data transfer levels”.  </Text>
<br/><Text fontSize="20px">Leverage IoT expertise from outside </Text>
<Text>Standards for network connectivity, devices, and other components are frequently still being defined as IoT continues to rapidly evolve. Because of this, many businesses do not yet possess the knowledge necessary to manage all facets of IoT internally, much alone keep up with the developments. Here, outside knowledge can be useful. 

</Text>
<br/><Text fontSize="20px">Make use of strong passwords </Text><Text>Using a weak password on smart devices is by far the biggest security breach risk factor for customers. Many people frequently continue to use default passwords on their gadgets. The Mirai Botnet, which searches the internet for IoT devices with default passwords and usernames, may then launch an attack because of this. Try to create extremely secure passwords for every device and change them frequently. A secure IoT is ensured by using separate passwords for each device. </Text>

    </Container>
    <Container h={"250px"}></Container>
  </Box>
);