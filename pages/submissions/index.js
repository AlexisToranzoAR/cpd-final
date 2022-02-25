import Sidebar from "../../components/Sidebar";
import Head from "../../components/Head";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DatePicker from "../../components/DatePicker";
import Select from "../../components/Select";
import { useState } from "react";

export default function Submissions() {
  const [date, setDate] = useState(null);
  const [date2, setDate2] = useState(null);

  function handleDatePickerChange(value) {
    setDate(value);
  }

  function handleDatePickerChange2(value) {
    setDate2(value);
  }

  return (
    <>
      <Head title="Submissions - CPD" />

      <Sidebar title="Submissions">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <DatePicker
              value={date}
              onChange={handleDatePickerChange}
              label="Date: From"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <DatePicker
              value={date2}
              onChange={handleDatePickerChange2}
              label="Date: To"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <Select label="Case Status" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" display="inline" gutterBottom>
              Default Filter Display:{" "}
            </Typography>
            <Typography variant="subtitle2" display="inline" gutterBottom>
              Current Year
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 1200 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Case #</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Submission Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="center">Material Required</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <TableRow key={i}>
                      <TableCell>5000.{i}</TableCell>
                      <TableCell>
                        cpd_activity_title - Title description of Submission
                      </TableCell>
                      <TableCell>Single</TableCell>
                      <TableCell>2021/05/21</TableCell>
                      <TableCell>Submitted</TableCell>
                      <TableCell align="center">{i % 2 === 0 ? "No" : "Yes"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Sidebar>
    </>
  );
}
