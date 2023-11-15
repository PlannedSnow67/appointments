import { Header, Form, PatientList } from "./components"
import { useEffect, useState } from "react"

function App() {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});


  useEffect(() => {
    const patientsLS = localStorage.getItem('patients');
    if (patientsLS) setPatients(JSON.parse(patientsLS));
  }
    , []);

  const deletePatient = (id) => {
    const newPatients = patients.filter(patient => patient.id !== id);
    setPatients(newPatients);
    localStorage.setItem('patients', JSON.stringify(newPatients));
  }
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form patients={patients} setPatients={setPatients} patient={patient} setPatient={setPatient} />
        <PatientList patients={patients} setPatient={setPatient} deletePatient={deletePatient} />
      </div>
    </div>
  )
}

export default App
