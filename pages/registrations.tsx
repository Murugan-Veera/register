import { useEffect, useState } from 'react';

export default function Registrations() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await fetch('https://ebe30251.register-backend.pages.dev/api/get-registrations');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRegistrations(data);
      } catch (error) {
        console.error('Failed to fetch registrations:', error);
      }
    };

    fetchRegistrations();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Registrations</h1>
      <ul>
        {registrations.map((registration, index) => (
          <li key={index}>
            <strong>Name:</strong> {registration}, <strong>Email:</strong> {registration}
          </li>
        ))}
      </ul>
    </div>
  );
}
