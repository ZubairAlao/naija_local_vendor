import { Link } from 'react-router'
import RegisterForm from '@/features/auth/components/RegisterForm'

const RegisterPage = () => {
  return (
    <div className='mt-40 min-h-screen px-8 text-textPrimary'>
      <div className="text-center mb-8">
        <h1 className="h3 font-bold text-primary">Create Your Account</h1>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-primary font-semibold hover:underline">
            Log in
          </Link>
        </p>
      </div>
      <div className="max-w-4xl mx-auto bg-lightGray p-12 rounded-md shadow-md">
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage
