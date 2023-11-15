import { Patients } from "./Patients"
import PropTypes from 'prop-types'
export const PatientList = ({ patients, setPatient, deletePatient }) => {

    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

            {patients.length > 0 ?
                <>
                    <h2 className='font-black text-3xl text-center'>
                        Patients List
                    </h2>
                    <p className="text-xl mt-5 mb-5 text-center">
                        Manage your
                        <span className="font-bold text-indigo-600"> Appointments</span>
                    </p>

                    {
                        patients.map((patient) => (
                            <Patients key={patient.id} patient={patient} setPatient={setPatient} deletePatient={deletePatient} />
                        ))
                    }
                </> :
                <>
                    <h2 className='font-black text-3xl text-center'>
                        There are no patients
                    </h2>
                    <p className="text-xl mt-5 mb-5 text-center">
                        Manage your
                        <span className="font-bold text-indigo-600"> Appointments</span>
                    </p>
                </>
            }


        </div>
    )
}


PatientList.propTypes = {
    patients: PropTypes.array.isRequired,
    setPatient: PropTypes.func.isRequired,
    deletePatient: PropTypes.func.isRequired
}

