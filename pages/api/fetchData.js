export default async function handler(req, res) {
    const { RETOOL_API_KEY } = process.env;
  
    if (!RETOOL_API_KEY) {
      res.status(500).json({ message: 'RETOOL_API_KEY is not set' });
      return;
    }
  
    const response = await fetch('https://email2murugan.retool.com/workflows/5c7a09d4-af1d-4df9-b3ce-4aa928b63251', {
      headers: {
        'Authorization': `Bearer ${RETOOL_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
  
    if (!response.ok) {
      res.status(response.status).json({ message: 'Failed to fetch data' });
      return;
    }
  
    const data = await response.json();
    res.status(200).json(data);
  }
  