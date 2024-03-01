import "./page.scss";
import Link from 'next/link'
import HomePublishers from "./features/publishers/components/HomePublishers/HomePublishers";

export default function Home() {


  return (
    <main>
      <div>
        <div className="home__banner" role="img" aria-label="Banner FILBo" />
      </div>
      <div className="home__content-container">
      <section className="home__seventeen">
        <div className="home__plan">Plano de Corferias</div>
        <article className="home__seventeen-content">
          <div className="home__seventeen-copy">
            <p>
              Visita el pabellón más diverso de la feria. El pabellón 17 alberga
              lo mejor de las editoriales independientes.
            </p>
            <button type="button" className="home__seventeen-button">
              Visita el plano interactivo del pabellón 17
            </button>
          </div>
        </article>
      </section>
      <section className="home__publishers">
        <h2 className="home__publishers-title">Editoriales independientes</h2>
        <HomePublishers />
        <Link 
        href="/editoriales"
        className="home__publishers-all"
        >
          Ver todas las editoriales
          </Link>
      </section>
      <section className="home__books">
        <h2>Libros destacados</h2>
        <p className="placeholder">Listado de libros destacados</p>
      </section>
      </div>
    </main>
  );
}
