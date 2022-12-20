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
  OrderedList,
} from "@chakra-ui/react";

export const PKIprotocol = () => (
  <Box w={"100%"} alignItems="center">
    <Container maxW={["100%", "80%"]} p={4}>
      <Text fontSize="3xl"> PKI-like Protocol for the Internet of Things </Text>
      <Text fontSize={"l"}>
        Research on PKI-like Protocol for the Internet of Things
      </Text>
      <br />
      <Text fontSize={"xl"}>Table of Contents</Text>
      <UnorderedList>
        <ListItem>Introduction</ListItem>
        <ListItem>Threat model and assumptions</ListItem>
        <ListItem>
          Security considerations on the PKIoT server services
        </ListItem>
        <ListItem>The PKIoT Architecture</ListItem>
        <ListItem>PKIoT server services</ListItem>
        <ListItem>The PKIoT certificate</ListItem>
        <ListItem>Conclusion</ListItem>
      </UnorderedList>

      <br />
      <Text fontSize={"xl"} fontWeight={"bold"}>
        Introduction
      </Text>
      <Text fontSize={"ll"}>
        On the Internet, Public Key Infrastructure is the most modern credential
        management system. However, there is currently no centralized, scalable
        system for handling keys and identities for the millions of limited
        devices that make up the Internet of Things. Many small, battery powered
        IoT devices lack the necessary computational resources since modern PKI
        is built on a set of protocols that were not intended for constrained
        environment.
      </Text>
      <br />
      <Text fontSize={"ll"}>
        A wide range of networked systems use public key infrastructure (PKI)
        for centralized credential management and key distribution. PKI adoption
        by the Internet of Things (IoT) has been sluggish for a variety of
        technological and financial reasons. Pre-shared keys (PSK), which are
        problematic when connected to the Internet and made globally
        addressable, are frequently used instead in embedded systems. A single
        server compromise can put the entire network at risk since the keys need
        to be installed prior to deployment and because centralized resources
        must share a key with each device in order to connect. Additionally,
        many fundamental security guarantees like authentication, access
        control, non-repudiation, and proof-of-origin are inherently impossible
        with PSK systems. Despite the simplicity of each individual device, the
        sheer size of the IoT, which is expected to grow by billions of devices
        over the next few years, poses significant security issues. In
        conclusion, any device connected to the Internet must have strong
        authentication procedures, based on PKI and digital certificates,
        regardless of its size or function. In contrast, PINs and passwords are
        incredibly insecure.
      </Text>
      <br />
      <br />

      <Text fontSize={"l"} fontWeight={"bold"}>
        Threat model and assumptions [1]
      </Text>
      <Text fontSize={"l"}>
        1. Trust based:
        <br />
        We have faith in the local software and the hardware of the restricted
        device. We assume that there is at least one CA capable of generating
        certificates that the device can trust through an initial trust store.
        We presume that the NIST recommendations for key length and hash
        algorithm types will hold true for the coming decade. \
        <br />
        <br />
        2. Attack scenario and security assurances:
        <br />
        Any communication between the involved entities is susceptible to being
        overheard by an attacker. They could disguise themselves as a trusted
        entity or obtain any secret communication content in plaintext by
        blocking or altering messages while they are in transit, storing and
        replaying any message sent, or all three. This kind of adversary should
        not be able to compromise a communication system while still providing
        authentication and confidentiality through secure communication.
        Mechanisms to identify modified or replicated/repeated message attacks
        are required for a single communication session. A full communication
        system requires effective and secure key management processes, such as
        key provisioning and key revocation. Our main contribution is the
        initial secure and effective building blocks for key management that can
        fend off these kinds of assaults.
        <br />
        <br />
        3. Restrictions:
        <br />
        Denial-of-service attacks, in which the perpetrator bombards a target
        with erroneous requests, are not themselves protected by the proposed
        system; nevertheless, PKI4IoT makes it very difficult for an attacker to
        acquire access to an IoT device in the first place. Additional firewall
        defenses should be installed for DoS protection. Since we trust the
        hardware, as was already mentioned, an attacker who gained physical
        access to the device could potentially be able to extract a private key
        and compromise the system. Additional security hardware should be
        installed to stop this. Measures like formal analysis or fuzzing should
        be used to ensure software security.
        <br />
        <br />
        Table 2 Potential Security threats when using PKIoT services
      </Text>
      <Image src={"/assets/images/table2.png"} alt="test" h={"50%"} w={"50%"} />
      <Text fontSize={"sm"}>
        Table 2: Abbreviations: DoS, denial of service; ECDH, elliptic curve
        Diffie-Hellman; ECDSA, elliptic curve digital signature algorithm.
        <br />
      </Text>
      <br />
      <br />
      <Text fontSize={"l"} fontWeight={"bold"}>
        Security considerations on the PKIoT server services
      </Text>
      <Text fontSize={"l"}>
        Nodes can choose the computations to outsource while considering factors
        like the level of faith they place in the various PKIoT servers thanks
        to the ability to have fine-grained control over which task demand
        support is required. In fact, PKIoT servers learn about their customers'
        cryptographic data while providing their services, either because they
        create it or because they need it to be given in order to do their work.
        Depending on the potential effects that its unintentional or malicious
        exposure could have on its owners' security, such material is defined by
        varying degrees of sensitivity. The following information is organized
        by service and lists the potential risks that could result from the
        existence of misbehaving PKIoT servers summarized in Table 2.
      </Text>
      <br />
      <UnorderedList>
        <ListItem>
          Ephemeral Diffie-Hellman keys generation: To use this service, PKIoT
          customers are not required to divulge any previously stored private
          cryptographic information. The development of new cryptographic
          material, especially the ephemeral Diffie-Hellman keys, which might be
          misused to deduce the premaster secret required to secure a particular
          connection, is instead delegated to the PKIoT server and disclosed to
          it as a result. This would make it possible for a hostile server to
          eavesdrop and modify the messages sent over that connection covertly.
          A server could also start a denial-of-service (DoS)attack by sending
          the requester faulty keys.
        </ListItem>
        <ListItem>
          Premaster secret generation: The hazards associated with this service
          are the same as those associated with the preceding one and are
          related to the fact that, in this instance as well, the client gives
          their private ephemeral Diffie-Hellman key to the server in order to
          request the service. As a result, the server gains the ability to
          calculate the connection's premaster secret, along with all the
          previously listed dangers. The fact that a PKIoT client cannot request
          the first service from a PKIoT server without also requesting the
          second one and vice versa is particularly interesting to notice from a
          security standpoint.
        </ListItem>
        <ListItem>
          Digital signature verification: Because the PKIoT server only needs to
          be fed with the signed digest to check and the related public key,
          PKIoT clients do not need to divulge any secret information to request
          this service. By falsely asserting that a not valid signature is
          verified to carry out or enable a masquerade attack, it may
          nevertheless obstruct regular client operations. On the other side,
          asserting that valid signatures are not validated would result in DoS
          attacks by interfering with legal DTLS handshakes.
        </ListItem>
        <ListItem>
          Certificate verification: Additionally, using this service does not
          require disclosing any private cryptographic information. Like the
          prior instance, rogue PKIoT servers may execute DoS and masquerade
          attacks by representing invalid certificates as valid.
        </ListItem>
        <ListItem>
          Digital signature generation: This service needs to have access to the
          PKIoT client's private key, hence only completely reliable PKIoT
          servers should be asked to provide it. Malicious servers can generate
          false signatures, which can be used to launch DoS attacks, but they
          can also be used to steal clients' digital identities by impersonating
          them using their private keys.
        </ListItem>
      </UnorderedList>
      <br />
      <br />

      <Text fontSize={"l"} fontWeight={"bold"}>
        The PKIoT Architecture
      </Text>
      <Text fontSize={"l"}>
        In this section, we introduce the PKIoT architecture, a public key
        infrastructure for the Internet of Things that aims to make PKI
        technology a useful tool for providing mutual authentication mechanisms
        for upcoming IoT scenarios. PKIoT has been specifically designed to be:
        <br />
        <UnorderedList>
          <ListItem>
            Adaptable, to adapt to the various constraints of the parties
            involved.
          </ListItem>
          <ListItem>
            Compatible, with the standard PKI as much as feasible to enable
            seamless integration with the already deployed security
            infrastructure in place.
          </ListItem>
          <ListItem>
            Extendable, in order to make the creation and implementation of
            additional security features easier.
          </ListItem>
        </UnorderedList>
        <br />
        Figure 2 shows the PKIoT architecture's constituent parts and overall
        schema. The PKIoT architecture is a traditional client/server
        architecture, so it establishes the following two types of nodes:
        <UnorderedList>
          <ListItem>
            PKIoT clients, nodes with limited capabilities that are unable to
            perform some or all the operations necessary to set up a secure
            communication channel with nodes that have been authenticated by
            certificates.
          </ListItem>
          <ListItem>
            PKIoT servers, powerful nodes help PKIoT clients establish secure
            communication links with other nodes by providing a variety of
            services. Due to its simplicity and close connection with widely
            used application protocols, the RESTful paradigm has been widely
            used in today's web service implementations. PKIoT servers present
            an interface that complies with this paradigm. Clients can request
            the REST resources that are provided by the servers' interface, each
            of which has its own expected inputs and outputs in order to obtain
            assistance with performing various activities. PKIoT clients can
            delegate to a specific PKIoT server a variety of security-related
            duties by communicating with it through its interface, depending on
            their level of constraint and the amount of trust they place in that
            server.
          </ListItem>
        </UnorderedList>
        <br />
        Due to its simplicity and close connection with widely used application
        protocols, the RESTful paradigm has been widely used in today's web
        service implementations. PKIoT servers present an interface that
        complies with this paradigm. Clients can ask for the REST resources that
        are provided by the servers' interface, each of which has its own
        expected inputs and outputs, in order to obtain assistance with
        performing various activities. PKIoT clients can delegate to a specific
        PKIoT server a variety of security-related duties by communicating with
        it through its interface, depending on their level of constraint and how
        much trust they place in that server.
      </Text>
      <br />
      <Image
        src={
          "/assets/images/PKIoT-architecture-components-CoAP-Constrained-Application-Protocol-PKIoT-public-key.png"
        }
        alt="test"
        h={"50%"}
        w={"50%"}
      />
      <Text fontSize={"sm"}>
        Figure 2: PKIoT architecture components. CoAP, Constrained Application
        Protocol; PKIoT, public key infrastructure for the Internet of Things;
        TLS, Transport Layer Security [1]
        <br />
      </Text>
      <br />
      <Text fontSize={"l"}>
        Different computational and privacy needs are present. Choices about the
        services a PKIoT server should provide and consequently, the design of
        its user interface, have been made. It is important to note that the
        defined REST interface is modular, making it simple to alter and extend
        so that it can incorporate any other security features that may be
        required, such as those related to the verification of attribute
        certificates. Although a PKIoT client might theoretically request
        services from numerous PKIoT servers, in practice it often relies on one
        PKIoT server as its trust anchor.
        <br />
        <br />
        A trust anchor may follow a security bootstrapping process and assign
        some of the tasks required by its served clients to other PKIoT servers
        in accordance with specified policies. Additionally, it is assumed that
        PKIoT clients can always connect to a working PKIoT server. In any
        scenario, a cryptographic protocol that allows out-of-band techniques
        for key exchange and validation, such as PSKs or RPKs, is required to
        secure communication between PKIoT clients and their trusted servers.
        Therefore, it is necessary to consider a preliminary stage where PKIoT
        clients and servers exchange cryptographic data.
        <br />
        <br />
        It is important to note that look-alike enrollment phases are a standard
        procedure, necessary in several security designs, and are regarded as
        workable and scalable. To enroll in the system and safely connect with a
        practically infinite number of nodes, PKI clients in our environment for
        instance, are only required to store a single cryptographic key.
        Providing this information at the time of deployment is simple. On the
        other hand, PKIoT servers are not expected to have restrictions on the
        quantity of cryptographic materials they can store because they can be
        sized in accordance with the estimated number of devices they will
        support. Although the security of the stored cryptographic keys is vital
        and must be considered in this context, it must be noted that this work
        does not particularly address ways to ensure their security.
      </Text>
      <br />
      <br />
      <Text fontSize={"l"} fontWeight={"bold"}>
        PKIoT server services
      </Text>
      <Text fontSize={"l"}>
        The well-known TLS protocol has an UDP-based variant called DTLS. Today,
        it is regarded as the de facto standard for communication security on
        the Internet of Things (IoT) due to its lightweight nature and the fact
        that it supports PSK and RPK in addition to the conventional X.509
        certificate-based key establishment procedure. For this reason, DTLS has
        been picked as the PKIoT architecture's underlying security protocol. It
        also serves as a point of reference for determining which cryptographic
        operations are the most demanding and, hence, the most advantageous to
        outsource.
        <br />
        <br />
        To begin a secure session while establishing a new connection, the
        concerned parties must follow the handshake protocol specified by DTLS.
        Even though it only takes place at the beginning of the connection, the
        handshake represents by far most of the protocol overheads. Tens of
        cipher suites, or collections of cryptographic primitives, are supported
        by DTLS and are used for key exchange, encryption and hashing during the
        handshake. The TLS_PSK_WITH_AES_128_CCM_8 cipher suite is required for
        PSK mode and the TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8 cipher suite is
        required for RPK and certificate mode, respectively, by the Constrained
        Application Protocol (CoAP), the most extensively used application
        protocol in the IoT. The final one makes use of the AES-based CCM
        algorithm with 128-bit keys and 8-byte authentication tags for
        encryption and authentication, as well as the ECDH and ECDSA algorithms
        for key exchange and digital signature.
        <br />
        <br />
        A full DTLS handshake in certificate mode requires a device to undertake
        several time- and energy-consuming functions, which have been the
        subject of experimental work on actual IoT platforms. The results of
        these experiments, which are described in more detail in the following
        sections, showed that limited nodes took the longest time to conduct the
        following DTLS operations:
        <br />
        <UnorderedList>
          <ListItem>
            For inclusion in the ServerKeyExchange (flight 4) and
            ClientKeyExchange (flight 5) messages, the server and client
            generate ephemeral Diffie-Hellman keys.
          </ListItem>
          <ListItem>
            Digital signature generation, carried out by the client to sign the
            content of the CertificateVerify message (flight 5) and by the
            server to sign its ephemeral Diffie-Hellman public key and the
            pertinent information to be included in the ServerKeyExchange
            message (flight 4).
          </ListItem>
          <ListItem>
            Checking the validity of the received CertificateVerify (flight 5)
            and ServerKeyExchange (flight 4) messages using digital signatures
            is done by the server and the client, respectively.
          </ListItem>
          <ListItem>
            Before starting flight 5 and flight 6, the client and the server,
            respectively, perform a certificate verification.
          </ListItem>
          <ListItem>
            After receiving and verifying the ClientKeyExchange (flight 5) and
            ServerKeyExchange (flight 4) messages, the server and client
            generate the premaster secret.
          </ListItem>
        </UnorderedList>
        <br />
        Therefore, PKIoT servers should provide services to free up PKIoT users
        from the aforementioned duties. On the other hand, PKIoT client nodes
        should be permitted to request all and only the services they require to
        complete a DTLS handshake, which may change over time depending on their
        workload and power condition. For instance, a node that is typically
        capable of performing all the operations necessary to complete a DTLS
        handshake on its own might need to use some or all the aforementioned
        services at some point in its operational life, either because it is
        currently engaged in other intensive computations or because its
        batteries are running low, and it wants to conserve energy.
      </Text>
      <br />
      <br />
      <Text fontSize={"l"} fontWeight={"bold"}>
        The PKIoT certificate
      </Text>
      <Text fontSize={"l"}>
        While the services mentioned can assist constrained nodes perform
        security-critical functions effectively, they do not address the issue
        of certificate transmission in a situation where bandwidth is a limited
        resource. As an illustration, the most extensively used protocols in the
        context of the Internet of Things (IoT) are based on the IEEE 802.15.4
        standard, which permits MAC frames of 127 bytes. Therefore, even without
        taking higher layer protocol headers into account, which may drastically
        lower the amount of space available, the transmission of the 2516-byte
        Google.com certificate would necessitate its fragmentation into 20
        packets. Due to the increased likelihood of packet retransmission, this
        implies the introduction of overheads and delays as well as significant
        bandwidth and energy usage.
        <br />
        <br />
        Additionally, Hummen et al. [2] demonstrated how fragmentation makes
        nodes vulnerable to specific kinds of attacks. We suggest a brand-new
        type of compact certificate to address these problems: the PKIoT
        certificate. This certificate is designed to be used in conjunction with
        the certificate verification service provided by PKIoT servers. With
        this new type of certificate, there is no requirement for the whole
        certificate to be delivered to limited nodes if they do not perform
        certificate validation. In reality, the already noted transmission
        overheads would be doubled because they would only receive the
        certificates in order to transfer them to PKIoT servers for
        verification. The PKIoT certificate simply includes a link to the
        certificate, or a URI, through which the PKIoT server can obtain the
        complete certificate for verification, preventing this from happening.
        The usage of PKIoT certificates can significantly minimize the quantity
        of data transmitted inside the confined network segments, because PKIoT
        servers often do not operate in environments with the same limits as
        those of their clients.
        <br />
        <br />
        The certificate message payload has been utilized as a container for the
        CertiLink structure in order to leverage the PKIoT certificate in a DTLS
        handshake. The following definition applies to the new Certificate
        payload format, which is an expansion of the one described in the work
        of Wouters et al. [3] When PKIoT servers are asked to verify a PKIoT
        certificate, they must first acquire the whole certificate by clicking
        on the given link before proceeding with the standard verification
        process, because the requesting clients only have access to the PKIoT
        certificate. This does not contain any cryptographic information, and
        because they would not understand what the verified/not verified answer
        refers to, the output of the certificate verification service cannot
        simply be a verified/not verified answer in this situation. Instead, if
        the certificate is confirmed, the service should return the public key
        information, else it should return an error message.
        <br />
        <br />
        RPK certificates have been accepted in this situation as a practical way
        to store and send public key data. The usage of PKIoT certificates is
        not required for the PKIoT architecture to function properly, despite
        the fact that doing so can greatly lower the costs associated with
        certificate transmission. The fact that the PKIoT architecture is fully
        transparent to nodes that are not aware of it is one of its key
        advantages. From the perspective of a node that is not PKIoT-enabled,
        there is actually no difference between interactions with PKIoT-enabled
        and non-PKIoT-enabled nodes because all PKIoT operations occur in the
        background and produce results that are identical to those that the
        nodes would obtain acting independently. With the help of PKIoT
        certificates, this functionality makes it possible to seamlessly
        integrate the PKIoT architecture into existing security infrastructures
        while also allowing PKIoT-enabled nodes to benefit from it.
      </Text>
      <br />
      <br />
      <Text fontSize={"l"} fontWeight={"bold"}>
        Conclusion
      </Text>
      <Text fontSize={"l"}>
        As a result of a paradigm shift in the IoT industry, closed, static IoT
        applications will soon be replaced by open, dynamic, and horizontally
        integrated ones. In this research, we introduced PKIoT, an architecture
        that attempts to make certificate-based authentication accessible for
        IoT devices with limited resources. With the help of a remote server,
        IoT nodes can delegate difficult security-related duties to the PKIoT
        architecture, which enables them to establish a secure connection with a
        third-party while being fully transparent to that party. According to
        their present state and level of trust in the server, nodes can freely
        choose which tasks to delegate.
        <br />
        <br />
        These features make the PKIoT architecture a versatile, interoperable,
        and extendable solution. They also make it simple to combine the
        architecture with new security services by merely changing the REST
        interface of PKIoT servers. This research also proposed a brand-new sort
        of compact certificate called a PKIoT certificate, which when used in
        place of standard X.509 certificates allow for even further reductions
        in transmission overheads but necessitates PKIoT support from both
        sides. Considering the significance that standard architecture will have
        in the future situation that is being shown.
      </Text>
      <br />

      <Divider m={2} />
      <br />
      <Text fontSize="2xl"> Bibliography </Text>
      <Text fontSize={"xl"}>
        The bibliography according to this page is <br />
        <OrderedList>
          <ListItem>
            PKIoT architecture components, from &nbsp;
            <Link href="https://www.researchgate.net/publication/334302903/figure/fig1/AS:1095872087633920@1638287674147/PKIoT-architecture-components-CoAP-Constrained-Application-Protocol-PKIoT-public-key.png  ">
              ResearchGate <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            Höglund, J., Lindemer, S., Furuhed, M. & Raza, S. (2020). PKI4IoT:
            Towards public key infrastructure for the Internet of Things.
            Computers & Security, 89, 101658, from &nbsp;
            <Link href="https://doi.org/10.1016/j.cose.2019.101658  ">
              sciencedirect <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            Marino, F., Moiso, C. & Petracca, M. (2019). PKIoT: A public key
            infrastructure for the Internet of Things. Transactions on Emerging
            Telecommunications Technologies, 30(10), from &nbsp;
            <Link href="https://doi.org/10.1002/ett.3681">
              onlinelibrary.wiley <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </OrderedList>
      </Text>
    </Container>
    <Container h={"200px"}></Container>
  </Box>
);
