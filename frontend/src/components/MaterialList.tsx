import React from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import InboxIcon from '@mui/icons-material/Inbox';

type Item = {
  id: number;
  text: string;
};

type Props = {
  items: Item[];
  onDelete: (id: number) => void;
};

const MaterialList: React.FC<Props> = ({ items, onDelete }) => {
  return (
    <List>
      {items.map((item) => (
        <ListItem
          key={item.id}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => onDelete(item.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default MaterialList;
