import { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { ErrorMessage } from "./ErrorMessage";
export const Form = ({ patients, setPatients, patient, setPatient }) => {

    const [form, setForm] = useState({
        petName: '',
        petAge: 0,
        ownerName: '',
        email: '',
        appointmentDate: '',
        comments: ''
    });

    const [error, setError] = useState(false);

    useEffect(() => {
        if (patient) {
            console.log(patient);
            setForm({ ...patient })
        }
    }, [patient])

    const handleInput = ({ target }) => {
        const { id, value } = target;
        setForm({
            ...form,
            [id]: value
        });
    }

    const handleSubmit = (e) => {
        //
        e.preventDefault()

        console.log(form);

        if (Object.values(form).some(field => !field || field.toString().trim() === '')) {
            setError(true);
            return;
        }
        if (patient.id) {
            const newPatients = patients.map(item => item.id === patient.id ? form : item);
            setPatients([...newPatients]);
            console.log(newPatients);
            localStorage.setItem('patients', JSON.stringify([...newPatients]));
            setPatient({});
        } else {
            form.id = generateId();
            setPatients([...patients, form]);
            localStorage.setItem('patients', JSON.stringify([...patients, form]));
        }
        setError(false);
        setForm({
            petName: '',
            petAge: 0,
            ownerName: '',
            email: '',
            appointmentDate: '',
            comments: ''
        });

    }
    const inputValue = patient.id ? 'Save Information' : 'Add new';

    const generateId = () => {
        const random = Math.random().toString(36).substr(2);
        const date = Date.now().toString(36)
        return random + date
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">
                Patients Manager
            </h2>
            <p className="text-lg mt-5 text-center mb-5">
                Add new patient &
                <span className="text-indigo-600 font-bold"> Manage</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
                {error && <ErrorMessage />}
                <div className="mb-5">
                    <label className="block text-grey-700 uppercase font-bold " htmlFor="petName">Pet Information</label>
                    <input id='petName' className="border-2 w-full p-2 mt-2 rounded-md" type="text" placeholder="Name" value={form.petName} onChange={handleInput} />
                    <input id='petAge' className="border-2 w-full p-2 mt-2 rounded-md" type="number" placeholder="age" value={form.petAge} onChange={handleInput} />
                </div>
                <div className="mb-5">
                    <label className="block text-grey-700 uppercase font-bold " htmlFor="ownerName">Owner Information</label>
                    <input id='ownerName' className="border-2 w-full p-2 mt-2 rounded-md" type="text" placeholder="Name" value={form.ownerName} onChange={handleInput} />
                    <input id='email' className="border-2 w-full p-2 mt-2 rounded-md" type="email" placeholder="example@example.com" value={form.email} onChange={handleInput} />
                </div>
                <div className="mb-5">
                    <label className="block text-grey-700 uppercase font-bold " htmlFor="appointmentDate">Appointment Information</label>
                    <input id='appointmentDate' className="border-2 w-full p-2 mt-2 rounded-md" type="date" value={form.appointmentDate} onChange={handleInput} />
                </div>
                <div className="mb-5">
                    <label className="block text-grey-700 uppercase font-bold " htmlFor="comments">Comments</label>
                    <textarea id='comments' className='border-2 w-full p-2 mt-2 rounded-md' placeholder="what is your appointment for?" value={form.comments} onChange={handleInput} />
                </div>

                <input type='submit' className='bg-blue-600 w-full rounded-lg p-3 text-white font-bold hover:bg-blue-700 cursor-pointer' value={inputValue} />
            </form>
        </div>
    )
}


Form.propTypes = {
    patients: PropTypes.array.isRequired,
    setPatients: PropTypes.func.isRequired,
    patient: PropTypes.object.isRequired,
    setPatient: PropTypes.func.isRequired
}