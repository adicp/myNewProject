import React, {useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Form from './Form';


const PersonForm = (props) => {
    const { initialFirstName, initialLastName, onSubmitProp} = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    const formTittle = "Create a Person";
    const { id } = useParams();
    console.log("not showing person form y/n")
    // const [person, setPerson] = useState({});
    // const [loaded, setLoaded] = useState(false);
    // const navigate = useNavigate();
    
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/' + id)
    //         .then(res => {
    //             setPerson(res.data);
    //             setLoaded(true);
    //         });
    // }, [])

    const createPerson = (personParams) => {
        axios.post('http://localhost:8000/api', personParams)
        .then(res => console.log(res));
    }

    return (

        <Form onSubmitProp = {createPerson} firstName="" lastName=""/>

    )
}

export default PersonForm;