import React, {useReducer, useState} from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import  { Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Home";
import Reservation from "./pages/Reservation";
import FooterSection from './components/FooterSection';
import UnderConstruction from './components/UnderConstruction';
import { useFormik } from "formik";
import * as Yup from 'yup';


const reducer = (state, action) => {
  switch (action.type) {
    case "BOOK_RESERVATION":
      return {
        ...state,
        reservations: [...state.reservations, action.payload]
      };
    default:
      return state;
  }
}

function App() {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const initialState = {
    reservations: []
  }

  const [booked, dispatch] = useReducer(reducer, initialState);
  const [tableReserved, setTableReserved] = useState(false);

  const formik = useFormik({
    initialValues: {
        name:"",
        date: "",
        time: "",
        numOfGuest: 1,
        ocassion: "",
        tableReserved: false
    },
    onSubmit: (values) => {
      dispatch({
        type: "BOOK_RESERVATION",
        payload: formik.values.date + values.time
      })
      setTableReserved(true);
    },
    validationSchema: Yup.object({
        name: Yup.string().required("Name is required"),
        date: Yup.date().min(new Date(), "Date can't be in the past.").required("Date is required"),
        numOfGuest: Yup.number().min(1, "Minimum party size of 1").max(10, "Maximum party size of 10").required("Party size required"),
    })
  })



  return (
    <>
    <ChakraProvider>
      <main>
        <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/reservation" element={<Reservation formik={formik} setTableReserved={setTableReserved} availableTimes={availableTimes} booked={booked} tableReserved={tableReserved}/>}/>
            <Route path="/*" element={<UnderConstruction />} />
          </Routes>
        <FooterSection />
      </main>
    </ChakraProvider>
    </>
  );
}

export default App;
