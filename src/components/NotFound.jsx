const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-blue-800">404</h1>
      <p className="text-xl text-gray-700 mt-4">
        Sorry, sometimes my page is a bit funky. Please going back to whatapp and clicking the link again
      </p>
      <p className="text-xl text-gray-700 mt-4">
        Perdón, a veces la página hace cosas raritas. Intenta volver a whatsapp y clickear el enlace de nuevo.
      </p>
      <p className="text-gray-600 mt-2">If that doesn’t work let us know.</p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-blue-800 text-white font-semibold rounded shadow-md hover:bg-blue-700 transition"
      >
        Go to Homepage
      </a>
    </div>
  );
};

export default NotFound;
