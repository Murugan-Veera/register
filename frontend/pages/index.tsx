// pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Welcome to My Registration App</h1>
      <Link href="/register">
        <a style={{ marginTop: '20px', fontSize: '20px', color: 'blue' }}>Go to Registration Page</a>
      </Link>
    </div>
  );
}
