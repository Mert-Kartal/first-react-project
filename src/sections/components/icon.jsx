export function Icon({ name, size = 4 }) {
  return (
    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3 p-4">
      <i className={`bi bi-${name}`} style={{ fontSize: `${size}rem` }}></i>
    </div>
  );
}
