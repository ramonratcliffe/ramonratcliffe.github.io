// eslint-disable-next-line react/prop-types
export const DetailSection = ({ id, title, children }) => {
  return (
    <section id={id} className="text-gray-600 text-center p-4 mt-9 border-t-2"> {/* Tailwind classes for color, centering, and padding */}
      <h2 className="text-2xl font-bold mb-4 pb-2" >{title}</h2> {/* Tailwind classes for font size, weight, and margin */}
      <div className="text-lg"> {/* Tailwind class for text size */}
        {children}
      </div>
    </section>
  )
}
