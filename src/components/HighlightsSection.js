import {Flex, Heading, Container, SimpleGrid, Button} from '@chakra-ui/react';
import FoodCard from "./FoodCard"
import restaurantFood from "../assets/restauranfood.jpg"

const HiglightsSection = () => {
  return (
    <Container maxW={'7xl'}>
      <Flex justifyContent="space-between" alignItems="center" mb={12}>
            <Heading as="h1">This weeks Specials!</Heading>
            <Button>Online Menu</Button>
      </Flex>
        <Flex justify="center" wrap="wrap" gap={6}>
            <FoodCard />
            <FoodCard />
            <FoodCard />
        </Flex>
    </Container>
  );
}

export default HiglightsSection;