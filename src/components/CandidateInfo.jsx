import { useState } from "react";

export default function CandidateInfo({ name, date, skills }) {
    const [selectedSkills, setSelectedSkills] = useState([]);
    const style = "bg-zinc-800 text-white p-3 rounded-lg"

    const handleCheckboxChange = (skills) => {
        // Manejar cambios en las habilidades seleccionadas
        if (selectedSkills.includes(skills)) {
            setSelectedSkills(selectedSkills.filter((s) => s !== skills));
        } else {
            setSelectedSkills([...selectedSkills, skills]);
        }
    };

    function onSubmit(e) {
        e.preventDefault()
        const { name, date } = e.target
        console.log(name.value, date.value, selectedSkills)
    }
    return (
        <form className="flex flex-col justify-center space-y-2" onSubmit={onSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="name" id="name" className={style} defaultValue={name} />
            <label htmlFor="date">Fecha:</label>
            <input type="date" name="date" id="date" className={style} defaultValue={date} />
            <label htmlFor="skills">Habilidades:</label>
            {skills.map((skill) => (
                <div key={skill}>
                    <input
                        type="checkbox"
                        id={skill}
                        name="skills"
                        value={skill}
                        checked={selectedSkills.includes(skill)}
                        onChange={() => handleCheckboxChange(skill)}
                    />
                    <label htmlFor={skill}>{skill}</label>
                </div>
            ))}
            <button className="bg-orange-600 rounded-lg p-3">Save</button>
        </form>
    )
}