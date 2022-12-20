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
      <Text fontSize="3xl"> How effective is current IoT security? </Text>
      <br />
      <Text fontSize={"l"}>
        IoT connects billions of devices to the internet and involves the use of billions of data points, all of which need to be secured. Due to its expanded attack surface, IoT security and privacy are major concerns. 
      </Text>
      <br></br>
      <Text fontSize={"l"}>
      <b>Incorrect access control</b>
      </Text>
      <br />
      <Text fontSize={"l"}>
        A device must offer a service solely available to its owner or authorized users. However, this is often insufficiently enforced by the security system of a device, as some devices have weak security measures that could allow access from other devices on the local area network. The primary issue is that identical model devices have the same default password. Since default passwords are prime targets for hackers, this jeopardizes the security system. When the device connects to the Internet, this becomes especially problematic because everyone on the planet can now potentially gain access to it. IoT devices often have a single account or privilege level, both exposed to the user and internally, meaning that there is no further access control after obtaining this privilege. This single level of protection is ineffective against many vulnerabilities.
      </Text>
      <br />
      <Text fontSize={"l"}>The steps to fixing the problem include:</Text>
      <br></br>
      <UnorderedList>
        <ListItem>Changing the default password once buying the device.</ListItem>
        <ListItem>Create a new, strong password for the device consisting of letters and figures.</ListItem>
        <ListItem>Additionally, the password should change regularly to keep hackers at bay.</ListItem>
        <ListItem>Usage of an IoT Hub (e.g., Azure).</ListItem>
        <ListItem>Attribute-based access control (ABAC).</ListItem>
        <ListItem>Keeping an eye on the device's behavior.</ListItem>
        <ListItem>Making use of quarantining and Access Control.</ListItem>
        <ListItem>Usage multi-factor authentication.</ListItem>
      </UnorderedList>
      <br></br>
      <Text fontSize={"l"}>
      <b>The overly large attack surface</b>
      </Text>
      <Text fontSize="l"> 
      Each connection to a system opens a fresh set of possibilities for attackers to uncover and exploit weaknesses. The more services a device provides via the Internet, the more attack vectors it exposes. Countermeasures could be:. 
      </Text>
      <br></br>
      <UnorderedList>
        <ListItem>Reduce attack surface.</ListItem>
        <ListItem>Operating system/privilege escalation. (Give fewer privileges).</ListItem>
        <ListItem>The principle of least privileges.</ListItem>
        <ListItem>Safe programming languages.</ListItem>
      </UnorderedList>
      <br></br>
      <Text fontSize={"l"}>
      <b>Outdated software</b>
      </Text>
      <Text fontSize="l"> 
        As vulnerabilities in software are discovered and resolved, it is crucial to distribute the updated version to protect against them. One of the security issues with IoT devices is that companies producing them are often too careless when it comes to proper testing and providing timely software updates.
      </Text>
      <br></br>
      <Text fontSize="l"> 
        As a result, IoT devices running obsolete software may be vulnerable to a slew of malware and hacker assaults, as well as other security flaws. Regular automatic updates are of utmost importance for avoiding IoT security issues. The manufacturer must update the device's software as soon as vulnerabilities are exposed, and exact malware attacks become widespread.  
      </Text>
      <br></br>
      <Text fontSize={"l"}>
      <b>Insecure communications</b>
      </Text>
      <Text fontSize="l"> 
      Most existing security mechanisms were initially designed for desktop computers and are hard to implement on resource-constrained IoT devices. That is why traditional security measures are not as efficient at protecting the communication of IoT devices.
      </Text>
      <br></br>
      <Text fontSize="l"> 
        One of the most dangerous threats caused by insecure communications is the possibility of a man-in-the-middle (MitM) attack. Hackers can effortlessly perform MitM attacks to compromise an update procedure and take control of a device if it does not use secure encryption and authentication mechanisms. Attackers can even install malware or change a device’s functionality. Even if a device does not fall victim to a MitM attack, the data it exchanges with other devices and systems can still be captured by cybercriminals if it sends it in cleartext messages.
      </Text>
      <br></br>
      <UnorderedList>
        <ListItem>Connected devices are susceptible to attacks from other devices. For instance, if attackers gain access to just one device in a home network, they can easily compromise all other unisolated devices in the network.</ListItem>
      </UnorderedList>
      <br></br>
      <Text fontSize={"l"}>
      <b>Application vulnerabilities</b>
      </Text>
      <Text fontSize="l"> 
      Like all software bugs, security vulnerabilities are impossible to avoid when developing software. However, there are methods to avoid well-known vulnerabilities or reduce the possibility of such. Additionally, it includes best practices for avoiding application vulnerabilities, such as consistently performing input validation. Some examples are:
      </Text>
      <br></br>
      <UnorderedList>
        <ListItem>Input validation.</ListItem>
        <ListItem>SQL injection.</ListItem>
        <ListItem>XSS.</ListItem>
        <ListItem>Buffer overflow.</ListItem>
        <ListItem>Binary exploitation.</ListItem>
      </UnorderedList>
      <br></br>
      <Text fontSize={"l"}>
      <b>Lack of trusted execution environment</b>
      </Text>
      <Text fontSize="l"> 
        Most IoT devices are effectively general-purpose computers that can run specific software, which makes it possible for attackers to install their software. That software has functionality that is not part of the normal functioning of the device. By limiting the functionality of a device and the software, it can run, the ways to abuse the device are limited. For example, the device can have restrictions to only connect to the vendor’s cloud service. Those restrictions would make it ineffective in a DDoS attack since it can no longer connect to arbitrary target hosts.
      </Text>
      <br></br>
      <Text fontSize="l"> 
        Code is typically signed with a cryptographic hash to limit the software a device can run. Since only the vendor has the key to sign the software, the device will only run software distributed by the vendor. This way, an attacker can no longer run arbitrary code on a device. Implementing code signing must be done to completely restrict the code running on the device in the boot process, with the help of hardware.
      </Text>
      <br></br>
      <Text fontSize={"l"}>
      <b>Vendor security posture</b>
      </Text>
      <Text fontSize="l"> 
        The first step when developing a reliable product is to have security as a high priority. However, this is not done enough in the IoT market. In IoT getting a working product on the market before anyone else is the chief goal. Therefore, a disregard for security. It is because of this that IoT devices are easy to exploit.
      </Text>
      <br></br>
      <Text fontSize="l"> 
        Furthermore, employees often are expected to learn about security on their own. There is no training material to help employees develop securely. Due to work pressure, this part of the development is often neglected. This includes:
      </Text>
      <br></br>
      <UnorderedList>
        <ListItem>Lack of awareness and training.</ListItem>
        <ListItem>Lack of budget/care.</ListItem>
        <ListItem>Competitive market/incorrect priorities.</ListItem>
      </UnorderedList>
      <br></br>
      <Text fontSize="l"> 
        Eventually, the public will find security vulnerabilities. The reaction of the vendor determines the impact. The vendor has a role in receiving input on potential vulnerabilities, developing mitigation, and updating devices. Whether the vendor has an arranged process to handle security issues determines the vendor's security posture.
      </Text>
      <br></br>
      <Text fontSize={"l"}>
      <b>Insufficient privacy protection</b>
      </Text>
      <Text fontSize="l"> 
        IoT devices and related services should handle sensitive information correctly and securely and only after provided consent of the end-user of the device, is it applied to both the storage and distribution of sensitive information. In the case of privacy protection, the vendor plays a key role. Other than an external attacker, the vendor or an affiliated party may be responsible for a privacy breach. Handling sensitive information incorrectly includes:
      </Text>
      <br></br>
      <UnorderedList>
        <ListItem>Do not collect data you cannot protect.</ListItem>
        <ListItem>Bad or incorrectly implemented encryption.</ListItem>
        <ListItem>CIA triad / Confidentiality.</ListItem>
        <ListItem>Invalid data access restrictions.</ListItem>
      </UnorderedList>
      <br></br>
      <Text fontSize="l"> 
        An IoT device vendor or service provider could gather information on consumer behavior for purposes like market research without explicit consent.
      </Text>
      <br></br>
      <Text fontSize={"l"}>
      <b>Intrusion ignorance</b>
      </Text>
      <Text fontSize="l"> 
        When a device is compromised, it often continues to function normally from the user's point of view. Any additional bandwidth or power usage is usually not detected. Most devices do not have logging or alerting functionality to notify the user of security problems. If they have, these can be overwritten or disabled when the device is compromised. The result is that users rarely discover that their device is under attack or was compromised, preventing them from taking mitigating measures. Ignoring intrusion includes:
      </Text>
      <br></br>
      <UnorderedList>
        <ListItem>Confidentiality/Integrity.</ListItem>
        <ListItem>Inability to respond to an intrusion.</ListItem>
        <ListItem>No monitoring / IDS.</ListItem>
      </UnorderedList>
      <br></br>
      <Text fontSize={"l"}>
      <b>Insufficient physical security</b>
      </Text>
      <Text fontSize="l"> 
        If attackers have physical access to a device, they can open it and attack the hardware. For example, by reading the contents of the memory components, bypassing any protecting software can be done. Furthermore, the device may have contacts for debugging, accessible after opening the device, which provides an attacker with additional possibilities.
      </Text>
      <br></br>
      <Text fontSize="l"> 
        A physical attack can be impactful if it uncovers a device key shared amongst all devices of the same model, compromising a wide range of devices. However, sharing the key amongst all devices is not a physical security problem but a design one. Insufficient physical security includes:
      </Text>
      <br></br>
      <UnorderedList>
        <ListItem>Incorrect threat modeling.</ListItem>
        <ListItem>Physical access gives a lot of options.</ListItem>
      </UnorderedList>
      <br></br>
      <Text fontSize={"l"}>
      <b>User interaction</b>
      </Text>
      <Text fontSize="l"> 
        For most of the above security categories, it is difficult for a non-technical user to evaluate whether a device meets the requirement. However, user interaction can be perceived, by definition, by the end-user. This means the consumer can gauge how well a device performs on user interaction. User interaction is an important category to check if implemented security measures are activated and used correctly. For instance, it is useless if it is possible to change the default password, but the user does not know how or cannot discover the functionality. Solutions for user interaction include:
      </Text>
      <br></br>
      <UnorderedList>
        <ListItem>Sacrifice ease of use for security.</ListItem>
        <ListItem>Limit functionality.</ListItem>
        <ListItem>Change the default password.</ListItem>
      </UnorderedList>
    <br></br>
    </Container>

    <Container h={"250px"}></Container>

  </Box>
);
