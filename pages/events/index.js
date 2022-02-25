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
import Button from "../../components/Button";

import { useRouter } from "next/router";

export default function Events() {
  const router = useRouter();

  return (
    <>
      <Head title="Events - CPD" />

      <Sidebar title="Events">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Listed CPD Events</Typography>
          </Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 960 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Event Title</TableCell>
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
                        <Button
                          onClick={() => router.push("/events/relist")}
                          variant="outlined"
                          startIcon={<AddCircleOutlinedIcon />}
                        >
                          Re List
                        </Button>
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
