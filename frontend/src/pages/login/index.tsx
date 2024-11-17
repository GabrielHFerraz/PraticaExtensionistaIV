import { Box, Button, TextField, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../../assets/logo.png';

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

export function Login(){
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
          backgroundColor: '#f5f5f5', // Fundo claro
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
            width: '100%',
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
            variant="filled"
            fullWidth
            required
            color="primary"
          />
          <TextField
            label="Senha"
            type="password"
            variant="filled"
            fullWidth
            required
            color="primary"
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

        {/* Frase para cadastro */}
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
      </Container>
    </ThemeProvider>
  );
};
