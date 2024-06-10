export default async function getData() {
  const response = await fetch('https://register-git-main-murugan-veeras-projects.vercel.app/getdata');
  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    console.error('Failed to fetch data');
  }
}

getData();
