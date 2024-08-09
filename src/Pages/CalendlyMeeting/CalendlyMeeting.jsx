import React from "react";
import { PopupWidget } from "react-calendly";

function CalendlyMeeting() {
  return (
    <div className="min-h-screen py-5">
      <h1 className="text-4xl font-bold mb-6 text-center">Calendly</h1>
      <h2 className="text-2xl font-bold mb-6 text-center">
        Service Intergration
      </h2>
      <br />
      <br />
      <br />
      <p className="text-center">
        Click on the Popup Widget Floating on the right bottom of page to
        schedule the meeting
      </p>
      <PopupWidget
        url="https://calendly.com/rohaannadeem2"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      />
    </div>
  );
}

export default CalendlyMeeting;
