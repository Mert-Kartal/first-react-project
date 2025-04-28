export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">
          Copyright © Your Website {currentYear}
        </p>
      </div>
    </footer>
  );
}
