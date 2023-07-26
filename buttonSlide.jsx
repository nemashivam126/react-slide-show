import { useEffect, useState } from "react";
import axios from "axios";

export function ButtonSlide() {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  function getProducts(url) {
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }

  useEffect(() => {
    getProducts("http://fakestoreapi.com/products");
  }, []);

  function handlePrevClick() {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  }

  function handleNextClick() {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  }

  return (
    <div className="container-fluid">
      <div
        className="box"
        style={{
          borderRadius: "20px",
          boxShadow: "3px 3px 3px black",
          height: "400px",
          width: "800px",
          margin: "auto",
          marginTop: "100px",
          border: "2px solid",
        }}
      >
        {products.length > 0 && (
          <div key={products[currentSlide].id}>
            <img
              src={products[currentSlide].image}
              alt="Images"
              height={"400px"}
              width={"500px"}
              style={{ padding: "50px", marginLeft: "140px" }}
            />
          </div>
        )}
      </div>
      <div
        className="foot d-flex"
        style={{
          margin: "auto",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="range"
          style={{ width: "800px", marginTop: "10px" }}
          min="1"
          max={products.length}
          value={currentSlide + 1}
          onChange={(e) => setCurrentSlide(parseInt(e.target.value) - 1)}
        />
        <div className="buttons mt-2">
          <button
            className="btn btn-primary me-4"
            type="button"
            onClick={handlePrevClick}
            disabled={currentSlide === 0}
          >
            <i className="bi bi-skip-backward-fill"></i> Prev
          </button>
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleNextClick}
            disabled={currentSlide === products.length - 1}
          >
            Next <i className="bi bi-fast-forward-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
