import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {tasks.map(task => (
                <li key={task.id}>
                    <Link to={{pathname:`profile/${task.id}`, task: task }}>
                    {task.text} 
                    {
                        (task.completed)
                        ? "Completed"
                        : "Failed"
                    }
                    </Link>
                </li>
                ))}
            </ul>
        );
    }
}

export default Home;