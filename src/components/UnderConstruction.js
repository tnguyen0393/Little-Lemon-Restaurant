import {Box, Heading, Image, Button} from "@chakra-ui/react"
import {Link as ReactLink} from "react-router-dom"
import constructionImage from "../assets/construction.png"
const UnderConstruction = () => {
    return (
        <>
        <Box bg="#495E57" height="40vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center" py={20}>
            <Heading as="h1" size="xl" color="#F4CE14" textAlign="center" lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
             {"Oops! The page Is Currently Unavailable :("}
            </Heading>
            <br />
            <Image src={constructionImage} maxWidth="80%" maxHeight="80%" />

        </Box>
        <Box bg="white" height="25vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Heading as="h1" size="xl" color="black" textAlign="center" lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
             {"Here are our current functional pages"}
            </Heading>
            <br />
            <Box>
            <ReactLink to="/">
                  <Button
                  rounded={"md"}
                  size={"lg"}
                  fontWeight={"bold"}
                  px={10}
                  bg={"#F4CE14"}
                  color={"black"}
                  _hover={{ bg: "red.500" }}
                  mr={5}
                  >
                  Homepage
                </Button>
                </ReactLink>

                <ReactLink to="/reservation">
                  <Button
                  rounded={"md"}
                  size={"lg"}
                  fontWeight={"bold"}
                  px={10}
                  bg={"#F4CE14"}
                  color={"black"}
                  _hover={{ bg: "red.500" }}
                  ml={5}
                  >
                  Reservation Page
                </Button>
                </ReactLink>
            </Box>

        </Box>
        </>
    )
}

export default UnderConstruction;