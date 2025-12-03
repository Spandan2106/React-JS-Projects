// React and useState are loaded from the CDN, so no import is needed.
const { useState } = React;

function Form() {
    const [name, setName] = useState('');
    const [education, setEducation] = useState('');
    const [course, setCourse] = useState('');
    const [occupation, setOccupation] = useState('');
    const [location, setLocation] = useState('');
    const [phone, setPhone] = useState('');
    const [gmail, setGmail] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [diseases, setDiseases] = useState('');
    const [medicines, setMedicines] = useState('');
    const [surgery, setSurgery] = useState('');
    const [age, setAge] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (name && age) {
            setSubmitted(true);
        }
    };

    return (

        <div id="form-container">
            <h1>Medical Form</h1>
            <input className="form-input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
            <select className="form-input" value={education} onChange={(e) => setEducation(e.target.value)}>
                <option value="" disabled>Select Education Level...</option>
                <option value="High School">High School</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="PhD">PhD</option>
                <option value="Diploma">Diploma</option>
                <option value="Vocational Training">Vocational Training</option>
                <option value="Associate Degree">Associate Degree</option>
                <option value="Professional Certification">Professional Certification</option>
                <option value="Other">Other</option>
            </select>
            <select className="form-input" value={course} onChange={(e) => setCourse(e.target.value)}>
                <option value="" disabled>Select Course...</option>
                <option value="Computer Science">Computer Science</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
                <option value="BCA">BCA</option>
                <option value="MBA">MBA</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Electrical Engineering">Electrical Engineering</option>
                <option value="Medicine">Medicine</option>
                <option value="Nursing">Nursing</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Architecture">Architecture</option>
                <option value="Computer Science Specalization">Computer Science Specalization</option>
                <option value="Business Administration">Business Administration</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Psychology">Psychology</option>
                <option value="Arts & Humanities">Arts & Humanities</option>
                <option value="Others">Others</option>
            </select>
            <select className="form-input" value={occupation} onChange={(e) => setOccupation(e.target.value)}>
                <option value="" disabled>Select Occupation...</option>
                <option value="Student">Student</option>
                <option value="Software Developer">Software Developer</option>
                <option value="Doctor">Doctor</option>
                <option value="Teacher">Teacher</option>
                <option value="Business">Business</option>
                <option value="Engineer">Engineer</option>
                <option value="Nurse">Nurse</option>
                <option value="Artist">Artist</option>
                <option value="Scientist">Scientist</option>
                <option value="Lawyer">Lawyer</option>
                <option value="Accountant">Accountant</option>
                <option value="Architect">Architect</option>
                <option value="Pharmacist">Pharmacist</option>
                <option value="Consultant">Consultant</option>
                <option value="Researcher">Researcher</option>
                <option value="Writer">Writer</option>
                <option value="Designer">Designer</option>
                <option value="Manager">Manager</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Other">Other</option>
            </select>
            <input className="form-input" type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter your location" />
            <input className="form-input" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" />
            <input className="form-input" type="email" value={gmail} onChange={(e) => setGmail(e.target.value)} placeholder="Enter your Gmail" />
            <input className="form-input" type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Enter your height (cm)" />
            <input className="form-input" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Enter your weight (kg)" />
            <select className="form-input" value={diseases} onChange={(e) => setDiseases(e.target.value)}>
                <option value="" disabled>Select Diseases (if any)...</option>
                <option value="None">None</option>
                <option value="Diabetes">Diabetes</option>
                <option value="Cardiovascular Disease">Cardiovascular Disease</option>
                <option value="Cancer">Cancer</option>
                <option value="Chronic Respiratory Disease">Chronic Respiratory Disease</option>
                <option value="Depression">Depression</option>
                <option value="Arthritis">Arthritis</option>
                <option value="Obesity">Obesity</option>
                <option value="Allergies">Allergies</option>
                <option value="Hypertension">Hypertension</option>
                <option value="Asthma">Asthma</option>
                <option value="Other">Other</option>
            </select>
            <select className="form-input" value={medicines} onChange={(e) => setMedicines(e.target.value)}>
                <option value="" disabled>Select Medicines (if any)...</option>
                <option value="None">None</option>
                <option value="Metformin">Metformin</option>
                <option value="Atorvastatin">Atorvastatin</option>
                <option value="Levothyroxine">Levothyroxine</option>
                <option value="Loratadine">Loratadine</option>
                <option value="Amlodipine">Amlodipine</option>
                <option value="Omeprazole">Omeprazole</option>
                <option value="Simvastatin">Simvastatin</option>
                <option value="Hydrochlorothiazide">Hydrochlorothiazide</option>
                <option value="Gabapentin">Gabapentin</option>
                <option value="Lisinopril">Lisinopril</option>
                <option value="Albuterol">Albuterol</option>
                <option value="Other">Other</option>
            </select>
            <select className="form-input" value={surgery} onChange={(e) => setSurgery(e.target.value)}>
                <option value="" disabled>Any Past Surgery?</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
            </select>
            <input className="form-input" type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter your age" />
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
            {submitted && <p className="submitted-message">Form Submitted Successfully!</p>}
        </div>

    );
}