import { PropTypes } from 'prop-types'
export const Patients = ({ patient, setPatient, deletePatient }) => {

    const { petName, petAge, ownerName, email, appointmentDate, comments } = patient;

    const handleEditPatient = () => {
        setPatient(patient)
    }
    const handleDeletePatient = () => {
        deletePatient(patient.id)
    }
    return (
        <div className="bg-white m-3 px-5 py-10 rounded-xl mx-5 my-10">
            <p className="block font-bold mb-3 text-gray-700 uppercase">
                Pet Name: <span className="font-normal normal-case">{petName}</span>
            </p>
            <p className="block font-bold mb-3 text-gray-700 uppercase">
                Pet Age: <span className="font-normal normal-case">{petAge}</span>
            </p>
            <p className="block font-bold mb-3 text-gray-700 uppercase">
                Owner Name: <span className="font-normal normal-case">{ownerName}</span>
            </p>
            <p className="block font-bold mb-3 text-gray-700 uppercase">
                email: <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="block font-bold mb-3 text-gray-700 uppercase">
                Appointment Date: <span className="font-normal normal-case">{appointmentDate}</span>
            </p>
            <p className="block font-bold mb-3 text-gray-700 uppercase">
                Comments: <span className="font-normal normal-case">{comments}</span></p>

            <div className='flex justify-between mt-5'>
                <button type="button" className='py-2 px-10 bg-indigo-600 hover:bg:indigo-700 text-white font-bold rounded-lg' onClick={handleEditPatient}>Edit</button>
                <button type="button" className='py-2 px-10 bg-red-600 hover:bg:red-700 text-white font-bold rounded-lg' onClick={handleDeletePatient}>Delete</button>
            </div>
        </div>
    )
}


Patients.propTypes = {
    patient: PropTypes.object.isRequired,
    setPatient: PropTypes.func.isRequired,
    deletePatient: PropTypes.func.isRequired
}
