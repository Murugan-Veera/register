export default async (req, res) => {
    if (req.method === 'POST') {
      const { name, email, password } = req.body;
  
      // Here you can add code to handle the form data, such as saving it to a database
      // For this example, we'll just log it to the console
  
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
  
      res.status(200).json({ message: 'Registration successful' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  };
  