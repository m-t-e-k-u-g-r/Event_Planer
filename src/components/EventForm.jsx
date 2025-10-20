import React, { useState } from "react";

/**
 * EventForm component
 * @author Peter Rutschmann
 * @param onAddEvent
 * @returns {Element}
 */
function EventForm({onAddEvent}) {
    const [eventName, setEventName] = useState("");
    const [eventType, setEventType] = useState("Meeting");
    const [isPublic, setIsPublic] = useState(false);
    const [participantCount, setParticipantCount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = {
            name: eventName,
            type: eventType,
            public: isPublic,
            participants: participantCount,
        };
        onAddEvent(newEvent);
        setEventName("");
        setEventType("Meeting");
        setIsPublic(false);
        setParticipantCount("");
    };

    return (
        <>
            <h2>Event erfassen</h2>
            <form onSubmit={handleSubmit} style={{marginBottom: "20px"}}>
                <div className="ps-5">
                    <label>Veranstaltungsname: </label>
                    <input
                        type="text"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        required
                        className="form-control"
                    />
                </div>
                <div className="ps-5">
                    <label>Typ: </label>
                    <select value={eventType} onChange={(e) => setEventType(e.target.value)} className="form-select">
                        <option value="Meeting">Meeting</option>
                        <option value="Party">Party</option>
                        <option value="Workshop">Workshop</option>
                    </select>
                </div>
                <div className="ps-5 my-3">
                    <label>
                        Öffentlich:
                        <input
                            type="checkbox"
                            checked={isPublic}
                            onChange={(e) => setIsPublic(e.target.checked)}
                        />
                    </label>
                </div>
                <div className="ps-5">
                    <label>Teilnehmeranzahl: </label>
                    <input
                        type="number"
                        value={participantCount}
                        onChange={(e) => setParticipantCount(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="ms-5 p-2 mt-2 bg-primary border-0 rounded text-white">Hinzufügen</button>
            </form>
        </>
    );
};

export default EventForm;