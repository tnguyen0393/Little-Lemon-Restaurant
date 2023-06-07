import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import user1 from "../assets/User1.jpg"
import TestimonialCard from "./TestimonialCard";


const TestimonialSection = () => {

    const testimonials = [
        {
            rating: 5,
            userImage: user1,
            userName: "User 1",
            quote: "The food was dope."
        },
        {
            rating: 5,
            userImage: user1,
            userName: "User 2",
            quote: "The food was dope."
        },
        {
            rating: 5,
            userImage: user1,
            userName: "User 3",
            quote: "The food was dope."
        }
    ]
    return (
        <Container maxW={'7xl'} py={12}>
            <Heading as="h1" textAlign="center" marginY={6}>
                Testimonials
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} py={10}>
                {
                    testimonials.map((testimonial, index) => {
                        return (
                            <TestimonialCard key={index} testimonial={testimonial}/>
                        )
                    })
                }
            </SimpleGrid>

        </Container>
    )
};

export default TestimonialSection;