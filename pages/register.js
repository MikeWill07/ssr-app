import { useState } from 'react';
import { useRouter } from 'next/router';
import { addUser, findUserByEmail } from '../lib/users';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (findUserByEmail(email)) {
      alert('Usuário já existe!');
      return;
    }
    addUser({ email, password });
    router.push('/login');
  }

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Registrar</button>
      </form>
    </div>
  )
}