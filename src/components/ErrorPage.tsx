import { Link } from "react-router";
import { useRouteError, isRouteErrorResponse } from 'react-router';

const ErrorPage: React.FC = () => {
  const error = useRouteError()
  let errorMessage: string;
  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-[36px] font-bold text-red-500">Sorry, an unexpected error has occurred.</h1>
      <p className="text-[30px]  font-light mb-8 mt-4">
        Oops! {" "}
        {errorMessage}
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
