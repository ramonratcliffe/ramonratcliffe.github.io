export const HorizontalScrollContainer = ({ children }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap p-2">
      <div className="inline-flex space-x-4">{children}</div>
    </div>
  );
}