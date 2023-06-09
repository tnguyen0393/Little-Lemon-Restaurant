import { Container, Heading, SimpleGrid, Box} from "@chakra-ui/react";
import user1 from "../assets/User1.jpg"
import user2 from "../assets/User2.jpg"
import user3 from "../assets/User3.jpg"
import user4 from "../assets/User4.jpg"
import TestimonialCard from "./TestimonialCard";


const TestimonialSection = () => {

    const testimonials = [
        {
            rating: 5,
            userImage: user1,
            userName: "Adam",
            quote: '"Each dish is made with love and attention to detail."'
        },
        {
            rating: 5,
            userImage: user2,
            userName: "Emily",
            quote: '"Elegant ambiance, impeccable service!"'
        },
        {
            rating: 5,
            userImage: user3,
            userName: "Olivia",
            quote: '"Hidden gem with innovative cuisine."'
        },
        {
            rating: 5,
            userImage: user4,
            userName: "Benjamin",
            quote: '"A go-to for a satisfying meal!"'
        }
    ]
    return (
        <Box bg="#495E57">
            <Container maxW={'7xl'} py={12}>
                <Heading as="h1" textAlign="center" marginY={6} color={"#F4CE14"}>
                    Testimonials
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} py={10}>
                    {
                        testimonials.map((testimonial, index) => {
                            return (
                                <TestimonialCard key={index} testimonial={testimonial}/>
                            )
                        })
                    }
                </SimpleGrid>
            </Container>
        </Box>

    )
};

export default TestimonialSection;