import React from "react";

const Application = () => {
  return (
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="job_location">Job Location</label>
          <select id="job_location">
            <option value="">Select location</option>
            <option value="PN">Pune</option>
            <option value="HYD">Hyderabad</option>
          </select>
        </div>
        <input type="checkbox" />
        Agree termsand conditions
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
  );
};

export default Application;
