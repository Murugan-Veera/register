/*export default async function getData() {
  const response = await fetch('https://register-git-main-murugan-veeras-projects.vercel.app/api/fetchData');
  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    console.error('Failed to fetch data');
  }
}

*/

// api/getdata.js

export default async function handler(req, res) {
  const RETOOL_API_URL = 'https://register-git-main-murugan-veeras-projects.vercel.app/api/fetchData'; // Replace with your actual Retool API endpoint
  const RETOOL_API_KEY = process.env.RETOOL_API_KEY; // Set this in Vercel's environment variables

  try {
    const response = await fetch(RETOOL_API_URL, {
      headers: {
        'Authorization': `Bearer ${RETOOL_API_KEY}`, // If API key is required
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ message: 'Failed to fetch data' });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}




/*export default async function handler(req, res) {
  const  RETOOL_API_KEY  = "retool_wk_7b49627308bb4c5a97f63fd4cec27370";

  if (!RETOOL_API_KEY) {
    res.status(500).json({ message: 'RETOOL_API_KEY is not set' });
    return;
  }

  const response = await fetch('https://api.retool.com/v1/workflows/6c5f2d04-a8a7-4547-b3f7-8dcb865e4bf8/startTrigger', {
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
*/
