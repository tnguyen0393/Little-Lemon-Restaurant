import { Box, Image, Text, Stack, useColorModeValue } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

const TestimonialCard = ({testimonial}) => {
    const {rating, userImage, userName, quote} = testimonial;

    const stars = Array.from({length: rating}, (_, index) => (
        <FontAwesomeIcon icon={faStar} size="1x" />
    ));

    return (
        <Box
            maxW={'445px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
            >
            <Stack>
                <Stack direction={'row'} align={'center'} justify={'space-between'}>
                  <Text color="#F4CE14">
                    {stars}
                  </Text>
                </Stack>
                <Stack direction={'row'} align={'center'}>
                    <Image
                        alt={'Profile image'}
                        borderRadius={'full'}
                        boxSize={16}
                        src={userImage}
                    />
                    <Text fontWeight={600}>{userName}</Text>
                </Stack>
                <Text color={'gray.600'}>
                    {quote}
                </Text>
            </Stack>
        </Box>
    );
};

export default TestimonialCard;
