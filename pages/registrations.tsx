import { useEffect, useState } from 'react';

export default function Registrations() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const fetchRegistrations = async () => {
      const response = await fetch('https://f0182807.register-backend.pages.dev/api/get-registrations');
      //const response = await fetch('api/get-registrations/');
      const data = await response.json();
      setRegistrations(data);
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
