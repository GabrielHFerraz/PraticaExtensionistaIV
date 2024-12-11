import { Card, CardContent, Typography, Box } from '@mui/material';

interface CardDashboardProps { valor: number; labelText: string}

export function CardDashboard({ valor,   labelText }: CardDashboardProps)  {

  return (
    <Card
      style={{
        width: 300,
        backgroundColor: '#1E1E2F',
        color: '#fff',
        borderRadius: 10,
        padding: '16px',
      }}
    >
      <CardContent>
        {/* Ícone e Título */}
        <Box display="flex" alignItems="center" mb={2}>          
          <Typography variant="h6" style={{ marginLeft: 8 }}>
             {labelText} 
          </Typography>
        </Box>

        {/* Número de Bookings */}
        <Typography variant="h3" style={{ fontWeight: 'bold' }}>
          {valor}
        </Typography>

       
      </CardContent>
    </Card>
  );
}

