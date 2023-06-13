import {
  Container,
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Text,
  Stack,
  Image
} from "@chakra-ui/react";
import {Link as ReactLink} from "react-router-dom"
import logo from "../assets/LittleLemonLogo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faWindowClose} from "@fortawesome/free-solid-svg-icons"

const links = [
  {
      page: "Home",
      path: "/Little-Lemon-Restaurant"
  },
  {
      page: "About",
      path: "/about"
  },
  {
      page: "Menu",
      path: "/menu"
  },
  {
      page: "Reservation",
      path: "/reservation"
  },
  {
      page: "Order Online",
      path: "order-online"
  },
]

const NavLink = ({children, link}) => (
  <ReactLink to={link.path}>
    <Text
      paddingx={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "#F4CE14",
      }}>
      {children}
    </Text>
  </ReactLink>

);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'white'} px={4} py={6}>
        <Container maxW={"7xl"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <FontAwesomeIcon icon={faWindowClose} size="2x" /> : <FontAwesomeIcon icon={faBars} size="2x" />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Image boxSize="200px" src={logo}/>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}>
              {links.map((link) => (
                <ReactLink to={link.path} key={link.page}><Text key={link.page} _hover={{ textDecoration: "underline" }} color={"black"} fontWeight={"bold"} >{link.page}</Text></ReactLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
          <Button
            as={"a"}
            fontSize={"xl"}
            fontWeight={"bold"}
            variant={"link"}
            color={"black"}
            >
            Sign In
          </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
        </ Container>
      </Box>
    </>
  );
}