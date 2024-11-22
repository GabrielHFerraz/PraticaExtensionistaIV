import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
} from "@mui/material";


export function CreateUser ()  {
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

        {/* Campo de Nome */}
        <TextField
          fullWidth
          label="Nome"
          variant="outlined"
          margin="normal"
        />

        {/* Campo de E-mail */}
        <TextField
          fullWidth
          label="E-Mail"
          variant="outlined"
          margin="normal"
        />

        {/* Campo de Senha */}
        <TextField
          fullWidth
          label="Senha"
          type="password"
          variant="outlined"
          margin="normal"
        />

        {/* Botão de Entrar */}
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
        >
          Entrar
        </Button>  

        {/* Frase para cadastro */}
        <Typography variant="body2" color="textSecondary" sx={{mt: 1}}>
          Já tem uma conta?{' '}
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
            Entrar
          </Typography>
        </Typography>


      </Box>       
    </Container>
  );
};