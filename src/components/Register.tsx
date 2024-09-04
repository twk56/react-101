import React from "react";
import {
  Button,
  Stack,
  TextField,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import logoregister from "../assets/img/undraw_mobile_payments_re_7udl.svg";

const Register = () => {
  const navigation = useNavigate();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Paper elevation={3} className="max-w-sm p-6">
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Register
        </Typography>
        <img
          src={logoregister}
          alt="user"
          style={{ width: "100px", height: "auto", marginBottom: "16px" }}
        />
        <form>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <Stack spacing={2} direction="row" justifyContent="center" mt={3}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                "&:hover": {
                  backgroundColor: "lightgreen", // เปลี่ยนเป็นสีเขียวอ่อนที่คุณต้องการ
                },
              }}
            >
              Summit
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={() => navigation("/")}
            >
              Back
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;
