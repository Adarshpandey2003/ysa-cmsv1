// src/pages/Login.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo_new.png"; // Adjust the path as necessary
export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("Review Team");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleDemoLogin = (userType) => {
    if (userType === "Review Team") {
      setRole("Review Team");
      setEmail("review@example.com");
      setPassword("review123");
      navigate("/dashboard");
    } else {
      setRole("Agent");
      setEmail("agent@example.com");
      setPassword("agent123");
      navigate("/agent-dashboard");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f9f9f9",
      }}
    >
      <Card sx={{ width: 400, padding: 2, boxShadow: 3 }}>
        <CardContent>
          <Box display="flex" justifyContent="center" mb={2}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: 60, height: 60 }}
            />
          </Box>
          <Typography variant="h6" align="center" fontWeight={700}>
            YourStudyAbroad
          </Typography>
          <Typography variant="body2" align="center" color="text.secondary" mb={3}>
            Document Verification Platform
          </Typography>

          <FormControl fullWidth margin="normal">
            <InputLabel>User Role</InputLabel>
            <Select value={role} label="User Role" onChange={(e) => setRole(e.target.value)}>
              <MenuItem value="Review Team">Review Team</MenuItem>
              <MenuItem value="Agent">Agent</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => navigate("/dashboard")}
          >
            Sign In
          </Button>

          <Typography variant="body2" mt={3} mb={1}>
            Demo accounts:
          </Typography>
          <Box display="flex" gap={2}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => handleDemoLogin("Review Team")}
            >
              Review Team
            </Button>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => handleDemoLogin("Agent")}
            >
              Agent
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
