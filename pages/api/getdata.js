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


export default async function handler(req, res) {
  // Replace this URL with your Retool API or any other API you're trying to fetch data from
  const API_URL = 'https://register-git-main-murugan-veeras-projects.vercel.app/api/fetchData';

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      return res.status(response.status).json({ message: 'Failed to fetch data' });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}
