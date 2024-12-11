import { Box, Container } from "@mui/material";
import { CardDashboard } from "../../components/CardDashboard";


export function Dashboard () {
  return (  
    <Container sx={{m:0, display:"flex"}}>
      <Box sx={{display:"flex", gap:1}}>
      <CardDashboard valor={3} labelText={"Questionário"}/>    
      <CardDashboard valor={0} labelText={"Respondidos"}/>    
    </Box>          
    </Container>
    
  )
};

