import { useEffect, useState } from 'react';

export default function Registrations() {
  const [registrations, setRegistrations] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await fetch('https://96f19c5e.register-backend.pages.dev/api/get-registrations');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRegistrations(data);
      } catch (error) {
        console.error('Failed to fetch registrations:', error);
        setError('Failed to fetch registrations. Please try again later.');

      }
    };

    fetchRegistrations();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Registrations</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {registrations.map((registration, index) => (
            <li key={index}>
              <strong>Name:</strong> {registration}, <strong>Email:</strong> {registration}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
