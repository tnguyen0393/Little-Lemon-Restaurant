import {Container, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import owners1 from "../assets/owners1.jpg"
import owners2 from "../assets/owners2.jpg"


const AboutSection = () => {
    return (
    <Container maxW={'7xl'} py={20} my={20}>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={20}>
            <Stack spacing={3}>
                <Heading as="h2">Our Story</Heading>
                <Heading as="h3" size="md">Chicago</Heading>
                <Text>Little Lemon Restaurant began with a passion for great food and a dream to share that passion with others. Our journey started in Chicago, where we served our first dish. From there, we've grown into a restaurant loved by locals and visitors alike.</Text>
            </Stack>
            <Stack position="relative" height="200px">
                <Image src={owners2} alt="Image 2" position="absolute" top={"20%"} right={0} width="60%" height="100%" objectFit="cover" />
                <Image src={owners1} alt="Image 1" position="absolute" bottom={"20%"} left={0} width="60%" height="100%" objectFit="cover" />
            </Stack>
        </Grid>
    </Container>
    )
}

export default AboutSection;