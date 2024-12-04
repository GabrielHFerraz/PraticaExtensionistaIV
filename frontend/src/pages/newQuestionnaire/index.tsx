import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const NewQuestionnaire: React.FC = () => {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [pergunta, setPergunta] = useState('');

  const handleSave = () => {
    // Lógica para salvar o questionário (aqui você pode enviar os dados para o backend)
    const novoQuestionario = { titulo, descricao, pergunta };
    console.log('Novo Questionário:', novoQuestionario);
    navigate('/'); // Volta para a página principal
  };

  return (
    <Box sx={{ padding: 2 }}>
      {/* Botão de Voltar */}
      <IconButton onClick={() => navigate('/questionarios')}>
        <ArrowBackIcon />
      </IconButton>

      <Typography variant="h5" sx={{ mb: 4 }}>
        Novo Questionário
      </Typography>

      {/* Campo Título */}
      <TextField
        fullWidth
        label="Título"
        variant="outlined"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        sx={{ mb: 2, backgroundColor: '#E0F7FA', width:"50%"}}
      />

      {/* Campo Descrição */}
      <TextField
        fullWidth
        label="Descrição"
        variant="outlined"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        sx={{ mb: 2, backgroundColor: '#E0F7FA'}}
      />
 
      {/* Botão Salvar */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        sx={{
          backgroundColor: '#008080',
          color: '#fff',
          '&:hover': { backgroundColor: '#006666' },
        }}
      >
        Salvar
      </Button>
    </Box>
  );
};

export default NewQuestionnaire;
