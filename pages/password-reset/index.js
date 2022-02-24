import Head from "../../components/Head";
import InfoBar from "../../components/InfoBar";
import { Grid, Card, CardContent, Button, Typography } from "@mui/material";
import Link from "next/link";
import TextField from "../../components/TextField";

export default function PasswordReset() {
  return (
    <>
      <Head title="Password reset - CPD" />

      <InfoBar title="PASSWORD RESET">
        <section>
          <Grid>
            <Card
              style={{ maxWidth: 750, padding: "20px 5px", margin: "0 auto" }}
            >
              <CardContent>
                <Typography
                  style={{ marginBottom: 20 }}
                  gutterBottom
                  variant="h6"
                >
                  If the details you have supplied are correct, we will send you
                  a One Time Password to allow login. You will be asked to
                  change this at your first login attempt.
                </Typography>

                <Grid container spacing={2}>
                  <Grid xs={12} item>
                    <TextField
                      fullWidth
                      id="number"
                      label="Member Number"
                      placeholder="Enter member number"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      fullWidth
                      id="email"
                      label="Member Email"
                      placeholder="Enter member email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Link href="/">
                      <a>
                        <Button color="primary" fullWidth variant="contained">
                          Request
                        </Button>
                      </a>
                    </Link>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </section>
      </InfoBar>

      <style jsx>{`
        section {
          padding: 20px;
        }
      `}</style>
    </>
  );
}
