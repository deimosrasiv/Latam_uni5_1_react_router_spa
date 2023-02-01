export default function Home() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div className="carousel-inner" align="center">
        <div className="carousel-item active">
          <img
            src="../public/comer-postres-ricos.avif"
            className="d-block w-100 imgHome "
            alt="Imagen promocional de Tortas-01"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="textcarousel">
              Los postres son el cuento de hadas de la cocina,
            </h5>
            <h5 className="textcarousel"> un final feliz luego de la cena</h5>
            <h6></h6>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="../public/pay-manzana-fresa.avif"
            className="d-block w-100 imgHome"
            alt="Imagen promocional de Tortas-02"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="textcarousel">
              Una comida sin postre es como un traje sin corbata
            </h5>
            <p></p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="../public/pay-zanahoria.avif"
            className="d-block w-100 imgHome"
            alt="Imagen promocional de Tortas-03"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="textcarousel">
              Las tortas son como los libros: hay libros nuevos que quieres leer
            </h5>
            <h5 className="textcarousel">
              y hay otros viejos que quieres volver a leer
            </h5>
            <p></p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="../public/postre-casero-pay.avif"
            className="d-block w-100 imgHome"
            alt="Imagen promocional de Tortas-03"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="textcarousel">
              Las tortas son especiales. Cada cumpleaños, cada celebración{" "}
            </h5>
            <h5 className="textcarousel">
              termina con algo dulce: una torta que la gente recordará”
            </h5>
            <p></p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="../public/frases-postres-caseros.avif"
            className="d-block w-100 imgHome"
            alt="Imagen promocional de Tortas-03"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="textcarousel">
              Los pasteles son especiales. Cada cumpleaños, cada celebración
            </h5>
            <h5 className="textcarousel">
              {" "}
              termina con algo dulce y recordable
            </h5>
            <p></p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
