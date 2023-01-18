import {
    Box,
    Container,
    Image,
    Text,
    ListItem,
    UnorderedList,
    Link,
  } from "@chakra-ui/react";
  
  export const Foscam = () => (
    <Box w={"100%"} alignItems="center">
      <Container maxW={["100%", "80%"]} p={4}>
        <Text fontSize="3xl"> Foscam IP Camera</Text>
        <br />
        <Text fontSize="xl" fontWeight={"bold"}> Introduction </Text>
        <Text fontSize={"l"}>
        The FOSCAM IP camera is one of the IoT devices we investigated thoroughly. This was mainly due to a discovery that was made during the initial setup of the device. When trying to access the webcam control panel, a certificate was presented to us for FOSCAM’s domain. This was quite peculiar since the device was operating in offline mode. From this, we stipulated that in order for the device to present us with a valid certificate, it must have a private key stored physically on the device. To confirm this, we decided to gain physical access to the device in order to extract this key.  
        </Text>
        <br />
        <Text fontSize={"xl"} fontWeight={"bold"}>Accessing the device</Text>
        <Text fontSize={"l"}>
        The FOSCAM IP camera is one of the IoT devices we investigated thoroughly. This was mainly due to a discovery that was made during the initial setup of the device. When trying to access the webcam control panel, a certificate was presented to us for FOSCAM’s domain. This was quite peculiar since the device was operating in offline mode. From this, we stipulated that in order for the device to present us with a valid certificate, it must have a private key stored physically on the device. To confirm this, we decided to gain physical access to the device in order to extract this key.  
        </Text>
        <br />
        <Text fontSize={"l"}>
        When tearing down the device, our objective was to find a serial port. Serial ports are used by embedded system developers to debug their devices as well as for a variety of other technical reasons. The reason we want access to the serial port interface is because it will enable us to observe the boot process, access the bootloader, check for debug messages, and even spawn a shell that will allow us to interact with the system.         
        </Text>
        <br />
        <Text fontSize={'xl'} fontWeight={"bold"}>Serial headers typically consist of 4 pins: </Text>
        <UnorderedList>
          <ListItem>Vcc (3.3V) </ListItem>
          <ListItem>Ground (GND) </ListItem>
          <ListItem>Transmit (TXD) </ListItem>
          <ListItem>Receive (RXD) </ListItem>
        </UnorderedList>
        <br />
        <Text fontSize={"l"}>
        These serial ports, which use Universal asynchronous receiver-transmitter (UART) as their communication protocol, are typically disabled for the end user and have no pins or connectors attached.  
        </Text>
        <br />
        <Image
          src={"/assets/images/Arduino.jpg"}
          alt="test"
          h={"50%"}
          w={"50%"}
          marginLeft={"25%"}
        />
        <br />
        <Text textAlign="center" fontSize={"l"}>
        After identifying the unused pins, using a multimeter, we were able to probe each pin and identify the UART connection. Using the continuity mode on our multimeter, we figured out which pin was being used for ground and power. With the remaining two pins, we simply just switched around the connected pins until we got the one for transmission and receiving.          
        </Text>
        <br />
        <Image
          src={"/assets/images/pins.jpg"}
          alt="test"
          h={"50%"}
          w={"50%"}
          marginLeft={"25%"}
        />
        <br />
        <Text textAlign="center" fontSize={"l"}>
        Since we identified the correct pins, we connected these pins to an Arduino, and with minicom, we were able to establish a UART connection. This took a few tries because the baud rate, which is used for serial communication, took a few guesses to get correct, which turned out to be 115200.  
        </Text>
        <br />
        <Text textAlign="center" fontSize={"l"}>
        When we were done with all the configuration, we were finally able to see the boot process of the FOSCAM device. The boot process revealed a lot of information about how the device Is configured, what the mount paths for different directories etc.        
        </Text>
        <br />
        <Image
          src={"/assets/images/shell1.png"}
          alt="test"
          h={"50%"}
          w={"50%"}
          marginLeft={"25%"}
        />
        <br />
        <Text textAlign="center" fontSize={"l"}>
        At the end of the boot process, we were prompted for a password. With some OSINT, we were quickly able to figure out that the password used was “ipc.fos~”. This is because the same password has been used for a different FOSCAM IP camera model from our current model.  
        </Text>
        <br />
        <Image
          src={"/assets/images/shell2.png"}
          alt="test"
          h={"50%"}
          w={"50%"}
          marginLeft={"25%"}
        />
        <br />
        <Text textAlign="center" fontSize={"l"}>
        After providing the correct password, we got a shell. It also showed a lot of interesting commands; one that particularly stood out was Trivial File Transfer Protocol (TFTP), as it allows us to transfer an image to our host machine. We can use this to transfer the contents of the flash memory of this device.  
        </Text>
        <br />
        <Text textAlign="center" fontSize={"l"}>
        When we configured the TFTP, we were successfully able to access the contents of the flash memory. Initial binwalk revealed the structure of our dumped file; it also showed that it contains a squashed file system.
        </Text>
        <br />
        <Image
          src={"/assets/images/shell3.png"}
          alt="test"
          h={"50%"}
          w={"50%"}
          marginLeft={"25%"}
        />
        <br />
        <Text textAlign="center" fontSize={"l"}>
        Once we extracted the file, we got to see the contents of the squashed filesystem as well as the compressed archives. They contained files which were used for configuring the IP camera from the sounds to play when it is connected to the boot configuration files.
        </Text>
        <br />
        <Image
          src={"/assets/images/config.png"}
          alt="test"
          h={"50%"}
          w={"50%"}
          marginLeft={"25%"}
        />
        <br />
        <Text textAlign="center" fontSize={"l"}>
        While looking through these files, we were finally able to obtain the private key, which initially led us to our investigation.
        </Text>
        <br />
        <Image
          src={"/assets/images/privateKey.png"}
          alt="test"
          h={"50%"}
          w={"50%"}
          marginLeft={"25%"}
        />
        <br />
        <Text textAlign="center" fontSize="xl" fontWeight={"bold"}> Conclusion </Text>
        <Text textAlign="center" fontSize={"l"}>
        This was a known vulnerability for FOSCAM at the time it came out and they hadn’t addressed it back then. For us it a nice demonstration of why you shouldn’t store private data, a private key in this case, locally on a device that you distribute to end users.
        </Text>
        
      </Container>
      <Container h={"300px"}></Container>
    </Box>
  );
  