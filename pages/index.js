import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo</h1>
      <Link href="/register">Registrar</Link> | <Link href="/login">Login</Link>
    </div>
  )
}