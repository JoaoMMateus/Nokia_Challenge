import { useParams } from "react-router";
import React, { useState, useEffect }  from 'react';


const Profile = props =>  {
    // Use the useParams hook to get the username from the URL
    // username has to be applied as a named parameter in the route
    // const { task } = useParams();
    // const [tasks, settasks] = useState([]);
    // settasks(props.location.task);
    var id = props.match.params.id;

    // console.log(id);
    // console.log(task);
    // console.log(props.location.task);
    return (
        <div>
            <h1>{id}</h1>
            {/* {tasks.id} */}
        </div>
    )
}

export default Profile;