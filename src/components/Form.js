import React from "react";

function Form({ firstName, lastName, handleFirstChange, handleLastChange }) {
  
  return (
    <form>
      <input onChange={handleFirstChange} type="text" value={firstName} />
      <input onChange={handleLastChange} type="text" value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
