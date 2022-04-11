import React, { useState, useEffect }  from 'react';
import { Skeleton, Grid } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

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
        return (
        <div>
            <Grid md={12} container>
                <h3>Error: {error.message}</h3>
            </Grid>
        </div>
        );
    } else if (!isLoaded) {
        return (
            <div>
                <div>Loading...</div>
                <Skeleton animation="wave" variant="rectangular" width={360} height={18} />
            </div>
        );
    } else {
        return (
        <div>
            <Grid md={12} container>
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
                        <ListItemButton role={undefined}dense>
                          <ListItemText id={labelId} primary={`${task.text}`} />
                        </ListItemButton>
                      </ListItem>
                    );
                })}
                </List>
            </Grid>
        </div>
        );
    }
}

export default Tasks;