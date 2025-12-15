import cookie from 'cookie';

export default function Dashboard({ user }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {user ? <p>Bem-vindo, {user}!</p> : <p>Usuário não autenticado</p>}
    </div>
  )
}

export async function getServerSideProps({ req }) {
  const cookies = cookie.parse(req.headers.cookie || '');
  const user = cookies.auth || null;

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return { props: { user } };
}