import {
    Card,
    CardBody,
    CardFooter,
    Stack,
    Heading,
    Text,
    Image,
    Flex,
    Link
  } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking } from '@fortawesome/free-solid-svg-icons';

const FoodCard = ({menuItem}) => {
    return (
    <Card bg={"#EDEFEE"} maxW='sm'>
        <CardBody>
            <Image
            src={menuItem.image}
            alt={`Image of ${menuItem.name}`}
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Flex justifyContent="space-between">
              <Heading size='md'>{menuItem.name}</Heading>
                <Text color={"#E78A00"}>${menuItem.price}</Text>
            </Flex>
            <Text>
                {menuItem.description}
            </Text>
            </Stack>
        </CardBody>
        <CardFooter>
            <Link href={"#"} _hover={{textDecoration: "none", bg: "#F4CE14", }}>
                Order a delivery  <FontAwesomeIcon size={"lg"} icon={faBiking} color={'#48742C'}/>
            </Link>
        </CardFooter>
    </Card>
    )
}

export default FoodCard;