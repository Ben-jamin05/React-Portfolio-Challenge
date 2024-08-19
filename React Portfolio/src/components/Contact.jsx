// src/components/Contact.jsx
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = '';

    if (!value) {
      error = `${name} is required`;
    } else if (name === 'email' && !validateEmail(value)) {
      error = 'Invalid email address';
    }

    setErrors({ ...errors, [name]: error });
  };

  return (
    <section>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && <p>{errors.message}</p>}
        </div>
      </form>
    </section>
  );
};

export default Contact;
