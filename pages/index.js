import { Grid, Card, CardContent, Button, Typography } from "@mui/material";
import Head from "../components/Head";
import Link from "next/link";
import TextField from "../components/TextField";

export default function Home() {
  return (
    <>
      <Head title="Login - CPD" />

      <section>
        <Grid>
          <Card
            style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}
          >
            <CardContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
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
                    <TextField
                      fullWidth
                      id="password"
                      label="Password"
                      placeholder="Enter password"
                      type="password"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Link href="/one-time-password-change">
                      <a>
                        <Button
                          color="primary"
                          fullWidth
                          type="submit"
                          variant="contained"
                        >
                          Login
                        </Button>
                      </a>
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Link href="/one-time-password-change">
                      <a>
                        <Button
                          color="primary"
                          fullWidth
                          type="submit"
                          variant="contained"
                        >
                          OTP Login
                        </Button>
                      </a>
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Link href="/password-reset">
                      <a>
                        <Typography variant="subtitle1" align="center">
                          Forgot password
                        </Typography>
                      </a>
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </section>

      <style jsx>{`
        section {
          padding: 20px;
        }
      `}</style>
    </>
  );
}
