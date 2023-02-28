import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario's birthday", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
  ]);

  console.log(showModal);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  const subtitle = "All the latest events in mario kingdom";

  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={subtitle} />
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide event</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show event</button>
        </div>
      )}

      {showEvents && <EventList events = {events} handleClick = {handleClick} />}
      {/* {showEvents &&
        events.map((event) => (
          <React.Fragment key={event.id}>
            <h2>{event.title}</h2>
            <button onClick={() => handleClick(event.id)}>Delete Event</button>
          </React.Fragment>
        ))} */}
      <br />
      <button onClick={handleShow}>show modal</button>
      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={true}>
          <h2>Terms and Condition</h2>
          <p>
            Excepteur culpa consequat nostrud ex in tempor commodo enim dolore
            aute mollit nulla sint velit. Ex sunt nulla ex ipsum esse
            exercitation ut aute mollit nulla cillum. Commodo aliquip tempor est
            duis voluptate sunt laboris. Qui amet labore ipsum laborum aliquip
            reprehenderit dolor aliqua ex do. Sit pariatur sit eiusmod dolore
            eiusmod voluptate sunt cillum Lorem qui quis laboris.
          </p>
        </Modal>
      )}
    </div>
  );
}

export default App;
