import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import Calender from '../../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                    <Calender
                        date={date}
                        setDate={setDate}
                    ></Calender>
                </Grid>
                <Grid item md={8} xs={12}>
                    <Appointments
                    date={date}
                    setDate={setDate}
                    ></Appointments>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DashboardHome;