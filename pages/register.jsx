import { useState } from 'react';
//export const runtime = 'experimental-edge';


export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send form data to API endpoint (to be created)
    const response = await fetch('https://worker-nameless-wildflower-3a34.kkdgantester.workers.dev/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
  
    //console.log(response);
    const data = await response.json();
  if (response.ok) {
    setMessage(data.message);
  } else {
    setMessage('Registration failed: ' + data.message);
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
      </form>
    </div>
  );
}
