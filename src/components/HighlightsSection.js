import {Flex, Heading, Container, Button} from '@chakra-ui/react';
import {Link as ReactLink} from "react-router-dom";
import FoodCard from "./FoodCard";
import greekSalad from "../assets/greek_salad.jpg";
import bruschetta from "../assets/bruchetta.svg";
import lemonPie from "../assets/lemon_pie.jpg";

const HiglightsSection = () => {
  const foodItems = [
    {
      name: "Greek Salad",
      price: 12.99,
      image: greekSalad,
      description:"A refreshing mix of crisp cucumbers, ripe tomatoes, olives, feta cheese, and red onions, dressed in olive oil and herbs, epitomizing Mediterranean flavors."
    },
    {
      name: "Bruschetta",
      price: 6.99,
      image: bruschetta,
      description: "Toasted Italian bread topped with juicy, ripe tomatoes, fresh basil, garlic, and a drizzle of olive oil, making Bruschetta a simple yet delicious Italian appetizer."
    },
    {
      name: "Lemon Pie",
      price: 4.99,
      image: lemonPie,
      description: "A tangy, sweet dessert featuring a buttery crust filled with a bright, citrus lemon custard, topped with fluffy meringue or whipped cream, embodying pure indulgence."
    },
  ]

  return (
    <Container maxW={'7xl'} my={10} py={19}>
      <Flex justifyContent="space-between" alignItems="center" mb={12}>
            <Heading as="h1">This weeks Specials!</Heading>
            <ReactLink to="/online-menu">
            <Button
                rounded={"md"}
                size={"lg"}
                fontWeight={"bold"}
                px={6}
                colorScheme={"red"}
                bg={"#F4CE14"}
                color={"black"}
                _hover={{ bg: "red.500" }}>
                Online Menu
              </Button>
            </ReactLink>
      </Flex>
        <Flex justify="center" wrap="wrap" gap={6}>
          {foodItems.map(menuItem => {
            return (<FoodCard menuItem={menuItem} />)
          })}
        </Flex>
    </Container>
  );
}

export default HiglightsSection;