import React, { useState } from 'react';
import {
  Box,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Fab,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

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

export function Questionarios() {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Feedback Clientes',
      description: 'Enviar para clientes',
    },
    {
      id: 2,
      title: 'Nome Questionário',
      description: 'Descrição',
    },
    {
      id: 3,
      title: 'Nome Questionário',
      description: 'Descrição',
    },
  ]);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const navigate = useNavigate();

  const handleAddQuestionario = () => {
    navigate('/newquestionnaire'); 
  };

  return (
    <Box sx={{ padding: 2 }}>    

      {/* Barra de Pesquisa */}
      <Box sx={{ mb: 2, position: 'relative' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Pesquisar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon sx={{ mr: 1 }} />,
          }}
        />
      </Box>

      {/* Lista */}
      <List>
        {filteredItems.map((item) => (
          <ListItem
            key={item.id}
            sx={{
              backgroundColor: '#E0F7FA',
              borderRadius: '8px',
              mb: 2,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: '#008080' }}>A</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
              }
              secondary={
                <Typography variant="body2" sx={{ color: '#555' }}>
                  {item.description}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>

      {/* Botão Flutuante */}
      <StyledFab>
      <Fab     
        sx={{ position: 'fixed', bottom: 20, right: 20 }}
        onClick={handleAddQuestionario}
      >
        <AddIcon />
      </Fab>
      </StyledFab>
      
    </Box>
  );
};

