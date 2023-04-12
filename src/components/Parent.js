import React, { useState } from 'react'
import Form from './Form'
import DisplayData from './DisplayData';

function Parent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");

    function handleFirstChange(e) {
        setFirstName(e.target.value);
     };

    function handleLastChange(e) {
        setLastName(e.target.value);
    }
  
    return (
    <div>
        <Form 
            firstName={firstName}
            lastName={lastName}
            handleFirstChange={handleFirstChange}
            handleLastChange={handleLastChange}
        />
        <DisplayData firstName={firstName} lastName={lastName} />
    </div>
  )
}

export default Parent