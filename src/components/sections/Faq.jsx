// eslint-disable-next-line react/prop-types
export const Faq = ({ title, description }) => {
  return (
    <div className="faq text-neutral-800 p-4 mb-6 border-b border-neutral-300"> {/* Tailwind classes for text color, padding, margin, and border */}
      <h3 className="title text-xl font-semibold mb-2">{title}</h3> {/* Tailwind classes for font size, weight, and margin */}
      <p className="description text-lg leading-relaxed">{description}</p> {/* Tailwind classes for font size and line height */}
    </div>
  );
};
