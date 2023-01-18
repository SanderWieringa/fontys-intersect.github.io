import { Box, Container, Image, Text, ListItem, UnorderedList, Link } from '@chakra-ui/react';

export const AppleWatch = () => (
  <Box w={'100%'} alignItems="center">
    <Container maxW={['100%', '80%']} p={4}>
      <Text fontSize="3xl"> Apple Watch</Text>
      <br />
      <Text fontSize="xl" fontWeight={"bold"}> Introduction </Text>
      <Text fontSize={'l'}>
      As part of our testing on IoT devices, we worked on an apple watch to look at how smart watches operate and how they are secured. Although, Apple is different from other manufacturers in terms of operating system and security techniques used on their devices.  </Text>
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
    
        <Text fontSize={'l'} >The SmartWatch was strong in its base security, meaning that the implementation the manufacturer implemented were working correctly. We were unable to decipher the traffic from/to the watch and were not able to directly interact with the base functionalities like Wifi / Bluetooth.

            there were no other open attack vectors for us to exploits except the outdated OS it was running.</Text>
        <br/>
        <Text fontSize="l"></Text>
        <br/>
        <Text id={"PossibleFixes"} fontSize={'xl'} fontWeight={"bold"}>Results</Text>
        <Text fontSize="l" >
          Apple regularly patches any bugs or vulnerabilities found on their devices and firmware. As a result, we were unable to find any vulnerabilities. But we investigated why and how they are secure. 

          Apple Watches uses many of the same hardware-based platform security techniques that iOS and iPadOS use. These techniques include: 
          <UnorderedList>
          <ListItem>Performing secure boot and secure software updates </ListItem>
        <ListItem>Maintaining operating system integrity </ListItem>
        <ListItem >Helps protect data — both on the device and when communicating with a paired iPhone or the internet  </ListItem>
      </UnorderedList>
<br></br>
          As well some unique apple features implemented for the apple watch such as:  
          <UnorderedList>
          <ListItem>WatchOS updates. </ListItem>
        <ListItem>Wrist detection. </ListItem>
        <ListItem >Activation lock. </ListItem>
        <ListItem >Secure pairing. </ListItem>
        <ListItem >  Secure use of Wi-Fi, mobile, iCloud and mail services.  </ListItem>
      </UnorderedList><br></br>
          WatchOS updates: 
          <br></br>
          WatchOS, which is the firmware used for apple watches, uses keybags to store user's passcode.
           By storing the user passcode, it allows the apple watch firmware to be updated overnight. That way the device is always up to date. 
            <br></br> <br></br>
          Wrist detection: 
          <br></br>
          If wrist detection is enabled, the device locks automatically soon after it is removed from the user’s wrist. 
          When wrist detection is disabled, Control Centre provides an option for locking Apple Watch. This feature adds 
          a good level of security for the device since it eliminates the possibility of getting access to someone’s watch.
           <br></br> <br></br>
          Activation lock: 
          <br></br>
          An iPhone's associated Apple Watch can employ Activation Lock if Find My iPhone is enabled on the connected iPhone.
           Activation Lock makes it harder for anyone to use or sell an Apple Watch that has been lost or stolen. Activation 
           Lock requires the user’s Apple ID and password to unpair, erase or reactivate an Apple Watch.
            <br></br><br></br>
          Secure pairing:
          <br></br>
          Apple Watches can only be paired with one iPhone at a time. When the Watch is unpaired, iPhone communicates
           instructions to erase all content and data from the watch. Pairing an Apple Watch with an iPhone is secured by 
           using an out-of-band process to exchange public keys, followed by the Bluetooth Low Energy (BLE) link shared secret.
            Apple Watch displays an animated pattern similar to a QR code in functionality which is captured by the camera on iPhone.
             The pattern contains an encoded secret that is used for BLE 4.1 out-of-band pairing. Standard Bluetooth Low Energy Passkey 
             Entry is used as a fallback pairing method, if necessary. 
             <br></br><br></br>
             After the BLE session is established and encrypted, iPhone and Apple Watch exchange keys using either: 

             <UnorderedList>
              <ListItem>
              A process adapted from Apple Identity Service (IDS) as described in the iMessage security overview.
             </ListItem>
             <ListItem>
             A key exchange using IKEv2/IPsec. The initial key exchange is authenticated using either the Bluetooth session key (for pairing scenarios) 
             or the IDS keys (for operating system update scenarios). Each device generates a random public and private 
             256-bit Ed25519 key pair and during the initial key exchange process, the public keys are exchanged. 
             </ListItem>
              </UnorderedList> 

             
         </Text><br></br>
         <Image
          src={"/assets/images/AppleWatchPairing.jpg"}
          alt="test"
          h={"25%"}
          w={"25%"}
          marginLeft={"40%"}
        />
        <br/>
        <Text id={"Bestpractices"} fontSize={'xl'} fontWeight={"bold"}>Best practices</Text>
        <Text fontSize="l" >
            The Apple watch should be updated when given the chance to as referred to in the 
             <Link textColor={"blue"} href={"/#/bestpractices/versionupdate"}> version update</Link> best practice.
            Always set the automatic update option on the phone smartwatch app to “ON”, 
            making sure the user does not have to think about keeping their device upto to date.
             As well as, linking the iAccount to the smartwatch app on the phone. This way the user
              can erase their data, or transfer their data to a new watch safely. </Text>

            <br/>
        <Text id={"PossibleFixes"} fontSize={'xl'} fontWeight={"bold"}>Conclusions</Text>
        <Text fontSize="l" >
          The WatchOS has many security features that are efficient and effective.
          Even though high-security measures can affect usability, in this case apple manages to keep
          their devices user-friendly without sacrificing security. Other manufacturers can implement similar 
          features such as wrist detection to add a new level of privacy and security to their products. 
         </Text>
        <br/>    
    </Container>
    <Container h={"200px"}></Container>
  </Box>
);

