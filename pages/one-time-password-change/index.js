import Link from "next/link";
import Head from "../../components/Head";
import InfoBar from "../../components/InfoBar";
import { Grid, Card, CardContent, Button, Typography } from "@mui/material";
import TextField from "../../components/TextField";

export default function OneTimePasswordChange() {
  return (
    <>
      <Head title="Change one time password - CPD" />

      <InfoBar title="ONE TIME PASSWORD CHANGE">
        <section>
          <Grid>
            <Card
              style={{ maxWidth: 750, padding: "20px 5px", margin: "0 auto" }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Please change your One Time Password to access the system
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  gutterBottom
                >
                  Password must be a minimum of 15 characters long and include
                  minimum of 2 Capital Letters, 2 symbols and 2 numbers. For
                  example: Listen!Signal!45
                </Typography>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="newPassword"
                        label="New Password"
                        placeholder="Enter your new password"
                        type="password"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="confirmPassword"
                        label="Confirm Password"
                        placeholder="Enter your new password"
                        type="password"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Link href="/dashboard">
                        <a>
                          <Button
                            color="primary"
                            fullWidth
                            type="submit"
                            variant="contained"
                          >
                            Submit
                          </Button>
                        </a>
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </section>
      </InfoBar>

      <style jsx>{`
        section {
          padding: 20px;
        }
        form {
          margin-top: 20px;
        }
      `}</style>
    </>
  );
}
