import React, { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/user.png";
import axios from "axios";

// CSS Keyframes for Wobble Effect
const wobbleKeyframes = `
  @keyframes wobble {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

const Login = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box
      sx={{
        minHeight: "100vh", // Ensures full height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Center vertically
        alignItems: "center", // Center horizontally
        backgroundColor: "#f4f6f8",
      }}
    >
      <Box
        sx={{
          maxWidth: 354,
          padding: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <img
          src={logo}
          alt="user"
          style={{ width: "100px", height: "auto", marginBottom: "16px" }}
        />

        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Login
        </Typography>

        <form
          onSubmit={async (event) => {
            event.preventDefault();
            console.log("Hello from");
            console.log(email, password);
            // Add navigation to profile or authentication logic here
           try {
            const res = await axios.post("http://localhost:3000/login", {
              username: email,
              password: password,
            });
            console.log(res.data);
            navigation("/profile");
           } catch (error) {
            console.log(error)
           }
          }}
          style={{ width: "100%" }}
        >
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(event) => setEmail(event.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(event) => setPassword(event.target.value)}
            sx={{ marginBottom: 2 }}
          />

          <Stack spacing={2} direction={"row"} justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                animation: "none", // Initial state without animation
                "&:hover": {
                  backgroundColor: "#1976d2",
                  animation: `${wobbleKeyframes} 0.6s ease-in-out`,
                },
                transition: "background-color 0.3s, transform 0.3s", // Smooth transition
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigation("/")}
              sx={{
                animation: "none", // Initial state without animation
                "&:hover": {
                  backgroundColor: "#d32f2f",
                  animation: `${wobbleKeyframes} 0.6s ease-in-out`,
                },
                transition: "background-color 0.3s, transform 0.3s", // Smooth transition
              }}
            >
              Back
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
