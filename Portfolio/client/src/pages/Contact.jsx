import React, { useState } from 'react';
import Header from '../components/header/header';
import '../components/header/css/Header.css';
import '../pagescss/profile.css';


const Contact = () => {
  const [formData, setFormData] = useState({

    email: '',
    phone: '',
    message: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
};

return (
  
    <div>
      <Header />
      <div class = "formContainer">
        <h1>Contact Form</h1>
        <form id="contact_form" name="contact_form" onSubmit={handleSubmit}>
            <div className="mb-5 row">
                <div className="col">
                    <label>Email address</label>
                    <input type="email" required maxLength="50" className="form-control" id="email_addr" name="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} />
                </div>
                <div className="col">
                    <label>Phone</label>
                    <input type="tel" required maxLength="50" className="form-control" id="phone_input" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                </div>
            </div>
            <div className="mb-5">
                <label>Message</label>
                <textarea className="form-control" id="message" name="message" rows="5" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary px-4 btn-lg">Post</button>
        </form>
        </div>
    </div>
);
};

export default Contact;