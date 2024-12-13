import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  IconButton,
  Fab
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewQuestionnaire: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    titulo: "",
    descr: "",
    cd: ""
  });

  const StyledFab = styled(Fab)({
    position: 'fixed',
    bottom: 20,
    right: 20,
    backgroundColor: '#008080',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#006666',
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://application-api.online:8080/api/questionnaries', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Login successful:', response.data);
      navigate("/questionarios");

    } catch (error: any) {
      console.error('Error:', error);
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <IconButton onClick={() => navigate('/questionarios')}>
        <ArrowBackIcon />
      </IconButton>

      <Typography variant="h5" sx={{ mb: 4 }}>
        Novo Questionário
      </Typography>

      <form onSubmit={handleSubmit}>
        {/* Campo Código */}
        <TextField
          fullWidth
          label="Código"
          name="cd" 
          variant="outlined"
          value={formData.cd}
          onChange={handleChange}
          sx={{ mb: 2, backgroundColor: '#E0F7FA', width: "50%" }}
        />

        {/* Campo Título */}
        <TextField
          fullWidth
          label="Título"
          name="titulo" 
          variant="outlined"
          value={formData.titulo}
          onChange={handleChange}
          sx={{ mb: 2, backgroundColor: '#E0F7FA', width: "50%" }}
        />

        {/* Campo Descrição */}
        <TextField
          fullWidth
          label="Descrição"
          name="descr" 
          variant="outlined"
          value={formData.descr}
          onChange={handleChange}
          sx={{ mb: 2, backgroundColor: '#E0F7FA' }}
        />

        {/* Botão Salvar */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: '#008080',
            color: '#fff',
            '&:hover': { backgroundColor: '#006666' },
          }}
        >
          Salvar
        </Button>
      </form>

      {/* Botão Flutuante */}
      <StyledFab>
        <Fab
          sx={{ position: 'fixed', bottom: 20, right: 20 }}
        >
          <AddIcon />
        </Fab>
      </StyledFab>
    </Box>
  );
};

export default NewQuestionnaire;
