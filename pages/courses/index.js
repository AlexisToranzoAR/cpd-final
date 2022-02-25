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
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";

export default function Courses() {
  return (
    <>
      <Head title="Courses - CPD" />

      <Sidebar title="Courses">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Listed Courses</Typography>
          </Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 950 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Course Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <TableRow key={i}>
                      <TableCell>Google Workspace</TableCell>
                      <TableCell>
                        Basic Training on Google Workspace Core Apps Gmail,
                        Docs, Sheets, Slides, Drive
                      </TableCell>
                      <TableCell>Online Training</TableCell>
                      <TableCell>
                        <div className="logoutContainer">
                          <RemoveCircleOutlinedIcon color="error" />
                          <span>Remove Listing</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Unlisted Courses</Typography>
          </Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 950 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Course Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <TableRow key={i}>
                      <TableCell>Google Workspace</TableCell>
                      <TableCell>
                        Basic Training on Google Workspace Core Apps Gmail,
                        Docs, Sheets, Slides, Drive
                      </TableCell>
                      <TableCell>Online Training</TableCell>
                      <TableCell>
                        <div className="logoutContainer">
                          <AddCircleOutlinedIcon color="success" />
                          <span>Add Listing</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Sidebar>

      <style jsx>{`
        .logoutContainer {
          display: flex;
          align-items: center;
        }

        .logoutContainer span {
          margin-left: 8px;
        }
      `}</style>
    </>
  );
}
