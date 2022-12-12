import {
  Box,
  Container,
  Image,
  Text,
  ListItem,
  UnorderedList,
  Link,
} from "@chakra-ui/react";

export const Wled = () => (
  <Box w={"100%"} alignItems="center" mb={"20px"}>
    <Image
      src={"/assets/images/wled_logo.png"}
      alt="test"
      h={"15%"}
      w={"15%"}
      marginLeft={"10%"}
    />
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl"> WLED </Text>
      <Text fontSize="2xl" fontWeight={"bold"}>
        Intro
      </Text>
      <Text fontSize="l">
        Wled is a program that is widely used among ledstrip users, this
        software is open source and can be used via the app or via the web
        interface. Here we will pentest the certain aspects of this software and
        share our findings.
      </Text>
      <br />
      <Text fontSize={"xl"} fontWeight={"bold"}>
        Table of Contents{" "}
      </Text>
      <UnorderedList>
        <ListItem>Case Explanation</ListItem>
        <ListItem>Tools</ListItem>
        <ListItem>Strengths</ListItem>
        <ListItem>Vulnerabilities</ListItem>
        <ListItem>Possible Fixes</ListItem>
        <ListItem>Best practices</ListItem>
        <ListItem>Conclusion</ListItem>
      </UnorderedList>
      <br />
      <Text fontSize="l">
        The application was tested according to the cyber kill chain. Testing
        was done on a home network that was only accessible to the testers.
      </Text>
      <br />
      <Text fontSize={"xl"} fontWeight={"bold"}>
        Tools
      </Text>
      <Text fontSize={"l"}>
        The tools that were used are mostly the same tools
      </Text>
      <Text fontSize={"l"}>
        Among these are:
        <UnorderedList>
          <ListItem>  <Link textColor={"blue"}  href="/#/tooling/burpsuite">
            Burp Suite
          </Link></ListItem>
          <ListItem><Link textColor={"blue"}  href="/#/tooling/loic">
            LOIC
          </Link></ListItem>
          <ListItem><Link textColor={"blue"}  href="/#/tooling/wireshark">
            WireShark
          </Link></ListItem>
        </UnorderedList>
      </Text>
      <br />
      <Text fontSize={"xl"} fontWeight={"bold"}>
        Strengths
      </Text>
      <Text fontSize={"l"}>
        This application was found very vulnerable, it seemed hereby unnecessarily to mention the strengths, even if we could find them.
      </Text>
      <br />
      <Text fontSize={"xl"} fontWeight={"bold"}>
        Vulnerabilities
      </Text>
      <Text fontSize={"l"}>
        The vulnerabilities, in this case, are as followed:
      </Text>
      <br />
      <Text>
        <Text fontWeight={"bold"}>Bad error handling:</Text> If there’s an
        error, the error messages display very little to no information. This is
        very inconvenient to both the user and the developer because nobody can
        see what went wrong.
      </Text>
      <br />
      <Text>
        <Text fontWeight={"bold"}>Fix:</Text> Add standard error handling and in
        depth error messages that don’t reveal vital information but also give
        the user and developer enough info to find out what went wrong.
      </Text>

      <br />
      <Text>
        <Text fontWeight={"bold"}>No password needed:</Text> By default, there
        is no password and no password requirements
      </Text>
      <br />
      <Text>
        <Text fontWeight={"bold"}>Fix:</Text> Force the user to create a
        password at application setup, set clear and secure password
        requirements. Including but not limited to the following:
      </Text>
      <br />
      <UnorderedList>
        <ListItem>
          At least 8 characters—the more characters, the better
        </ListItem>
        <ListItem>A mixture of both uppercase and lowercase letters</ListItem>
        <ListItem> A mixture of letters and numbers</ListItem>
        <ListItem>
          {" "}
          Inclusion of at least one special character, e.g., ! @ # ? ]
        </ListItem>
      </UnorderedList>
      <br />
      <Text>
        <Text fontWeight={"bold"}>DOS attack:</Text> It is possible to perform a
        DOS attack, after only 10000 requests the esp will reboot making it
        unable to work via the interface or client.
      </Text>
      <Image
      src={"/assets/images/Wled_Loic.png"}
      alt="test"
      h={"50%"}
      w={"50%"}
      />
      <br />
      <Text>
        <Text fontWeight={"bold"}>Fix:</Text> Integrating a form of request
        filtering, making it mostly impossible to perform an attack from a
        single node DDOS may still work but is unrealistic for this device.
      </Text>
      <br />
      <Text>
        <Text fontWeight={"bold"}>External requests:</Text> Using Burp suite it
        was possible to resend old requests or edit these requests, since the
        software does not use any form of headers or sessions it was easy to
        send these requests without any problem.
      </Text>
      <Image
      src={"/assets/images/Wled_burbsuit.gif"}
      alt="test"
      h={"50%"}
      w={"50%"}
    />
    <br />
    <Image
      src={"/assets/images/Wled_Leds_inf.png"}
      alt="test"
      h={"50%"}
      w={"50%"}
    />
      <br />
      <Text>
        <Text fontWeight={"bold"}>Fix:</Text> Using a session id according with
        cookies and header it is more difficult to send requests without the
        proper equipment or tokens.
      </Text>
      <br />
      <Text fontSize="2xl" fontWeight={"bold"}>
        Best Practices
      </Text>

      <Text>
        The following best practices were missing in this case:{" "}
        <Link textColor={"blue"}  href="/#/bestpractices/splitdev">
          split development and production environments
        </Link>
        ,{" "}
        <Link textColor={"blue"} href="/#/bestpractices/authentication">
          authentication
        </Link>{", "}
        <Link textColor={"blue"}  href="/#/bestpractices/authorization">
          authorization
        </Link>
        ,{" "}
        <Link textColor={"blue"} href="/#/bestpractices/errorhandling">
          error handling
        </Link>
        ,{" "}
        <Link textColor={"blue"}  href="/#/bestpractices/inputvalidation">
          input validation
        </Link>
        ; more about these best practices can be read on their respective pages.
      </Text>
<br/>
      <Text id={"Conclusion"} fontSize={'xl'} fontWeight ={'bold'}>Conclusion</Text>
      <Text fontSize="l">
        All of the vulnerabilities in the application can be fixed. To fix those, for each vulnerability the
        best practice needs to be followed. After this is done, there should be a lot of tests, to see if the
        vulnerabilities are really fixed.
      </Text>
      <br/>
    </Container>
    <Container h={"200px"}></Container>
  </Box>
);
