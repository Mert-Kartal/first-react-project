export function HeroSection() {
  return (
    <>
      <div className="mt-5">
        <div className="mt-3 bg-secondary-subtle rounded-2 pt-5">
          <h1 className="text-center fw-bold display-5 mt-5">
            A warm welcome!
          </h1>
          <div style={{ maxWidth: 1000 }} className="mx-auto px-3">
            <p className="text-center fs-4 ">
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?
            </p>
          </div>
          <div className="d-flex justify-content-center mt-3 pb-5">
            <button className="btn btn-primary text-white mt-3 mb-4 fs-5 py-2 px-4">
              Call to Action!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
