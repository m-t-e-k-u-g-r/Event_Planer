import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
/* import './css/mvp.css'; */
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import EventHome from "./components/EventHome";
import EventExamples from "./components/EventExamples.jsx";

/**
 * App component
 * @author Peter Rutschmann
 * @returns {Element}
 * @constructor
 */

function App() {
    const [events, setEvents] = useState([]);

    return (
        <BrowserRouter>
            <h1>Event-Planer</h1>
            <div style={{padding: "20px", fontFamily: "Arial, sans-serif"}}>
                <nav>
                    <Link to="/components/EventHome">Home</Link> |{" "}
                    <Link to="/components/EventList">Events</Link> |{" "}
                    <Link to="/components/EventForm">Event erfassen</Link> |{" "}
                    <Link to="/components/EventExamples">Ideen</Link>
                </nav>
                <Routes>
                    <Route path="/components/EventHome" element={<EventHome/>}/>
                    <Route path="/components/EventList" element={<EventList events={events}/>}/>
                    <Route path="/components/EventForm" element={<EventForm/>}/>
                    <Route path="/components/EventExamples" element={<EventExamples/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;