import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    document.cookie = 'auth=test-user; path=/';
    router.push('/dashboard');
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login Fake</button>
    </div>
  );
}
