import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

export const SmartLock = () => (
  <Box w={'100%'} alignItems="center">
    <Container maxW={['100%', '80%']} p={4}>
      <Text fontSize="3xl"> Smart Lock Biometric case</Text>
      <br />
      <Text fontSize="xl"> Introduction </Text>
      <Text fontSize={'l'}>
      The Master Lock 4901EURDLHCC is a biometric security lock that is used for locking something that needs to be locked outdoors. 
      It uses a biometric fingerprint reader and registered fingerprints to check if somebody is supposed to have access to this lock. It can also be unlocked by a preset code and it can store-up to 10 fingerprints.
      </Text>
      <br />
      <Text fontSize={'xl'}>Table of Contents</Text>
      <UnorderedList>
        <ListItem>Strenghts</ListItem>
        <ListItem>Vulnerabilities</ListItem>
        <ListItem>Possible fixes</ListItem>
        <ListItem>Best practices</ListItem>
      </UnorderedList>
      <br />
      <Text fontSize={'xl'}>Strenghts</Text>
      <Text fontSize={'l'}>
      Biometric scanner? Reset mechanism lockout with battery startup?
      </Text>
      <br />
      <Text fontSize={'xl'}>Vulnerabilities</Text>
      <Text fontSize="l" fontWeight="bold">
        Insecure Default Settings
      </Text>
      <Text fontSize="l">
        The Lock also has a standard password that is not required to be changed and limited requirements to the
        strength of this password. Meaning that if this standard password is known by attackers, they can access the
        lock easily.
      </Text>
      <Text fontSize="l" fontWeight="bold">
        Fix:
      </Text>
      <Text fontSize="l">
        force the user to create a password at device setup, set clear and secure password requirements. Including but
        not limited to the following At least 8 combinations with a possibility of more inputs like a number sequence.
      </Text>
      <Text fontSize="l" fontWeight="bold">
      Lack of Physical Hardening
      </Text>
      <Text fontSize="l">
      The device can’t deal with physical attacks very well.
      </Text>
      <Text fontSize="l" fontWeight="bold">
        Fix:
      </Text>
      <Text fontSize="l">
      use a better design and stronger metals, also  implement a cost-effective mechanism to instantly notify your customer about device tampering, notification delivery should be instant.
      </Text>
      <Text fontSize="l" fontWeight="bold">
      Bad error handling
      </Text>
      <Text fontSize="l">
      After inputting the correct code the device will instantly unlock, given that the standard number of combinations that people will have to go through to unlock your device is between 256 (4^4) and 4096 (4^6), if the users code is 6 combinations long  just inputting 6 numbers everytime can decrease the number of attempts to get in significantly.
      Also let users have limited login attempts within a short amount of time. This will increase the time an attacker will have to put in to open the lock with a bruteforce attack. 
      </Text>
      <Text fontSize="l" fontWeight="bold">
        Fix:
      </Text>
      <Text fontSize="l">
      Have a confirm button that makes it so that the user has to confirm their code every time.
      </Text>
      <br />
      <Text fontSize="xl">
        Best practices
      </Text>
      <Text fontSize="l">
      The best practises found in this case are related to physical hardening , and default settings; more about these best practices can be read on their respective pages.
      </Text>
      <br />
      <Text fontSize="xl">
          conclusion
      </Text>
      <Text fontSize="l">
        
      </Text>
    </Container>
  </Box>
);
