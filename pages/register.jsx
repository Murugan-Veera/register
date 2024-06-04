import { useState } from 'react';
export const runtime = 'experimental-edge';


export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send form data to API endpoint (to be created)
    //const response = await fetch('https://f0182807.register-backend.pages.dev/api/register/', {
    
  
    try {
       //const response = await fetch('api/register/', {
        const response = await fetch('https://96f19c5e.register-backend.pages.dev/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage('Registration failed: ' + data.message);
      }
    } catch (error) {
      setMessage('An error occurred: ' + error.message);
    }


  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit" style={{ marginTop: '20px' }}>Register</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}
