import { ChangeEvent, useState } from 'react';
import { Box, Button, TextField, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'; // Importa o Axios
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';

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

export function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navToCreateUser = () => {
    navigate('/createuser');
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    try {
      const response = await axios.post('http://localhost:8080/api/sigIn', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Login successful:', response.data);
      navigate("/dashboard");

      // Tratar login bem-sucedido aqui, como redirecionamento
    } catch (error: any) {
      console.error('Error:', error);
      const message = error.response?.data?.message || 'Login failed. Please check your credentials.';
      setErrorMessage(message);
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
          onSubmit={handleSubmit}       
          sx={{
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            mb: 2,
          }}
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
            sx={{ mt: 1 }}
          >
            Entrar
          </Button>
        </Box>

        {/* Mensagem de erro */}
        {errorMessage && (
          <Typography variant="body2" color="error" sx={{ mt: 2 }}>
            {errorMessage}
          </Typography>
        )}

        {/* Voltar login */}
        <Typography variant="body2" color="textSecondary">          
          Não tem uma conta?{' '}
          <Typography
          onClick={navToCreateUser}
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
      </Container>
    </ThemeProvider>
  );
}
