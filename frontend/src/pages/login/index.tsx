import { Box, Button, TextField, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import logo from '../../assets/logo.png';
import axios from 'axios';


const theme = createTheme({
  palette: {
    primary: {
      main: '#158495',
    },
    secondary: {
      main: '#62AEBA',
    },
  },
});    


export  function Login(){
  const [formData, setFormData] = useState({
    username: "",
    password: ""    
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      setError("");
      setSuccessMessage("");

      const response = await axios.post("http://localhost:8080/api/sigIn", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setSuccessMessage("Usuário criado com sucesso!");
      console.log("Resposta da API:", response.data);

      // Reseta os campos após o envio
      setFormData({ username: "", password: "" });
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError(
        error.response?.data?.message || "Ocorreu um erro ao fazer login"
      );
    }
  };

  return (       
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh', 
        }}
      >
        {/* Imagem */}
        <Box sx={{ mb: 3 }}>
          <img
            src={logo}
            alt="Login"
            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
          />
        </Box>

        {/* Formulário */}
        <Box
          component="form"
          sx={{
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            mb: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Usuário"
            variant="outlined"
            fullWidth
            required
            color="primary"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            required
            color="primary"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mt: 1 }}
          >
            Entrar
          </Button>
        </Box>

        {/*Voltar login */}
        <Typography variant="body2" color="textSecondary">
          Não tem uma conta?{' '}
          <Typography
            component="a"
            href="#"
            variant="body2"
            sx={{
              color: 'secondary.main',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },              
            }} 
            
          >
            Cadastre-se
          </Typography>
        </Typography>

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

      </Container>
    </ThemeProvider>
  );
};
