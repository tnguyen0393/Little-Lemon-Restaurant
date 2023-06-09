import { Box, Container, Input, VStack, FormControl, FormLabel, FormErrorMessage, Select, Button } from "@chakra-ui/react";

const ReserveFormSection = ({formik, availableTimes, booked, setTableReserved}) => {

    const handleChange = (e) => {
        formik.handleChange(e);
        setTableReserved(false);
    }

    return (
        <Box py={20} my={10}>
            <Container>
              <form onSubmit={formik.handleSubmit}>
                    <VStack spacing={4}>
                        <FormControl isInvalid={formik.touched.name && formik.errors.name ? true: false}>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <Input
                            id="name"
                            name="name"
                            {...formik.getFieldProps("name")}
                            onChange={handleChange}
                            />
                            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.touched.date && formik.errors.date ? true: false}>
                            <FormLabel htmlFor="date">Date</FormLabel>
                            <Input
                            id="date"
                            name="date"
                            type="date"
                            {...formik.getFieldProps("date")}
                            onChange={handleChange}
                            />
                            <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="time">Reservation Time</FormLabel>
                            <Select id="time" name="time" {...formik.getFieldProps("time")} onChange={handleChange}>
                                {availableTimes.filter(time => !booked.reservations.includes(formik.values.date+time)).map(time => {
                                    return (
                                        <option value={time} key={time}>{time}</option>
                                    )
                                })}
                            </Select>
                        </FormControl>
                        <FormControl isInvalid={formik.touched.numOfGuest && formik.errors.numOfGuest ? true: false}>
                            <FormLabel htmlFor="numOfGuest">Party Size</FormLabel>
                            <Input
                            id="numOfGuest"
                            name="numOfGuest"
                            {...formik.getFieldProps("numOfGuest")}
                            onChange={handleChange}
                            />
                            <FormErrorMessage>{formik.errors.numOfGuest}</FormErrorMessage>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="ocassion">Ocassion</FormLabel>
                            <Select id="ocassion" name="ocassion" {...formik.getFieldProps("ocassion")} onChange={handleChange}>
                                <option value="birthday">Birthday</option>
                                <option value="anniversary">Anniversary</option>
                                <option value="graduation">Graduation</option>
                                <option value="other">Other</option>
                            </Select>
                        </FormControl>
                        <Button bg="#F4CE14" type="submit" width="full" fontWeight="bold">Reserve</Button>
                    </VStack>
                </form>
            </Container>
        </Box>
    )
}

export default ReserveFormSection;