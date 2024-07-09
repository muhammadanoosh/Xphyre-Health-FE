import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { states } from '../../Constants/constants';


export default function AppointmentForm() {
  return (
    <form action="#" className="row">
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">First Name</label>
        <input type="text" className="cs_form_field" placeholder="David" />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Last Name</label>
        <input type="text" className="cs_form_field" placeholder="John" />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Email</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="example@gmail.com"
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Phone Number</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="(123) 456 - 789"
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">State</label>
        <select className="cs_form_field">
          {states.map((state) => (
            <option key={state.value} value={state.value}>
              {state.name}
            </option>
          ))}
        </select>
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Monthly Collections</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="Monthly Collections (Optional)"
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-12">
        <button className="cs_btn cs_style_1">
          <span>Submit</span>
          <i>
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
          </i>
        </button>
      </div>
    </form>
  );
}
