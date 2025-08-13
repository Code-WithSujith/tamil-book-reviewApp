import image from "../assets/image.png";

export function Header() {
  return (
    <header className="container-fluid bg-dark text-white py-2">
      <div className="row align-items-center">
        <div className="col-1 text-center border-end fw-bold fs-4">
          New News
        </div>

        <div className="col-4 ps-4 fs-5">
          <small className="text-warning me-2">15/08/2025</small>
          Scientists Discover New Planet in Orbit – 2025
        </div>

        <div className="col-5">
          <div className="border rounded overflow-hidden">
            <img
              src={image}
              alt="image"
              className="w-100 bg-light"
              style={{
                // backgroundColor: "#f8f9fa", // Bootstrap's light color
                display: "block" // removes small gaps under image
              }}
            />
          </div>
        </div>

        {/* <div className="col-5">
          <div className="p-3 border bg-light text-dark rounded">
            <p className="mb-0 fw-semibold">
              News / Magazine / Bold Responsive Retina HTML Theme
            </p>
            <img src={image} alt="image"/>
          </div>
        </div> */}
      </div>
    </header>
  );
}
