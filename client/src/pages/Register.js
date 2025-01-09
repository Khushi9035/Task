import axios from 'axios';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/register', formData);
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Register</h2>
      <FormInput
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <FormInput
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormInput
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <Button text="Register" type="submit" />
    </form>
  );
};

export default Register;