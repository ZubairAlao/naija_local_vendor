import LoginForm from '@/features/auth/components/LoginForm'
import { Link } from 'react-router'

const LoginPage = () => {
  return (
    <div className='mt-40 min-h-screen'>
        <div className="text-center mb-4">
          <h1 className='h3 font-bold text-primary'>Sign in to your account</h1>
          <p>Don't have an account? <Link className="text-primary font-semibold hover:underline" to={"/sign-up"}>Create one</Link></p>
        </div>
        <div className="max-w-md mx-auto bg-lightGray p-12 rounded-md">
          <LoginForm />
        </div>
    </div>
  )
}

export default LoginPage