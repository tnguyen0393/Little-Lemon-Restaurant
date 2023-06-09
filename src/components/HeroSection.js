import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    IconButton,
  } from "@chakra-ui/react";
import {Link as ReactLink} from "react-router-dom"
import restaurantFood from "../assets/restauranfood.jpg"

const HeroSection = () => {
  return (
    <Box bg="#495E57">
      <Container maxW={"7xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                color={"#F4CE14"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}>
                Little Lemon
              </Text>
              <br />
              <Text as={"span"} color={"white"}>
                St. Paul
              </Text>
            </Heading>
            <Text color={"white"}>
              We are a family owned Mediterranean Restaurant, focused on traditional recopies serverd with a modern twist.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}>
                <ReactLink to="/reservation">
                  <Button
                  rounded={"md"}
                  size={"lg"}
                  fontWeight={"bold"}
                  px={6}
                  colorScheme={"red"}
                  bg={"#F4CE14"}
                  color={"black"}
                  _hover={{ bg: "red.500" }}>
                  Reserve a Table
                </Button>
                </ReactLink>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}>
            <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}>
              <IconButton
                aria-label={"Play Button"}
                variant={"ghost"}
                _hover={{ bg: "transparent" }}
                size={"lg"}
                color={"white"}
                position={"absolute"}
                left={"50%"}
                top={"50%"}
                transform={"translateX(-50%) translateY(-50%)"}
              />
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={restaurantFood}
              />
            </Box>
          </Flex>
        </Stack>
       </Container>
      </Box>

  );
}

export default HeroSection;