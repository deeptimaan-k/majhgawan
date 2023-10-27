import React, { useState } from "react";
import { Modal, Button, TextField } from "@mui/material";

const LoginModal = ({ open, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    // You can send the username and password to your backend for authentication
    // and handle the response accordingly
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded shadow-lg">
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4 block"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 block"
          />
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
