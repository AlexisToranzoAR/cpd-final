import Sidebar from "../../components/Sidebar";
import Head from "../../components/Head";
import Select from "../../components/Select";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";

export default function Resources() {
  return (
    <>
      <Head title="Resources - CPD" />

      <Sidebar title="Resources">
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <Select label="Category Filter" />
          </Grid>
          <Grid item xs={6} md={9}></Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Last Updated</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell align="right">
                      <ArrowDownwardOutlinedIcon />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <div className="logoutContainer">
                          <InsertDriveFileOutlinedIcon />
                          <span>Single Submission</span>
                        </div>
                      </TableCell>
                      <TableCell>How to submit a single submission</TableCell>
                      <TableCell>2021/05/21</TableCell>
                      <TableCell>Submission</TableCell>
                      <TableCell align="right">
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
