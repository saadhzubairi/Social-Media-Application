import { useState } from 'react';
import './stepFour.css'
import { CircularProgress } from '@mui/material';
function StepFour({ setStepTrack, setDaySchedules }) {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const [loading, setLoading] = useState(false)
    const [selectedSlots, setSelectedSlots] = useState([]);

    const handleSlotChange = (day, slot) => {
        const slotId = `${day}-${slot}`;

        if (selectedSlots.includes(slotId)) {
            setSelectedSlots(selectedSlots.filter((selectedSlot) => selectedSlot !== slotId));
        } else {
            setSelectedSlots([...selectedSlots, slotId]);
        }
    };

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const timeSlots = [
        { id: 1, time: 'Slot 1' },
        { id: 2, time: 'Slot 2' },
        { id: 3, time: 'Slot 3' },
        { id: 4, time: 'Break' },
        { id: 5, time: 'Slot 4' },
        { id: 6, time: 'Slot 5' },
        { id: 7, time: 'Slot 6' },
    ];

    const DayScheduleSchema = {
        day: '',
        busy_1: false,
        busy_2: false,
        busy_3: false,
        busy_4: false,
        busy_5: false,
        busy_6: false,
        busy_7: false,
        busy_8: false,
    };

    const createDaySchedule = (day) => {
        const daySchedule = { ...DayScheduleSchema };
        daySchedule.day = day;

        selectedSlots.forEach((selectedSlot) => {
            const [selectedDay, slotId] = selectedSlot.split('-');

            if (selectedDay === day) {
                daySchedule[`busy_${slotId}`] = true;
            }
        });

        return daySchedule;
    };

    const daySchedules = daysOfWeek.map((day) => createDaySchedule(day));

    const onSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        await delay(500);
        console.log(daySchedules);
        setDaySchedules(daySchedules)
        setStepTrack(5)
    }


    return (
        <div>
            <div className="registerBox-four">
                <div className="interestsHeading">Your Univeristy Schedule to plan meetups</div>
                <div className="interestsSubHeading">Tell us your university schedule so we can plan your meetups with new friends.
                    <br />Your schedule <b>will remain private</b> should you wish to not share it.</div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            {daysOfWeek.map((day) => (<th key={day}>{day}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {timeSlots.map((slot) => (
                            <tr key={slot.id}>
                                <td>{slot.time}</td>
                                {daysOfWeek.map((day) => (
                                    <td key={day}>
                                        <input
                                            type="checkbox"
                                            className='checkboxSlot'
                                            checked={selectedSlots.includes(`${day}-${slot.id}`)}
                                            onChange={() => handleSlotChange(day, slot.id)}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="registerButton" onClick={onSubmit}>{loading ? <CircularProgress color='inherit' /> : "Next"}</button>
            </div>
        </div>
    )
}
export default StepFour