import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const MentorRegister = ({ setAuth }) => {
  const [mentorName, setMentorName] = useState("");
  const [mentorSurname, setMentorSurname] = useState("");
  const [mentorNumber, setMentorNumber] = useState("");
  const [mentorEmail, setMentorEmail] = useState("");
  const [mentorPassword, setMentorPassword] = useState("");
  const [mentor, setMentor] = useState([]);

  const handleMentorName = (event) => {
    event.preventDefault();
    setMentorName(event.target.value);
  };

  const handleMentorSurname = (event) => {
    event.preventDefault();
    setMentorSurname(event.target.value);
  };

  const handleMentorNumber = (event) => {
    event.preventDefault();
    setMentorNumber(event.target.value);
  };

  const handleMentorEmail = (event) => {
    event.preventDefault();
    setMentorEmail(event.target.value);
  };

  const handleMentorPassword = (event) => {
    event.preventDefault();
    setMentorPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMentor = ({
      mentor_name: mentorName,
      mentor_surname: mentorSurname,
      mentor_number: mentorNumber,
      mentor_email: mentorEmail,
      mentor_password: mentorPassword,
    });

    setMentor([...mentor, newMentor]);
    setMentorName("");
    setMentorSurname("");
    setMentorName("");
    setMentorEmail("");
    setMentorPassword("");
  };

  const Copyright = (props) => {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {"Copyright © "}
        <Link color="inherit" href="">
          The A Team
        </Link>{""}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  };

  const Mentor = (props) => {
    return (
      <div>
        {mentor.map((mentor) => {
          return (
            <>
              <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {`Mentor email: ${mentor.mentor_email}`}
                <br />
                {`Mentor password: ${mentor.mentor_password}`}
              </Typography>
            </>
          );
        }
        )}
      </div>
    );
  };

  const theme = createTheme();

  return (
    <>
      <div>
        <Typography component="h1" variant="h5">
          Advancing Engaged Citizenship
        </Typography>
        <br />
        <br />
        <Typography variant="h6" component="h2">
          Mentor Register
        </Typography>
        <button onClick={() => setAuth(true)}>Register</button>
      </div>
      <Link to="/">Home</Link>

      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Mentor Register
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate sx={{ mt: 1 }}>
              {/* STUDENT NAME */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={mentorName}
                onChange={handleMentorName}
              />
              {/* STUDENT SURNAME */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="surname"
                label="Surname"
                name="surname"
                autoComplete="surname"
                autoFocus
                value={mentorSurname}
                onChange={handleMentorSurname}
              />
              {/* STUDENT NUMBER */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="number"
                label="Number"
                name="number"
                autoComplete="number"
                autoFocus
                value={mentorNumber}
                onChange={handleMentorNumber}
              />
              {/* STUDENT EMAIL */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={mentorEmail}
                onChange={handleMentorEmail}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={mentorPassword}
                onChange={handleMentorPassword}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item xs>
                  <FormLink
                    href="#"
                    variant="body2"
                  >
                    Forgot password?
                  </FormLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Mentor />
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default MentorRegister;