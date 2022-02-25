import Sidebar from "../../../components/Sidebar";
import Head from "../../../components/Head";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useState } from "react";
import DatePicker from "../../../components/DatePicker";
import TextField from "../../../components/TextField";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

export default function Relist() {
  const [date, setDate] = useState(null);
  const [date2, setDate2] = useState(null);
  const [date3, setDate3] = useState(null);
  const [date4, setDate4] = useState(null);

  function handleDatePickerChange(value) {
    setDate(value);
  }

  function handleDatePickerChange2(value) {
    setDate2(value);
  }

  function handleDatePickerChange3(value) {
    setDate3(value);
  }

  function handleDatePickerChange4(value) {
    setDate4(value);
  }

  return (
    <>
      <Head title="Events relist - CPD" />

      <Sidebar title="Events relist">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Re List Event</Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography sx={{ fontWeight: 600 }} variant="subtitle1">
                  Event Name
                </Typography>
                <Typography variant="body1">
                  Cyber Security Best Practices
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ fontWeight: 600 }} variant="subtitle1">
                  Event Description
                </Typography>
                <Typography variant="body1">
                  Course on best Cyber Security Practises for a Managed Service
                  Provider. Course on best Cyber Security Practises for a
                  Managed Service Provider. Course on best Cyber Security
                  Practises for a Managed Service Provider. Course on best Cyber
                  Security Practises for a Managed Service Provider.{" "}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <DatePicker
                  value={date}
                  onChange={handleDatePickerChange}
                  label="Start Date"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <DatePicker
                  value={date2}
                  onChange={handleDatePickerChange2}
                  label="End Date"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <DatePicker
                  value={date3}
                  onChange={handleDatePickerChange3}
                  label="Start Time"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <DatePicker
                  value={date4}
                  onChange={handleDatePickerChange4}
                  label="End Time"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="venueName"
                  label="Venue Name"
                  placeholder="Enter venue name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="addressOne"
                  label="Address 1"
                  placeholder="Enter your first address"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="addressTwo"
                  label="Address 2"
                  placeholder="Enter your second address"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="city"
                  label="City"
                  placeholder="Enter your city"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="country"
                  label="Country"
                  placeholder="Enter your country"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="postCode"
                  label="Zip / Postcode"
                  placeholder="Enter your Zip or Postcode"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontWeight: 600 }} variant="h5">
                  Cyber Security Best Practises
                </Typography>
                <Typography variant="h6" component="div">
                  Your Cloud Works
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Course on best Cyber Security Practises for a Managed Service
                  Provider. Course on best Cyber Security Practises for a
                  Managed Service Provider. Course on best Cyber Security
                  Practises for a Managed Service Provider. Course on best Cyber
                  Security Practises for a Managed Service Provider.
                </Typography>
                <Typography sx={{ fontWeight: 600 }}>
                  <div>
                    <CalendarTodayOutlinedIcon />
                    <span>03 Oct 2021</span>
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Sidebar>

      <style jsx>
        {`
          div {
            display: flex;
            align-items: center;
          }
          div span {
            margin-left: 8px;
          }
        `}
      </style>
    </>
  );
}
