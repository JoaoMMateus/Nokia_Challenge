import React, { useState, useEffect }  from 'react';
import { Skeleton } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

// const [checked, setChecked] = useState([]);

// const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

const Tasks = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [tasks, settasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3008/api/tasks/")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    settasks(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
    if (error) {
        return (<div>Error: {error.message}</div>);
    } else if (!isLoaded) {
        return (
            <div>
                <div>Loading...</div>
                <Skeleton animation="wave" variant="rectangular" width={210} height={18} />
            </div>
        );
    } else {
        return (
        <div>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {tasks.map((task) => {
                const labelId = `checkbox-list-label-${task.id}`;
                return (
                  <ListItem key={task.id} secondaryAction={
                      <IconButton edge="end" aria-label="comments">
                          {(task.completed)
                            ? <DoneOutlineRoundedIcon/>
                            : <ClearRoundedIcon />
                          }
                      </IconButton>
                    } disablePadding >
                    <ListItemButton role={undefined} /*onClick={handleToggle(task.id)}*/ dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                        //   checked={checked.indexOf(task.id) !== -1}
                          tabIndex={-1}
                        //   disableRipple
                        //   inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={`${task.text}`} />
                    </ListItemButton>
                  </ListItem>
                );
            })}
            </List>
        </div>
        );
    }
}

export default Tasks;