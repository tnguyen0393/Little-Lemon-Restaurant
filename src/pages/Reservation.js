import ReserveFormSection from "../components/ReserveFormSection";
import ReservationHeaderSection from "../components/ReservationHeaderSection";

const Reservation = ({ formik, availableTimes, booked, tableReserved, setTableReserved }) => {
    return (
        <>
            <ReservationHeaderSection tableReserved={tableReserved} formik={formik}/>
            <ReserveFormSection formik={formik} availableTimes={availableTimes} booked={booked} setTableReserved={setTableReserved} />
        </>

    )
}

export default Reservation;