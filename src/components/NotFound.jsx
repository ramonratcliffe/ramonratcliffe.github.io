export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-blue-800">404</h1>
       <a
        href="/"
        className="mt-6 px-4 py-2 font-semibold rounded shadow-md hover:bg-blue-700 transition"
      >
        Go to Homepage / Volver al inicio
      </a>
      <p className="text-xl text-gray-700 mt-4">
        Sorry, sometimes our page is a bit funky. If the return button doesn't work, please going back to whatapp and clicking the link again
      </p>
      <p className="text-xl text-gray-700 mt-4">
        Perdón, a veces la página hace cosas raritas. Si no funciona el botón de volver, intenta volver a whatsapp y clickear el enlace de nuevo.
      </p>

     
    </div>
  );
};

export default NotFound;
