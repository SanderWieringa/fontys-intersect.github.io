import {
    Box,
    Container,
    ListItem,
    OrderedList,
    Text,
    UnorderedList,
    Image,
  } from "@chakra-ui/react";
  
  export const Ehealth = () => (
    <Box w={"100%"} alignItems="center">
      <Container maxW={["100%", "40%"]} p={4}>
        <Text fontSize="3xl" fontWeight={"bold"}>
        Risk-based Adaptive Security for Smart IoT in eHealth
        </Text><br/>
        <Text>IoT in a nutshell is defined as a worldwide network of interconnected objects. Smart IoT here represents that the IoT possesses self-abilities or capabilities such as self-learning, self-adapting, and self-reasoning to adapt to dynamic environments. IoT improves the quality of our lives, just to cite a few: at home, while traveling, when sick, at work, when jogging, and at the gym. IoT in Healthcare can help with the tracking of objects and people (staff and patients), identification and authentication of people, and automatic data collection and sensing. The collected data constitutes real-time information on patient health indicators as a basis for medical diagnosis. The provision of the adaptability capability of IoT can reduce the delay in the treatment of critical patients enhancing traditional medical services. Although IoT can provide such simplest and least expensive solutions to wirelessly connect health monitoring devices in the home to personal health records and hospitals. The successful development and deployment of IoT-based services require that security and privacy are guaranteed.  </Text><br/>
        <UnorderedList>
            <ListItem>
            IoT is vulnerable to attacks since communications are mostly wireless and thus susceptible to eavesdropping. Things are usually unattended and thus vulnerable to physical attacks, and most IoT elements are short on both the energy and computing resources necessary for the implementation of complex security-supporting schemes.  
            </ListItem>
            <ListItem>
            Due to the widespread use of Radio Frequency Identification (RFID) tags and easier access to RFID readers in the Internet of Things, it will be possible to collect and cross-reference cheaply a large amount of data to infer sensitive personal information, creating yet another source of information about our movements, health, and habits. As a result, privacy and security issues will become increasingly important for end users and IoT service providers. 
            </ListItem>
            <ListItem>
            Deploying a thing in a new context, for which it was not specifically designed, may expose vulnerabilities and allow unwanted side effects to occur. This may turn previously harmless protocol flaws into critical flaws.  
            </ListItem>
        </UnorderedList><br/>
        <Text>
        One of the key issues in the security and privacy of IoT in eHealth is data integrity which also involves authentication, access control, and secure communication. The two frequently asked questions are: 
        <UnorderedList>
            <ListItem>How do you trust the data our sensors are sending? 
            </ListItem><ListItem>How do we even know it is a sensor that is sending data at all, and not a bot or a piece of malware? </ListItem>
            </UnorderedList><br/>
            To briefly answer these questions, enforcing the security and privacy of IoT systems lies in the key ability to take preventive measures so that hackers can hardly break into the system and hide their tracks, distinguishing suspicious activities from the normal operations of the system. Furthermore, once they are detected, to stop the malicious processes in a comprehensive and efficient way. 

 
        </Text><br/><br/>
        <Text fontSize="25px">Proposed adaptive framework</Text><br/>
        <Text>Adaptive security refers to a security solution that dynamically learns and adapts to changing environments and anticipates unknown threats without jeopardizing the IoT system's efficiency, flexibility, reliability, and security. It entails gathering contextual information both within the system and from the surrounding environment, measuring security levels and metrics, analyzing the collected data, and responding to changes by:<br/><br/>
        <OrderedList>
            <ListItem>
            adjusting internal working parameters. Such as encryption schemes, security protocols, security policies, security algorithms, different authentication, and authorization mechanisms, changing the QoS (Quality of Service) available to applications, and automating reconfiguration of the protection mechanisms. 
            </ListItem>
            <ListItem>
            making dynamic changes in the structure of the security system. An adaptive approach, such as the one proposed here, requires flexible learning and decision-making processes and make the best decisions, since both the qualitative and the quantitative aspects of a decision must be considered  
            </ListItem>
            
            </OrderedList>
        </Text><br/>
        <Text>The framework proposed here closes the adaptive control loop of management of security and privacy risks. Dynamically considering the necessary context information to ensure efficiency over time. It applies the Monitor-Analyze-Adapt (plan, execute and learn) methodology using feedback mechanisms. The actual effective reaction to security and privacy is made during the “Adapt” phase. The framework consists of: <br/>
        <br/><OrderedList>
            <ListItem>The adaptive risk management model.  </ListItem>
            <ListItem>The adaptive monitoring models.  </ListItem>
            <ListItem>The analytics and predictive models. </ListItem>
            <ListItem>The adaptive decision-making models. </ListItem>
            <ListItem>The evaluation and validation models.  </ListItem>
        </OrderedList><br/>
        <Container margin="auto">
        <Image
        src={"/assets/images/Ehealth.png"}
        alt="test"
        h={"85%"}
        w={"85%"}
        margin={"auto"}
        
        /></Container>
        </Text>
        

        
      </Container>
      <Container h={"200px"}></Container>
    </Box>
  );
  