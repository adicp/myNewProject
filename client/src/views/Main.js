import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PersonForm from '../components/PersonForm'
import AllPeople from '../components/AllPeople';


const Main = () => {

    const [personList, setPersonList] = useState([]);
    

    useEffect(() => {
        axios.get('http://localhost:8000/api')
            .then(res => {
                setPersonList(res.data)
            })
            .catch((err)=>console.log(err))
    }, [])

    const removeFromDom = (personId) => {
        axios.delete("http://localhost:8000/api/" + personId)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setPersonList(personList.filter(person=> person._id !== personId));
        })
        .catch((err)=>console.log(err))

    }

    const createPerson = personParams => {
        console.log("entered main create Person");
        axios.post('http://localhost:8000/api', personParams)
        .then(res => {
            console.log(res);
            console.log(res.data)
            setPersonList([...personList, res.data])

        })
        .catch((err)=>console.log(err))
    };


    return(
        <div>
            <PersonForm />
            <AllPeople personList={personList} removeFromDom= {removeFromDom}/>
        </div>
    );
}
export default Main; 