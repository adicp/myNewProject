import React, {useState} from 'react';

const Form = (props) => {
    const { initialFirstName, initialLastName, onSubmitProp, formTittle } = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    const [formTitle, setFormTittle] = useState(formTittle);
    console.log(formTittle);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp ({firstName, lastName});
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <h1>{formTitle}</h1>
            <label>FirstName: <input type= "text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/></label>
            <label>LastName: <input type= "text" value={lastName} onChange={(e) => setLastName(e.target.value)}/></label> 
            <input type="submit" />
        </form>
    )
}

export default Form;