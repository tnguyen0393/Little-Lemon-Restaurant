import {
    Container,
    Stack,
    SimpleGrid,
    Image,
    Heading,
    Link,
} from "@chakra-ui/react"
import restaurant from "../assets/restaurant.jpg"

const FooterSection = () => {
    return (
        <>
            <Container as={Stack} maxW={"7xl"} py={20} my={20}>
                <SimpleGrid
                templateColumns={{sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr"}}
                spacing={20}>
                    <Stack spacing={10}>
                        <Image src={restaurant}/>
                    </Stack>
                    <Stack align={"flex-start"}>
                        <Heading as="h2" size="lg">Navigation</Heading>
                        <Link href={"#"}>Home</Link>
                        <Link href={"#"}>About</Link>
                        <Link href={"#"}>Menu</Link>
                        <Link href={"#"}>Reservation</Link>
                        <Link href={"#"}>Order Online</Link>
                        <Link href={"#"}>Login</Link>
                    </Stack>
                    <Stack align={"flex-start"}>
                        <Heading as="h2" size="lg">Contact</Heading>
                        <Link href={"#"}>Address</Link>
                        <Link href={"#"}>Phone Number</Link>
                        <Link href={"#"}>Email</Link>
                    </Stack>
                    <Stack align={"flex-start"}>
                        <Heading as="h2" size="lg">Social Media</Heading>
                        <Link href={"#"}>Facebook</Link>
                        <Link href={"#"}>Instagram</Link>
                        <Link href={"#"}>Twitter</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
        </>
    )
}

export default FooterSection;