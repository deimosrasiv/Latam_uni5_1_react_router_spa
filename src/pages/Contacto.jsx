import Buttons from "../Components/buttons";

export default function Home() {
  return (
    <div className="container py-5">
      <h1 className="titlepag" align="center">
        {" "}
        Contacto
      </h1>
      <div className="card px-3 py-1">
        <div className="py-3">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Ingrese su Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Ingrese sus Comentarios
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div align="right">
            <Buttons
              colours="btn-primary"
              title="Enviar"
              size=""
              type="submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
