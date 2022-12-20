import {
  Box,
  Container,
  Text,
  Divider,
  ListItem,
  UnorderedList,
  OrderedList,
} from "@chakra-ui/react";

export const Characterize = () => (
  <Box w={"100%"} alignItems="center">
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl"> Characterize "good" and "bad" practices </Text>
      <Text fontSize={"l"}>
        What does it mean for something to be a bad practice or for something to
        be a good practice?
      </Text>
      <br />
      <Text fontSize={"xl"}>Table of Contents</Text>
      <UnorderedList>
        <ListItem>Introduction</ListItem>
        <ListItem>Development of a good practice</ListItem>
        <ListItem>Relation to IoT</ListItem>
        <ListItem>Conclusion</ListItem>
      </UnorderedList>

      <br />
      <Text fontSize={"xl"} fontWeight={"bold"}>
        Introduction
      </Text>
      <Text fontSize={"ll"}>
        It is important to understand the distinction between good practices and
        bad practices in any field or area of activity. Good practices are
        methods or techniques that have been proven to be effective and
        efficient, while bad practices are those that are generally considered
        to be incorrect, inefficient, or problematic. In many cases, good
        practices are based on best practices, which are methods or techniques
        that have been identified as the most effective and efficient ways of
        achieving a particular goal. These best practices are often developed
        through experience and research, and are designed to help improve
        quality, efficiency, and effectiveness in a given area. Bad practices,
        on the other hand, are typically based on poor techniques, outdated or
        incorrect information, or a lack of understanding of the best way to do
        something. They can lead to problems, errors, and inefficiencies, and
        are generally discouraged.
      </Text>
      <br />
      <br />

      <Text fontSize={"l"} fontWeight={"bold"}>
        Development of a good practice
      </Text>
      <Text fontSize={"l"}>
        One example of a bad practice in the field of software development is
        the use of "copy and paste" coding, where code is copied and pasted from
        one location to another without understanding or modification. This can
        lead to code that is difficult to maintain, as it is not clear what the
        code is doing or why it is there. It can also lead to errors and bugs,
        as the code may not be adapted to the specific context in which it is
        being used. A good practice in software development, on the other hand,
        is the use of modular design, where code is organized into
        self-contained units that can be easily reused and modified. This makes
        it easier to maintain and update the code and can also help to prevent
        errors and bugs.
      </Text>
      <br />
      <Text fontSize={"l"}>
        Good practices are important in all fields and contexts, as they help to
        ensure that work is done efficiently, effectively, and with a high level
        of quality. They are often based on best practices and developed through
        experience and research and can help to improve outcomes and avoid
        problems. In addition to that, an important aspect of good practices is
        that they are often based on sound principles or theories that are
        widely accepted within a particular field of context. On the other hand,
        bad practices can lead to errors, inefficiencies, and other problems,
        and are generally discouraged. It is important to identify and adopt
        good practices, and to avoid bad practices, in order to achieve the best
        possible results.
      </Text>
      <br />
      <Text fontSize={"l"}>
        Good practices are often developed through a process of trial and error,
        as well as research and analysis. They are based on the best available
        evidence and are designed to help improve outcomes and avoid problems.
        Bad practices, on the other hand, are typically based on poor
        techniques, outdated or incorrect information, or a lack of
        understanding of the best way to do something. They can lead to
        problems, errors, and inefficiencies, and are generally discouraged.
      </Text>
      <br />
      <br />
      <Text fontSize={"l"} fontWeight={"bold"}>
        Relation to IoT
      </Text>
      <Text fontSize={"l"}>
        In the context of the Internet of Things (IoT), a good practice would be
        the development and use of IoT devices and systems that prioritize
        security, privacy, and the ethical use of data. This could include
        things like using strong passwords and encryption to protect against
        hacking, designing devices with built-in privacy controls to prevent the
        collection of unnecessary or sensitive data, and adhering to laws and
        regulations related to data privacy and security. On the other hand, a
        bad practice in the IoT context might include the development and use of
        devices that have weak security measures, that collect and use data in
        unethical or manipulative ways, or that disregard the privacy and
        consent of the users. For example, an IoT device that lacks sufficient
        security measures could be vulnerable to hacking and could potentially
        be used to access sensitive personal or financial information.
        Similarly, an IoT device that collects and uses data in a way that is
        not transparent or that does not respect the privacy and consent of the
        user could be considered a bad practice. Overall, it is important for
        those involved in the development and use of IoT technologies to
        consider the potential consequences of their actions and to prioritize
        good practices that prioritize the well-being and privacy of the users.
      </Text>
      <br />
      <br />
      <Text fontSize={"l"} fontWeight={"bold"}>
        Good and Bad practices
      </Text>
      <Text fontSize={"l"}>
        Here are a few examples of good practices and bad practices related to
        the Internet of Things (IoT):
        <br />
        <br />
        <Text fontSize={"l"} fontWeight={"semibold"}>
          Good practices:
        </Text>
        <Text fontSize={"l"}>
          <OrderedList>
            <ListItem>
              Ensuring that IoT devices have strong and unique passwords: Good
              password practices are important for all devices connected to the
              internet, including IoT devices. Using strong, unique passwords
              helps to prevent unauthorized access to these devices and the data
              they collect and transmit.
            </ListItem>
            <ListItem>
              Updating IoT device firmware and software regularly: Regular
              updates can help to fix security vulnerabilities and improve the
              performance of IoT devices. It is important to keep these devices
              up to date to ensure that they are secure and functioning
              properly.
            </ListItem>
            <ListItem>
              Using secure network protocols: Secure network protocols, such as
              HTTPS and SSL, help to protect the data transmitted by IoT devices
              and prevent unauthorized access.
            </ListItem>
            <ListItem>
              Ensuring that IoT devices are designed with privacy in mind: Good
              privacy practices are important for IoT devices, as they often
              collect and transmit sensitive personal data. It is important to
              ensure that these devices are designed with privacy in mind, and
              that appropriate measures are in place to protect the privacy of
              users.
            </ListItem>
          </OrderedList>
        </Text>
        <br />
        <Text fontSize={"l"} fontWeight={"semibold"}>
          Bad practices:
        </Text>
        <Text fontSize={"l"}>
          <OrderedList>
            <ListItem>
              Using weak or default passwords: Using weak or default passwords
              leave IoT devices vulnerable to hacking and unauthorized access.
              It is important to use strong, unique passwords to protect these
              devices and the data they collect and transmit.
            </ListItem>
            <ListItem>
              Neglecting to update IoT device firmware and software: Failing to
              update IoT device firmware and software can leave these devices
              vulnerable to security vulnerabilities and performance issues. It
              is important to keep these devices up to date to ensure that they
              are secure and functioning properly.
            </ListItem>
            <ListItem>
              Using insecure network protocols: Using insecure network
              protocols, such as HTTP, can leave the data transmitted by IoT
              devices vulnerable to interception and unauthorized access. It is
              important to use secure network protocols to protect this data.
            </ListItem>
            <ListItem>
              Neglecting privacy considerations in the design of IoT devices: If
              IoT devices are not designed with privacy in mind, they may
              collect and transmit sensitive personal data without appropriate
              safeguards in place to protect user privacy. It is important to
              ensure that these devices are designed with privacy in mind, and
              that appropriate measures are in place to protect the privacy of
              users.
            </ListItem>
          </OrderedList>
        </Text>
      </Text>
      <br />
      <br />
      <Text fontSize={"l"} fontWeight={"bold"}>
        Conclusion
      </Text>
      <Text fontSize={"l"}>
        In conclusion, it is important to understand the distinction between
        good practices and bad practices in any field or context. Good practices
        are based on best practices and are designed to help improve quality,
        efficiency, and effectiveness, while bad practices can lead to problems,
        errors, and inefficiencies. It is important to identify and adopt good
        practices, and to avoid bad practices, in order to achieve the best
        possible results.
      </Text>
      <br />

      <Divider m={2} />
      <br />
      <Text fontSize="xl"> Bibliography </Text>
      <Text fontSize={"l"}>
        The bibliography according to this page is <br />
        <OrderedList>
          <ListItem>
          The Federal Trade Commission (FTC). "The Internet of Things: Privacy and Security in a Connected World"
          </ListItem>
          <ListItem>
          The National Institute of Standards and Technology (NIST). "IoT Security Best Practices"
          </ListItem>
          <ListItem>
          The Electronic Frontier Foundation (EFF). "The Internet of Things: Legal and Ethical Considerations" 
          </ListItem>
          <ListItem>
          The International Association of Computer Science and Information Technology (IACSIT). "Ethical Issues in the Internet of Things"  
          </ListItem>
        </OrderedList>
      </Text>
    </Container>
    <Container h={"200px"}></Container>
  </Box>
);
