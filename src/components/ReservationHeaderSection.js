import { Box, Heading } from "@chakra-ui/react";

const ReservationHeaderSection = ({formik, tableReserved}) => {
    return (
        <Box bg="#495E57" height="25vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Heading as="h1" size="xl" color="#F4CE14" textAlign="center" lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
                Little Lemon Reservation
            </Heading>
            <br />
            <Heading as="h2" size="lg" color="white">No matter the occasion, we'd love to have you!</Heading>
            {tableReserved ? <Heading color="white">{formik.values.name}, we will have a seat for you on {formik.values.date} at {formik.values.time}!</Heading> : null}
        </Box>
    )
}

export default ReservationHeaderSection;