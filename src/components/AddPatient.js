import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios";

export default function AddPatient() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const navigate = useNavigate();

  async function handleSubmit(event){
    try {
      event.preventDefault();
      const patientData = {
        firstName: firstName,
        lastName:lastName,
        age:age 
      }
      
      await axios.post(`${process.env.REACT_APP_HOST}/clinicalapi/patient/new`, patientData)
      navigate('/')
      
    } catch (error){
      console.log(error);
    }
  }


  return (
    <div>
      <h2>Create Patient:</h2>
      <form>
        First Name: <input type="text" name="firstName" align="left" onChange={e=>setFirstName(e.target.value)} />
        Last Name: <input type="text" name="lastName" align="left" onChange={e=>setLastName(e.target.value)} />
        Age: <input type="text" name="age" align="left" onChange={e=>setAge(e.target.value)} />
        <button onClick={handleSubmit}>Confirm</button>
      </form>

    </div>
  )

}
