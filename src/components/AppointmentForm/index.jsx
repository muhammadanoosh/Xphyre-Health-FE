import React, { useState } from 'react';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import { states } from '../../Constants/constants';
import Modal from '../Modal/Modal';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    state: '',
    monthlyCollections: '',
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
    } else {
      setFormData({ ...formData, [name]: value });
      if (name === 'email') validateEmail(value);
      if (name === 'state') validateState(value);
    }
  };

  const handlePhoneNumChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = formatPhoneNumber(value);
    setFormData({ ...formData, [name]: formattedValue });
    validatePhoneNumber(formattedValue);
  };

  const validateName = (field, value) => {
    if (!value.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: 'This field is required.' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address.' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^\+1 \(\d{3}\)-\d{3}-\d{4}$/;
    if (!regex.test(phoneNumber)) {
      setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: 'Invalid phone number format. Use +1 (xxx)-xxx-xxxx' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: '' }));
    }
  };

  const validateState = (state) => {
    if (!state) {
      setErrors((prevErrors) => ({ ...prevErrors, state: 'This field is required.' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, state: '' }));
    }
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

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    const { fullname, email, phoneNumber, state } = formData;

    if (!fullname.split(' ')[0] || !fullname.split(' ')[1]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: !fullname.split(' ')[0] ? 'This field is required.' : '',
        lastName: !fullname.split(' ')[1] ? 'This field is required.' : '',
      }));
      valid = false;
    }

    validateEmail(email);
    validatePhoneNumber(phoneNumber);
    validateState(state);

    for (const error in errors) {
      if (errors[error]) {
        valid = false;
        break;
      }
    }

    if (valid) {
      axios.post('https://xphyre-health-be.netlify.app/.netlify/functions/api/send_email', {
        // http://localhost:5000/api/send_email
        // https://xphyre-health-be.netlify.app/.netlify/functions/api/send_email
        ...formData,
        fullname: `${formData.fullname.split(' ')[0]} ${formData.fullname.split(' ')[1] || ''}`,
      })
      .then(response => {
        setModal({ visible: true, message: response.data.message || 'Thankyou for your details our team will contact you as soon as possible'});
      })
      .catch(error => {
        setModal({ visible: true, message: 'An error occurred. Please try again.' });
        console.error(error);
      });
    }
  };

  const closeModal = () => {
    setModal({ ...modal, visible: false });
  };
  return (
    <>
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">First Name</label>
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
          <label className="cs_input_label cs_heading_color">Last Name</label>
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
          <label className="cs_input_label cs_heading_color">Email</label>
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
          <label className="cs_input_label cs_heading_color">Phone Number</label>
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
          <label className="cs_input_label cs_heading_color">State</label>
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
          <label className="cs_input_label cs_heading_color">Monthly Collections</label>
          <input
            type="text"
            className="cs_form_field"
            placeholder="Monthly Collections (Optional)"
            name="monthlyCollections"
            value={formData.monthlyCollections}
            onChange={handleChange}
          />
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
