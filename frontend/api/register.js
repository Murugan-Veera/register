// functions/api/register.js
export async function onRequest(context) {
    const { request } = context;
  
    if (request.method === 'POST') {
      const data = await request.json();
  
      // Here you can save the data to a database or KV storage.
      // For this example, we'll just log the data to the console.
      console.log('Received data:', data);
  
      return new Response(JSON.stringify({ message: 'Registration successful' }), {
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response('Method not allowed', { status: 405 });
    }
  }
  