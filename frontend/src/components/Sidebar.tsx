import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Typography,
    Box,
  } from "@mui/material";
  import DashboardIcon from "@mui/icons-material/Dashboard";
  import StorageIcon from "@mui/icons-material/Storage";
  import { NavLink } from "react-router-dom";
  import logo from '../assets/logo.png';
  
  
  export function Sidebar() {
    return (
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "#158495",
            color: "#fff",
            boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.3)"
          },
        }}
      >
        {/* Avatar e Informações do Usuário */}
        <Box sx={{ mb: 3, padding: 2, textAlign: "center" }}>

            <Box sx={{display: "flex", alignItems:"center", justifyContent:"center", m:5}}>
                <Typography >
                    Questionarios
                </Typography>
                <img
                    src={logo}
                    alt=""
                    style={{ width: '40px', height: '40px' }}
                />

            </Box>                                
        
            <Avatar
                sx={{
                width: 80,
                height: 80,
                margin: "0 auto",
                }}
                src="https://via.placeholder.com/80" // Substitua pelo link da imagem do avatarW
                alt="User Avatar"
            />
            <Typography sx={{ mt: 1 }}>
                John Doe
            </Typography>
            <Typography
                variant="body1"
                sx={{ fontSize: 10, fontFamily: "cursive" }}
            >
                emailaddress@gmail.com
            </Typography>
        </Box>
  
        {/* Links de Navegação */}
        <List>
          {[
            { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
            { text: "Questionarios", icon: <StorageIcon />, path: "/questionarios" },
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "#62AEBA" : "#fff",
                  width: "100%",
                })}
              >
                <ListItemButton>
                  <ListItemIcon sx={{ color: "inherit"}}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
  