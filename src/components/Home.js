import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import {Link } from "react-router-dom"

export default function Home() {
  const [patientData, setPatientData] = useState([]);

  async function fetchData() {
    try {
      const { data:{ data} } = await axios.get(`${process.env.REACT_APP_HOST}/clinicalapi/patients`);
      setPatientData(data);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=> {
    fetchData();
  },[]);
 
  return (
    <>
      <div>
        <h2>Patients:</h2>
        <table align="center">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              patientData.map((userdata, index )=> (
                <tr key={index}>
                  <td>{userdata.firstName}</td>
                  <td>{userdata.lastName}</td>
                  <td>{userdata.age}</td>
                  <td><Link to={'/addClinicals/'+ userdata._id}>Add Data</Link></td>
                </tr>
              ))
            } 
          </tbody>
        </table>
        <Link to={'/addPatient'}>Register Patient</Link>
      </div>
    </>
  );
}
