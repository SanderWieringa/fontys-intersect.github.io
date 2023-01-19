import {
    Box,
    Container,
    Text,
    Image,
    UnorderedList,
    ListItem,

  } from "@chakra-ui/react";
  
  export const Process = () => (
    <Box w={"100%"} alignItems="center">
      <Container maxW={["100%", "40%"]} p={4}>
        <Text fontSize="3xl" fontWeight={"bold"}>
          The Research Methodology of the Project
        </Text>
        <br />
        <Text fontSize="l"> Denis Nagayuk</Text>
        <br />
        <Text fontSize="l"> Student Fontys ICT & Cyber Security</Text>
        <br />
        <Image
          src={"/assets/images/methodology.png"}
          alt="The methodology of research."
        />
        <Text>
            This project relies on the research performed by several generations of cybersecurity students from Fontys
            under the guidance of INTERSCT and serves the high-level objective of improving the <b>security of the Internet
            of Things</b>. With such a broad scope, it becomes essential to direct attention toward investigating the most 
            promising topics that might yield meaningful discoveries. But how can we know them in advance? Of course, we don’t;
            yet, with a <b>methodological approach</b>, we can maximize our chances of success. The purpose of this article is to describe
            the process we have followed within our research and potentially inspire the future continuation of our work.
        </Text>
        <br />
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Impact & Risk Assessment
        </Text>
        <Text>
            The Internet of Things offers a great variety of smart interconnected devices with different purposes, access to information,
            and control over resources. Not all of them, therefore, bring the same risks in case of compromise. With the limited time at
            our disposal, our first objective becomes prioritizing research activities and to which topics we apply them. An excellent
            technique that can help with this task is <b>impact assessment</b>.
            <br/>
            To start with, we need to imagine as many categories of IoT devices as we can see fitting into the scope. For instance: IP cameras,
            fire alarms, motion sensors, smart speakers, etc. For each of them, we want to speculate what an attacker can gain <b>during a compromise</b>. 
            It can be the ability to access information, initiate or suppress specific actions, or fake collected data. Finally, we want to assign a score 
            that indicates the impact these actions have from the victim's perspective, be it the person who owns the device or the business that depends on
            its operation. If we arrange our findings in a table, it should look similar to the one shown below:
            <br/>
            <Image
              src={"/assets/images/Impact.png"}
              alt="Impact assessment table."
            />
            <br/>
            In this example, we took several devices you can typically find in personal use and analyzed the potential for their misuse against the owner.
            As you can see, we selected two compromise scenarios – <b>read-only</b> (passive) access and <b>complete control</b> (active) – and listed the threats they pose.
            Then we ranked the impacts with numeric values. Of course, these scores are merely our quick estimation; if you ask any other group of students, you’ll
            likely get a different result – after all, everybody is entitled to have opinions that depend on personal preferences. Assigning exact values is not,
            by any means, the end goal of this activity. The purpose of the exercise is to bring up discussions about existing threats and understand which of them
            are worth investigating first.
            <br/>
            For instance, hacking smart lightbulbs might allow controlling, well..., lights. It does not sound like something inherently impactful. On the other hand,
            IP cameras continuously transfer video data and, potentially,   sound – something that presents higher value to most people. Wearable devices (like smart watches)
            often have a microphone and might even be connected to contactless payment systems. If we shift more towards enterprise environments, we can include access control
            systems (such as smart card readers on the doors) as potentially critical infrastructure with a high impact of a compromise. In any case, impact assessment is a powerful
            technique that promotes a <b>systematic way of thinking</b> about all these options. 
            <br/>
            <blockquote>
                It is worth mentioning that there are also classes of attacks that apply equally (or almost equally) to all IoT devices. If a threat actor merely wants to
                achieve persistence on the network, they will likely use the path of least resistance. Any vulnerable IoT device becomes a valuable asset for them.
            </blockquote>
            <br/>
            Once we finished the initial impact assessment, we can go one step further and convert it into <b>risk analysis</b>. Here is a definition from the ISO standard:
            <blockquote>
                IT risk is the potential that a given threat will exploit vulnerabilities of an asset or group of assets and thereby cause harm to the organization.
                It is measured in terms of a combination of the probability of occurrence of an event and its consequence.
            </blockquote>
            <br/>
            Being cybersecurity students that are constantly immersed in the field of technology, we should have a reasonable understanding (up to a level of intuition) of
            what attack vectors are primarily applicable to given types of devices. Or, in other words, we can try to <b>estimate</b> how <b>plausible</b> it is for hackers can <b>compromise</b> them,
            even purely based on the technologies we might expect to find inside. For example, we know that an unnamed Chinese brand of smart doorbells cannot possibly compete (in terms
            of security) with smart speakers from Google. In technical terms, we can expect an old, poorly configured build of Linux on the former and an up-to-date Android/Chrome OS on the latter.
            <br/>
            To perform our <b>risk analysis</b> on the basic level, we need to evaluate how likely it is that the manufacturer of each device followed the best (or at least reasonable)
            practice during its creation. In addition to our <i>a priori</i> expectations, we can also consider <b>known security incidents</b> and <b>CVEs</b> associated with their devices. After that,
            we can use the well-known risk management diagram:
            <br/>
            <Image
              src={"/assets/images/Risks.png"}
              alt="Impact assessment table."
            />
        </Text>
        <br />
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          IoT-specific Attack Vectors
        </Text>
        <Text>
            One peculiar aspect of IoT hacking is the presence of two quite distinct phases of device’s lifetime: <b>pre-installation</b> and <b>post-installation</b>. Once arriving from
            the manufacturer, the device needs to be set up and integrated into the environment. Because this task might provide inherent technical challenges that ordinary
            users are not prepared to deal with, companies are tempted to sacrifice security for the sake of usability. As we know, keeping best of both world is not always possible.
            <br/>
            We identified several problems that might arise because of <b>oversimplifying</b> the configuration process and, thus, affect solely the <b>pre-installation</b> stage:
            <UnorderedList>
                <ListItem>Lack of or insufficient steps that <b>validate physical ownership</b>. In some cases, it might be enough to merely be in proximity of the device during its initial configuration.</ListItem>
                <ListItem>Use of a <b>weak</b> (guessable) unique device identifier <b>as shared secret</b>.</ListItem>
                <ListItem>Other <b>logical vulnerabilities</b> in the installation/configuration process.</ListItem>
            </UnorderedList>
            In contrast, once this step is complete, the device enters the <b>post-installation</b> phase. Some of the problems here include:
            <UnorderedList>
                <ListItem>Lack of <b>reliable encryption</b></ListItem>
                <ListItem>Improper <b>access control</b></ListItem>
                <ListItem><b>Side-channel</b> information disclosure attacks</ListItem>
            </UnorderedList>
            Perhaps, it is more likely that attackers will take advantage of vulnerabilities from this stage because of the sheer amount of time devices spend in this state.
            Yet, the pre-installation attacks might be easier to exploit since there is still little standardization of this process.
        </Text>
        <br />
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Final Thoughts
        </Text>
        <Text>
            Even correctly choosing the subject of investigation does not guarantee any success. Not as long as we measure it based on the number of discovered vulnerabilities.
            What is more important for the industry is material and knowledge that allows creators of technology to avoid making security-related mistakes. When people think of
            “security advice,” they often assume best practices. An equally important finding though is advice for <b>avoiding</b> specific <b>worst practices</b>. We tried to incorporate this
            principle into our research in the hope that it will help to make the technological world a more secure place.
        </Text>

      </Container>
      <Container h={"200px"}></Container>
    </Box>
  );
  