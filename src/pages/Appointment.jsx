import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUser, faVenusMars, faPhone, faCalendar, faMapMarkerAlt, faEnvelope, faListUl } from '@fortawesome/free-solid-svg-icons';


const Appointment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'Male',
    phone: '',
    dob: '',
    address: {
      dNumber: '',
      st: '',
      cty: '',
      drt: '',
      pcode: '',
      ste: '',
    },
    email: '',
    previouslyAttended: false,
    previousCondition: '',
    appointmentTypes: {
      cCheckup: false,
      hCheckup: false,
      eCheckup: false,
      hCheckup: false,
    },
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? { ...prevData[name], [value]: checked } : value,
    }));

    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Invalid phone number';
    }

    if (!formData.dob.trim()) {
      errors.dob = 'Date of birth is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);
      console.log('Form data submitted:', formData);
    } else {
      alert('Please fill out all required fields correctly');
    }
  };
  

  const handleCloseModal = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="appointment-form-container">
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', textAlign: 'left', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <h1 style={{ color: '#333', fontSize: '24px', marginBottom: '20px' }}>Service Booking</h1>

      <div style={{ marginBottom: '15px' }}>
        <label>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
          Name*:
        </label>
        <div style={{ display: 'flex', gap: '5px' }}>
          <input
            type="text"
            name="firstName"
            placeholder="Firstname"
            value={formData.firstName}
            onChange={handleChange}
            style={{ flex: '1', padding: '8px' }}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Lastname"
            value={formData.lastName}
            onChange={handleChange}
            style={{ flex: '1', padding: '8px' }}
          />
        </div>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>
          <FontAwesomeIcon icon={faVenusMars} style={{ marginRight: '5px' }} />
          Gender*:
        </label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px' }}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Transgender">Transgender</option>
        </select>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
          Phone:
        </label>
        <input
          type="number"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>
          <FontAwesomeIcon icon={faCalendar} style={{ marginRight: '5px' }} />
          Date of Birth*:
        </label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>
          <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '5px' }} />
          Address:
        </label>
        <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
          <input
            type="text"
            name="doorNumber"
            placeholder="Door Number"
            value={formData.address.doorNumber}
            onChange={handleChange}
            style={{ flex: '1', padding: '8px' }}
          />
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={formData.address.street}
            onChange={handleChange}
            style={{ flex: '1', padding: '8px' }}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.address.city}
            onChange={handleChange}
            style={{ flex: '1', padding: '8px' }}
          />
          <input
            type="text"
            name="district"
            placeholder="District"
            value={formData.address.district}
            onChange={handleChange}
            style={{ flex: '1', padding: '8px' }}
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.address.pincode}
            onChange={handleChange}
            style={{ flex: '1', padding: '8px' }}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.address.state}
            onChange={handleChange}
            style={{ flex: '1', padding: '8px' }}
          />
        </div>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
          Email:
        </label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>
          <FontAwesomeIcon icon={faListUl} style={{ marginRight: '5px' }} />
         
        </label>
        <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
          <input
            type="radio"
            name="previouslyAttended"
            value="Yes"
            checked={formData.previouslyAttended === 'Yes'}
            onChange={handleChange}
          />
          <span>Yes</span>
          <input
            type="radio"
            name="previouslyAttended"
            value="No"
            checked={formData.previouslyAttended === 'No'}
            onChange={handleChange}
          />
          <span>No</span>
        </div>
      </div>

      {formData.previouslyAttended === 'Yes' && (
        <div style={{ marginBottom: '15px' }}>
          <label>
            If yes,Provide your Vehicle details !
          </label>
          <input
            type="text"
            name="previousCondition"
            value={formData.previousCondition}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
      )}

      <div style={{ fontSize: '20px', marginBottom: '10px' }}>Service Type:</div>
      <p>Select which a service type you require:-</p>
      <label style={{ display: 'block', marginBottom: '5px' }}>
        <input
          type="checkbox"
          name="Waterwash"
          checked={formData.appointmentTypes.Waterwash}
          onChange={handleChange}
        />
       WaterWash
      </label>
      <label style={{ display: 'block', marginBottom: '5px' }}>
        <input
          type="checkbox"
          name="Extensive brake inspection"
          checked={formData.appointmentTypes.Extensivebrakeinspection}
          onChange={handleChange}
        />
      Extensive brake inspection
      </label>
      <label style={{ display: 'block', marginBottom: '5px' }}>
        <input
          type="checkbox"
          name="FuelFilter"
          checked={formData.appointmentTypes.FuelFilter}
          onChange={handleChange}
        />
       FuelFilter
      </label>
      <label style={{ display: 'block', marginBottom: '5px' }}>
        <input
          type="checkbox"
          name="AirFilterChange"
          checked={formData.appointmentTypes.AirFilterChange}
          onChange={handleChange}
        />
        Air Filter Change
      </label>
      <br />

      <center>
          <button
            type="submit"
            style={{
              fontSize: '16px',
              padding: '10px 20px',
              background: '#FF69B4',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '5px' }} /> Send
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(255, 255, 255, 0.3)',
                zIndex: -1,
                transform: 'translateX(-100%)',
                transition: 'transform 0.3s ease',
              }}
            ></div>
          </button>
        </center>

        {/* Form validation errors */}
        <div className="error-messages">
          {Object.values(formErrors).map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      </form>

      {/* Confirmation Modal */}
     {/* Confirmation Modal */}
     <center>
      
     {isSubmitted && (
        <div className="confirmation-modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <p>Your appointment is booked with the following details:</p>
            <ul>
              <li>Name: {formData.firstName} {formData.lastName}</li>
              <li>Email: {formData.email}</li>
              <li>Phone: {formData.phone}</li>
              {/* Add more details as needed */}
            </ul>
            <p>Your appointment details will be provided upon confirmation.</p>
          </div>
        </div>
      )}

    </center>
    </div>
  );
};

export default Appointment;