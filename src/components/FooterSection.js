import {
    Container,
    Stack,
    SimpleGrid,
    Image,
    Heading,
    Link,
    Box,
    Text
} from "@chakra-ui/react"
import {Link as ReactLink} from "react-router-dom"
import restaurant from "../assets/restaurant.jpg"

const FooterSection = () => {
    const links = [
        {
            page: "Home",
            path: "/"
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

    return (
        <Box bg="#495E57">
            <Container as={Stack} maxW={"7xl"} py={20}>
                <SimpleGrid
                templateColumns={{sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr"}}
                spacing={20}>
                    <Stack spacing={10}>
                        <Image src={restaurant}/>
                    </Stack>
                    <Stack align={"flex-start"}>
                        <Heading as="h2" size="lg" color={"#F4CE14"}>Navigation</Heading>
                        {links.map(link => {
                            return (
                                <ReactLink to={link.path} key={link.page}><Text _hover={{ textDecoration: "underline" }} color={"white"} fontWeight={"bold"} >{link.page}</Text></ReactLink>
                            )
                        })}
                    </Stack>
                    <Stack align={"flex-start"}>
                        <Heading as="h2" size="lg" color={"#F4CE14"}>Contact</Heading>
                        <Text color={"white"} fontWeight={"bold"}>123 Lemon St, St. Paul, MN</Text>
                        <Link color={"white"} fontWeight={"bold"} href={"tel:+555-555-5555"}>+555-555-5555</Link>
                        <Link color={"white"} fontWeight={"bold"} href={"littlelemons@lemons.com"}>littlelemons@lemons.com</Link>
                    </Stack>
                    <Stack align={"flex-start"}>
                        <Heading as="h2" size="lg" color={"#F4CE14"}>Social Media</Heading>
                        <Link color={"white"} fontWeight={"bold"} href={"https://www.facebook.com/"}>Facebook</Link>
                        <Link color={"white"} fontWeight={"bold"} href={"https://www.instagram.com/"}>Instagram</Link>
                        <Link color={"white"} fontWeight={"bold"} href={"https://twitter.com/"}>Twitter</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}

export default FooterSection;