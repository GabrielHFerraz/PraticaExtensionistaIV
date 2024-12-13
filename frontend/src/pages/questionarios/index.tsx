import { useState, useEffect } from 'react';
import axios from 'axios';
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

// Definindo o tipo QuestionarioItem 
interface QuestionarioItem {
  id: number;
  cd: number;
  titulo: string;
  descr: string;
}

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
  const [items, setItems] = useState<QuestionarioItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<QuestionarioItem[]>('http://application-api.online:8080/api/questionnaries');  
        setItems(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    fetchData();
  }, []);

  const handleAddQuestionario = () => {
    navigate('/newquestionnaire'); 
  };

  const filteredItems = items.filter((item) =>
    item.titulo.toLowerCase().includes(search.toLowerCase())
  );

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
              <Avatar sx={{ backgroundColor: '#008080' }}>{item.cd}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {item.titulo}                  
                </Typography>                
              }
              secondary={
                <Typography variant="body2" sx={{ color: '#555' }}>
                  {item.descr}
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
}
