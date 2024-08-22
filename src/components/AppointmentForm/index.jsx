import React, { useState, forwardRef } from 'react';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import { states, monthlyCollections } from '../../Constants/constants';
import Modal from '../Modal/Modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setHours, setMinutes } from 'date-fns';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    state: '',
    monthlyCollections: '',
    datetime: '',
    time: null,
    date: null,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });
  const [modal, setModal] = useState({ visible: false, message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'firstName' || name === 'lastName') {
      setFormData((prevFormData) => {
        const [first, last] = prevFormData.fullname.split(' ');
        return {
          ...prevFormData,
          fullname: `${name === 'firstName' ? value : first} ${name === 'lastName' ? value : last || ''}`
        };
      });
      validateName(name, value);
      clearError(name);
    } else {
      setFormData({ ...formData, [name]: value });

      if (name === 'email') validateEmail(value);
      if (name === 'state') validateState(value);
      clearError(name);
    }
  };

  const handlePhoneNumChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = formatPhoneNumber(value);
    setFormData({ ...formData, [name]: formattedValue });
    validatePhoneNumber(formattedValue);
    clearError(name);
  };

  const handleDateChange = (selectedDate) => {
    const date = selectedDate.toLocaleDateString(); // Extract date
    const time = selectedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Extract time

    // Update the form data
    setFormData({
      ...formData,
      date: date,
      time: time,
      datetime: selectedDate
    });

    clearError('datetime');
  };

  const handleMonthlyCollectionChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    clearError(name);
  };

  const validateName = (name) => {
    return name && name.trim() !== '';
  };

  const validateDatetime = (datetime) => {
    return datetime !== '';
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^\+1 \(\d{3}\)-\d{3}-\d{4}$/;
    return regex.test(phoneNumber);
  };

  const validateState = (state) => {
    return state && state.trim() !== '';
  };

  const validateMonthlyCollections = (monthlyCollections) => {
    // Implement the validation logic for monthlyCollections if needed
    return true; // Adjust according to your validation logic
  };

  const validateForm = (formData) => {
    const { fullname, email, phoneNumber, state, datetime, monthlyCollections } = formData;

    let valid = true;
    let errors = {};

    // Split full name into first and last name
    const [firstName, lastName] = fullname.split(' ');

    // Validate full name
    if (!validateName(firstName)) {
      errors.firstName = 'First name is required';
      valid = false;
    }
    if (!validateName(lastName)) {
      errors.lastName = 'Last name is required';
      valid = false;
    }

    // Validate email
    if (!validateEmail(email)) {
      errors.email = 'Invalid email address.';
      valid = false;
    }

    // Validate phone number
    if (!validatePhoneNumber(phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number format. Use +1 (xxx)-xxx-xxxx';
      valid = false;
    }

    // Validate state
    if (!validateState(state)) {
      errors.state = 'This field is required.';
      valid = false;
    }

    // Validate datetime
    if (!validateDatetime(datetime)) {
      errors.datetime = 'Date and time is required';
      valid = false;
    }

    // Validate monthly collections (if applicable)
    if (monthlyCollections !== undefined && !validateMonthlyCollections(monthlyCollections)) {
      errors.monthlyCollections = 'Invalid monthly collections';
      valid = false;
    }
    setErrors(errors);
    return valid;
  };

  const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    if (cleaned.length === 10) {
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        return `+1 (${match[1]})-${match[2]}-${match[3]}`;
      }
    }
    return phoneNumber;
  };

  const clearError = (fieldName) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: '', // Clear the specific field error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = validateForm(formData);

    if (isValid) {
      axios.post('https://xphyre-health-be.netlify.app/.netlify/functions/api/send_email', {
        // http://localhost:5000/api/send_email
        // https://xphyre-health-be.netlify.app/.netlify/functions/api/send_email
        ...formData,
        fullname: `${formData.fullname.split(' ')[0]} ${formData.fullname.split(' ')[1] || ''}`,
      })
        .then(response => {
          setModal({ visible: true, message: response.data.message || 'Thank you for your details. Our team will contact you as soon as possible.' });
        })
        .catch(error => {
          setModal({ visible: true, message: 'An error occurred. Please try again.' });
          console.error(error);
        });
    }
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <input
      className="cs_form_field"
      onClick={onClick}
      ref={ref}
      value={value}
      placeholder="Select date and time"
      readOnly
    />
  ));

  const closeModal = () => {
    setModal({ ...modal, visible: false });
  };
  return (
    <>
        <form className="row" onSubmit={handleSubmit}>
          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">First name*</label>
            <input
              type="text"
              className="cs_form_field"
              placeholder="David"
              name="firstName"
              onChange={handleChange}
            />
            {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
            <div className="cs_height_42 cs_height_xl_25" />
          </div>
          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">Last name*</label>
            <input
              type="text"
              className="cs_form_field"
              placeholder="John"
              name="lastName"
              onChange={handleChange}
            />
            {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
            <div className="cs_height_42 cs_height_xl_25" />
          </div>
          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">Email*</label>
            <input
              type="email"
              className="cs_form_field"
              placeholder="example@gmail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            <div className="cs_height_42 cs_height_xl_25" />
          </div>
          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">Phone number*</label>
            <input
              type="text"
              className="cs_form_field"
              placeholder="(xxx)-xxx-xxxx"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handlePhoneNumChange}
            />
            {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}
            <div className="cs_height_42 cs_height_xl_25" />
          </div>
          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">State*</label>
            <select
              className="cs_form_field"
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              {states.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.name}
                </option>
              ))}
            </select>
            {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>}
            <div className="cs_height_42 cs_height_xl_25" />
          </div>
          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">Monthly collections*</label>
            <select
              className="cs_form_field"
              name="monthlyCollections"
              value={formData.monthlyCollections}
              onChange={handleMonthlyCollectionChange}
            >
              {monthlyCollections.map((monthlyCollections) => (
                <option key={monthlyCollections.value} value={monthlyCollections.value}>
                  {monthlyCollections}
                </option>
              ))}
            </select>
            {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>}
            <div className="cs_height_42 cs_height_xl_25" />
          </div>
          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">Select a suitable time*</label>
            <DatePicker
              selected={formData.datetime}
              onChange={handleDateChange}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
              timeIntervals={15} // Adjusts the time intervals to scroll through
              minDate={new Date()} // Prevents past dates
              minTime={setHours(setMinutes(new Date(), 0), 0)} // Start time limit (e.g., 00:00)
              maxTime={setHours(setMinutes(new Date(), 59), 23)} // End time limit (e.g., 23:59)
              customInput={<CustomInput />} // Use custom input with placeholder
            />
            {errors.datetime && <p style={{ color: 'red' }}>{errors.datetime}</p>}
            <div className="cs_height_42 cs_height_xl_25" />
          </div>

          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">Time zone</label>
            <input
              type="text"
              value={formData.timeZone}
              className="cs_form_field"
              placeholder="John"
              name="timeZone"
              readOnly
            />
            {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
            <div className="cs_height_42 cs_height_xl_25" />
          </div>

          <div className="col-lg-12">
            <button className="cs_btn cs_style_1" type="submit">
              <span>Submit</span>
              <i>
                <img src="/images/icons/arrow_white.svg" alt="Icon" />
                <img src="/images/icons/arrow_white.svg" alt="Icon" />
              </i>
            </button>
          </div>

        </form>

        <Modal visible={modal.visible} message={modal.message} onClose={closeModal} />
    </>


  );
}
