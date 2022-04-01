import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import DeleteButton from '../components/DeleteButton';
const Update = (props) => {
    const { id } = props;
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    const formTittle = "Update a Person";
    useEffect(() => {
        axios.get('http://localhost:8000/api/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
    }, [])
    const updatePerson = person => {
        axios.put('http://localhost:8000/api/' + id, person)
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a Person</h1>
            {loaded && (
                <>
                    <Form
                        onSubmitProp={updatePerson}
                        initialFirstName={person.firstName}
                        initialLastName={person.lastName}
                        formTittle = {formTittle}
                    />
                    <DeleteButton personId={person._id} successCallback={() => navigate("/api")} />
                </>
            )}
        </div>
    )
}
export default Update;
