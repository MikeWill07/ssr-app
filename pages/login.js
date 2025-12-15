import { useState } from 'react';
import { useRouter } from 'next/router';
import { findUser } from '../lib/users';
import cookie from 'cookie';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = findUser(email, password);
    if (!user) {
      alert('Usuário ou senha inválidos');
      return;
    }

    document.cookie = cookie.serialize('auth', email, { path: '/' });
    router.push('/dashboard');
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}