import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import Footer from '../../../Shared/Navbar/Footer/Footer'

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Footer ></Footer>
        </div>
    );
};

export default Appointment;