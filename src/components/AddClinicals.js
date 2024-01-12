import React from 'react'
import { useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'

export default function AddClinicals(props) {
  const [componentName, setComponentName] = useState('')
  const [componentValue, setComponentValue] = useState('')
  const navigate = useNavigate();
  const { patientId} = useParams();

  async function handleSubmit(event){
    try {
      event.preventDefault();
      const clinicalData = {
        patientId:patientId,
        componentName: componentName,
        componentValue:componentValue,
      }
      
      await axios.post(`${process.env.REACT_APP_HOST}/clinicalapi/clinical/new`, clinicalData)
      navigate('/')
      
    } catch (error){
      console.log(error);
    }
  }


  return (
    <div>
      <h2>Add Clinical Data:</h2>
      <form>
        Clinical Entry Type: <select onChange={e=>setComponentName(e.target.value)} >
          <option>Select One</option>
          <option value="bp">Blood Pressure</option>
          <option value="hw">Height/Weight</option>
          <option value="heartrate">Heart Rate</option>
        </select>
        Component Value: <input type="text" name="componentValue" align="left" onChange={e=>setComponentValue(e.target.value)} />
        <button onClick={handleSubmit}>Confirm</button>
      </form>

    </div>
  )

}
