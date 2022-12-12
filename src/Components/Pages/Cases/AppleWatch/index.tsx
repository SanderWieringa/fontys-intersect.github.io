import { Box, Container, Image, Text, ListItem, UnorderedList, Link } from '@chakra-ui/react';

export const AppleWatch = () => (
  <Box w={'100%'} alignItems="center">
    <Container maxW={['100%', '80%']} p={4}>
      <Text fontSize="3xl"> Apple Watch</Text>
      <br />
      <Text fontSize="xl" fontWeight={"bold"}> Introduction </Text>
      <Text fontSize={'l'}>
      As part of our testing on IoT devices, we worked on an apple watch to look at how smart watches operate and how are they secured. Although, Apple is different than other manufacturers in terms of operating system and security techniques used on their devices.  </Text>
      <br />
      <Text fontSize={'xl'} fontWeight={"bold"}>Table of Contents</Text>
      <UnorderedList>
          <ListItem>Case Expectations</ListItem>
        <ListItem>Strengths</ListItem>
        <ListItem >results</ListItem>
        <ListItem>Best practices</ListItem>
        <ListItem>Conclusion</ListItem>
      </UnorderedList>
        <br/>
        <Text id={"CaseExpectations"} fontSize={'xl'} fontWeight={"bold"}>Case Expectations</Text>
        <Text fontSize="l" >
        Apple is well known for their security, due to their custom firmware. By looking at the apple watch, we were expecting to find some vulnerabilities since the model we had was a series 1 from 2016.  </Text>

      <br/>
      <Text id={"Strengths"} fontSize={'xl'} fontWeight={"bold"}>Strengths</Text>
        <br/>
        <Text fontSize={'l'} >The SmartWatch was strong in its base security, meaning that the implementation the manufacturer implemented were working correctly. We were unable to decipher the traffic from/to the watch and were not able to directly interact with the base functionalities like Wifi / Bluetooth.

            there were no other open attack vectors for us to exploits except the outdated OS it was running.</Text>
        <br/>
        <Text id={"Vulnerabilities"} fontSize={'xl'} fontWeight={"bold"}>Vulnerabilities</Text>
        <Text fontSize="l" >
            to do .........
        </Text>
        <Text fontSize="l"></Text>
        <br/>
        <Text id={"PossibleFixes"} fontSize={'xl'} fontWeight={"bold"}>results</Text>
        <Text fontSize="l" >
          to do..........
         </Text>
        <br/>
        <Text id={"Bestpractices"} fontSize={'xl'} fontWeight={"bold"}>Best practices</Text>
        <Text fontSize="l" >
            The Smartwatch should be updated when given the chance to as referred to in the <Link textColor={"blue"} href={"/#/bestpractices/versionupdate"}>version update</Link> best practice.

            Always set the automatic update option on the phone smartwatch app to “ON”, making sure the user does not have to think about whether he has to update his watch or not. And if the user has one, link the account to the smartwatch app on the phone. This way the user can erase their data, or transfer their data to a new watch safely. </Text>

            <br/>
        <Text id={"PossibleFixes"} fontSize={'xl'} fontWeight={"bold"}>conclusions</Text>
        <Text fontSize="l" >
          to do..........
         </Text>
        <br/>    
    </Container>
    <Container h={"200px"}></Container>
  </Box>
);

