import { ChangeEvent, useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
} from "@mui/material";

export function CreateUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    username: ""
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Envia os dados para a API
  const handleSubmit = async () => {
    try {
      setError("");
      setSuccessMessage("");

      const response = await axios.post("http://localhost:8080/api/createUser", formData);
      setSuccessMessage("Usuário criado com sucesso!");
      console.log("Resposta da API:", response.data);

      // Reseta os campos após o envio
      setFormData({ name: "", email: "", password: "", username:"" });
    } catch (error: any) {
      console.error("Erro ao criar usuário:", error);
      setError(
        error.response?.data?.message || "Ocorreu um erro ao criar o usuário."
      );
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        {/* Título */}
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          Crie uma conta
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginBottom: 3 }}
        >
          Inscreva-se para começar
        </Typography>

        {/* Campo de Usuário*/}
        <TextField
          fullWidth
          label="Usuário"
          variant="outlined"
          margin="normal"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        {/* Campo de Nome */}
        <TextField
          fullWidth
          label="Nome"
          variant="outlined"
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />         

        {/* Campo de E-mail */}
        <TextField
          fullWidth
          label="E-Mail"
          variant="outlined"
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Campo de Senha */}
        <TextField
          fullWidth
          label="Senha"
          type="password"
          variant="outlined"
          margin="normal"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        {/* Exibe mensagem de erro */}
        {error && (
          <Typography color="error" sx={{ marginTop: 2 }}>
            {error}
          </Typography>
        )}

        {/* Exibe mensagem de sucesso */}
        {successMessage && (
          <Typography color="primary" sx={{ marginTop: 2 }}>
            {successMessage}
          </Typography>
        )}

        {/* Botão de Criar */}
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            marginTop: 3,
            backgroundColor: "#00838f",
            "&:hover": {
              backgroundColor: "#006064",
            },
          }}
          onClick={handleSubmit}
        >
          Criar Conta
        </Button>

        {/* Frase para login */}
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          Já tem uma conta?{" "}
          <Typography
            component="a"
            href="#"
            variant="body2"
            sx={{
              color: "secondary.main",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Entrar
          </Typography>
        </Typography>
      </Box>
    </Container>
  );
}
