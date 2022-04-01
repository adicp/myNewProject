import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Form from '../components/Form';


const UpdatePerson = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [person, setPerson] = useState({});
    const [loaded, setLoaded] = useState(false);
    // const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            });
    }, [])
    const updatePerson = personParam => {
        axios.put('http://localhost:8000/api/edit/' + id, personParam)
            .then(res => console.log(res));
            navigate("/api");
    }
    
    return (
        <div>
        <h1>Update a Person</h1>
        {
        loaded && <Form onSubmitProp={updatePerson} initialFirstName={person.firstName}
        initialLastName={person.lastName}
        />
        }
    </div>
        )
    
}
export default UpdatePerson;
