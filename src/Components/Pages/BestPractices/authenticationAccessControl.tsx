import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Image,
  Text,
  Divider,
  ListItem,
  OrderedList,
  UnorderedList,
  Link,
} from "@chakra-ui/react";

export const AuthenticationAccessControl = () => (
  <Box w={"100%"} alignItems="center">
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl"> Authentication and Access Control </Text>
      <Text fontSize={"l"}>
      Authentication and Access Control in the Internet of Things
      </Text>
      <br />
      <Text fontSize={"xl"}>Table of Contents</Text>
      <UnorderedList>
        <ListItem>Architecture</ListItem>
        <ListItem>Authentication protocol</ListItem>
        <ListItem>Disadvantages of particular protocol</ListItem>
        <ListItem>Advantages of particular protocol</ListItem>
        <ListItem>Security Analysis</ListItem>
        <ListItem>Conclusion</ListItem>
      </UnorderedList>
      <br />
      <Text fontSize={"xl"}>Explanation</Text>
      <Text fontSize={"ll"}>
      Along with the emerging trend of IoT, there come challenges in terms of privacy and security. 
      Authentication is a communication protocol processing procedure which could be a solution for IoT security. 
      In IoT, secure communication should be constructed between “Machine A” and another “machine B” by such a procedure. 
      The identity that the second machine or object claims, should be consistent with what the first machine claims. 
      Claimed identity information becomes a single message. Based on this message, we verify the identity of the machines.
      </Text>
      <br />
      <Text fontSize={"ll"}>
      To ensure secure high-layer communication, both communication partners must implement the authentication protocol 
      (e.g., application layer). This is often accomplished through a number of sub-tasks that are part of the authentication protocol, 
      such as key switching, identity key establishment, and consultation. 
      Through message identification, an authentication procedure can learn more about the identity of the machine making the claim. 
      ECC (Elliptic Curve Cryptosystem) is a component of this solution architecture for IoT security. 
      We can use the RBAC-based (Role-Based Access Control) authorization approach for the access control policy, 
      utilizing the unique role and application of the machine in the connected IoT network.
      </Text>
      <br />
      <Text fontSize={"l"} fontWeight={"bold"}>Architecture</Text>
      <Text fontSize={"l"}>
      For the architecture we have machines with unique global addresses which are capable of communicating with each other over the internet. 
      In order to organize and manage massive resources, every machine will pre-register on a nearby trustworthy access point denoted in Figure 1 below as RA or Registration Authority. Here the RA is responsible for authenticating machines. The RA is also responsible for keeping a history record of all access requests. 
      </Text>
      <br />
      <Image
      src={"/assets/images/IoTArchitecture.png"}
      alt="test"
      h={"50%"}
      w={"50%"}
      />
      <Text fontSize={"l"}>
      Figure 1: Secure architecture [1]
      </Text>
      <br />
      <Text fontSize={"l"} fontWeight={"bold"}>
      Authentication protocol
      </Text>
      <Text fontSize={"l"}>
      To better describe the protocol [1], we must first introduce some relevant terms here:
        <UnorderedList>
          <ListItem>
          <p><b>F<sub>p</sub></b> - a finite field</p>
          </ListItem>
          <ListItem>
          <p><b>E</b> - an elliptic curve defined on “<b>F<sub>p</sub></b>” with a large order</p>
          </ListItem>
          <ListItem>
          <p><b>P<b/></b> - a point on “<b>E</b>”;</p>
          </ListItem>
          <ListItem>
          <p><b>G</b> - the group of elliptic curve points on “<b>E</b>”</p>
          </ListItem>
          <ListItem>
          <p><b>h</b> - a public one-way hash function</p>
          </ListItem>
          <ListItem>
          <p><b>s</b> - the RA's private key</p>
          </ListItem>
          <ListItem>
          <p><b>ID<sub>u</sub></b> - the identity of the user</p> 
          </ListItem>
          <ListItem>
          <p><b>ID<sub>t</sub></b> - the identity of the machine</p>
          </ListItem>
        </UnorderedList>
        <br />
        Key establishments and key distribution are fundamental for entity authentication. 
        We can use either Secret Key Cryptography (SKC) or Public Key Cryptography (PKC) for the implementations. 
        Here are the pros and cons of each algorithm. 
      </Text>
      <br />
      <Text fontSize={"l"} fontWeight={"bold"}>
      Disadvantages of particular protocol
      </Text>
      <Text fontSize={"l"}>
      SKC-based schemes suffer the following problems:
        <UnorderedList>
          <ListItem>
          they require large storage capacity to store key materials.
          </ListItem>
          <ListItem>
          provide low scalability due to the distribution of the keys.
          </ListItem>
          <ListItem>
          you have to add and revoke keys.
          </ListItem>
          <ListItem>
          require complicated key pre-distribution.
          </ListItem>
      </UnorderedList>
      <br />
      </Text>
      <Text fontSize={"l"}>
      PKC-based schemes suffer from:
      <UnorderedList>
          <ListItem>
          high energy consumption. 
          </ListItem>
          <ListItem>
          considerable time delay.
          </ListItem>
      </UnorderedList>
      <br />
      </Text>
      <Text fontSize={"l"} fontWeight={"bold"}>
      Advantages of particular protocol
      </Text>
      <Text fontSize={"l"}>
      With PKC you:
        <UnorderedList>
          <ListItem>
          have a more flexible and simpler interface compared to SKC.
          </ListItem>
          <ListItem>
          do not have to pre-distribute keys.
          </ListItem>
          <ListItem>
          do not have to use pair-wise key sharing.
          </ListItem>
          <ListItem>
          do not have to use complicated one-way key chain schemes.
          </ListItem>
        </UnorderedList>
       </Text>
      <br />
      <Text fontSize={"l"}>
      For the example in Figure 1, it is wise to adopt a PKC-based solution. 
      To establish a session key for two machines as an example, only three steps are required [1]:
      
        <UnorderedList>
          <ListItem>
          <p>Firstly : RA will produce a random “<b>P ∈ G</b>” and compute “<b>P<sub>s</sub> = sP in F<sub>p</sub></b>”
          Note: the “<b>s</b>” is a secret key that is assigned before the RA has connected. For each user identity “<b>ID<sub>u</sub></b>”, 
          RA will generate “<b>P<sub>u</sub> = h(ID<sub>u</sub>)</b>” and the private key of the machine “<b>S<sub>u</sub> = s P<sub>u</sub></b>”</p>
          </ListItem>
          <ListItem>
          <p>Secondly: the user generates a private key “<b>a</b>” and compute “<b>Q<sub>u</sub> = a S<sub>u</sub></b>” and “<b>Q<sub>u</sub> = a P</b>”. 
          Then the user will send an authentication message <br/>“<b>{"{"}ID<sub>u</sub>, Q<sub>u</sub>, h (ID<sub>u</sub>||ID<sub>t</sub>||Q<sub>u</sub>|| Q<sub>u</sub>) {"}"}</b>” to the RA. 
          Once the message is received, 
          RA will compute “<b>Q<sub>u</sub> = s<sup>-1</sup>Q<sub>u</sub></b>” and check whether “<b>h (ID<sub>u</sub>||ID<sub>t</sub>||Q<sub>u</sub>||Q<sub>u</sub>) </b>” 
          is equal to “<b>h (ID<sub>u</sub>||ID<sub>t</sub>||Q<sub>u</sub>||Q<sub>u</sub>)</b>” or not. 
          If not, authentication fails. Otherwise go to step 3.</p>
          </ListItem>
          <ListItem>
          <p>Thirdly: session key establishment takes place. Similarly, 
          the RA will choose a random key “<b>b</b>” and compute “<b>Q<sub>t</sub> = bP</b>” for the desired machine. 
          The session key will be “<b>h (abP)</b>” based on the ECC algorithm.</p>
          </ListItem>
        </UnorderedList>
       </Text>
      <br />
      <Text fontSize={"l"}>
      To authenticate legitimate users, 
      we would need a central authentication method which is only available with a widely accepted KDC (Key Distribution Center). 
      OpenID solves this problem. 
      OpenID enables users to have a single account that allows them to log on to many different sites by authenticating 
      a single identity provider [2]. 
      User authentication is performed in the user domain or registered OpenID service provider. 
      We Denote it as Home Registration Authority (HRA). 
      A complete request procedure for accessing machines involves seven steps [1] as shown in Figure 1. 
      </Text>
      <br />
      <Text fontSize={"l"}>
      Step 1: User request to access a machine.
      </Text>
      <Text fontSize={"l"}>
      Step 2: The machine sends an authentication request to its RA for verification purposes.
      </Text>
      <Text fontSize={"l"}>
      Step 3: RA requests UserID.
      </Text>
      <Text fontSize={"l"}>
      Step 4: User responds with the HRA information.
      </Text>
      <Text fontSize={"l"}>
      Step 5: RA verifies the user's HRA information and sends the ID verification request to the HRA.
      </Text>
      <Text fontSize={"l"}>
      Step 5.1: HRA challenges the user with a question.
      </Text>
      <Text fontSize={"l"}>
      Step 5.2: User responds to the challenge with the answer.
      </Text>
      <Text fontSize={"l"}>
      Step 6: The HRA responds to the ID with OK or not OK.
      </Text>
      <Text fontSize={"l"}>
      Step 7: The RA responds to the machine with the UserID and issues a session key with the user.
      </Text>
      <br />
      <Text fontSize={"l"} fontWeight={"bold"}>
      Security Analysis
      </Text>
      <Text fontSize={"l"}>
      In this section, we analyze for 4 types of attacks, 
      whether the protocol is secure or not.
      </Text>
      <OrderedList>
          <ListItem>
          Eavesdropping attack
          </ListItem>
          <Text fontSize={"l"}>
          Each session produces a different session key. 
          Someone with knowledge of past session keys cannot deduct future session keys. 
          In Figure 1, the session key is calculated by one way hash and session secrets. 
          Only the user and RA know the “abP”, which is computed from a random key. 
          This means that even if previous secrets are leaked, other secrets will remain unknown.
          </Text>
          <ListItem>
          Man-in-the-middle attack
          </ListItem>
          <Text fontSize={"l"}>
          <p>In Figure 1, even if the RA's secret key is compromised, the previous session key cannot be compromised. 
          This is true because the adversary cannot know the key “<b>a</b>” or “<b>b</b>” making it impossible to compute the session key.</p>
          </Text>
          <ListItem>
          Key control attack
          </ListItem>
          <Text fontSize={"l"}>
          Both communication entities select a random number to generate the session key with. 
          This number is discarded after the session expires. 
          Neither one can control the outcome of the session by restricting the session key to be generated with a selected value. 
          This means that this protocol can resist key control attacks.
          </Text>
          <ListItem>
          Replay attack
          </ListItem>
          <Text fontSize={"l"}>
          In case someone with malicious intent got his hands on a valid session key or captured network traffic, 
          the protocol should resist replay attack by introducing a nonce in every transmitted message.
          </Text>
        </OrderedList>
      <br/>
      <Text fontSize={"l"} fontWeight={"bold"}>
      Conclusion
      </Text>
      <Text fontSize={"l"}>
      This protocol is a possible authentication and access control method specific for utilization in IoT. 
      Analysis shows that the approach can prevent attacks like eavesdropping, 
      man-in-the-middle attack, key control attack and replay attacks.
      </Text>
      <Divider m={2} />
      <Text fontSize="3xl"> Bibliography </Text>
      <Text fontSize={"xl"}>
        The bibliography according to this page is <br />
        <OrderedList>
          <ListItem>
          Liu, Jing & Xiao, Yang & Chen, C.. (2012). Authentication and Access Control in the Internet of Things. 
          Int. J. of Security and Networks. 7. 588-592. 10.1109/ICDCSW.2012.23, from &nbsp;
            <Link href="https://www.researchgate.net/publication/261479017_Authentication_and_Access_Control_in_the_Internet_of_Things#fullTextFileContent">
              ResearchGate <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
          A. Vapen, D. Byers, and N. Shahmehri, “2-clickAuth - optical challenge-response authentication,” 
          in: Proceedings of 2010 International Conference on Availability, 
          Reliability and Security, 2010, pp. 79-86, from &nbsp;
            <Link href="https://www.researchgate.net/publication/224127068_2-clickAuth_Optical_Challenge-Response_Authentication">
              ResearchGate <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </OrderedList>
      </Text>
    </Container>
    <Container h={"200px"}></Container>
  </Box>
);
