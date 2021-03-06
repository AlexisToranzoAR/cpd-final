import Sidebar from "../../components/Sidebar";
import Head from "../../components/Head";
import {
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import OutlinedField from "../../components/OutlinedField";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import SearchIcon from "@mui/icons-material/Search";
import DatePicker from "../../components/DatePicker";
import { useState } from "react";

export default function Certificates() {
  const [date, setDate] = useState(null);

  function handleDatePickerChange(value) {
    setDate(value);
  }

  return (
    <>
      <Head title="Certificates - CPD" />

      <Sidebar title="Certificates">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Generate your CPD Certificate</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <DatePicker
              value={date}
              onChange={handleDatePickerChange}
              label="Select Submission Year & Month"
              views={["year", "month"]}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <OutlinedField
              label="Search Case Number"
              icon={<SearchIcon color="primary" />}
              fullWidth
            />
          </Grid>
          <Grid item xs={0} md={6}></Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 1200 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Case #</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Submission Type</TableCell>
                    <TableCell>Submission Date</TableCell>
                    <TableCell>Certified Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Certificate</TableCell>
                    <TableCell align="center">Download Certificate</TableCell>
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
                      <TableCell>2021/06/05</TableCell>
                      <TableCell>Certified</TableCell>
                      <TableCell>
                        <Box
                          sx={{
                            color: "primary.main",
                          }}
                        >
                          Generate Certificate
                        </Box>
                      </TableCell>
                      <TableCell align="center">
                        <FileDownloadOutlinedIcon />
                      </TableCell>
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
