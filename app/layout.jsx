import "./globals.scss";
import Link from "next/link";
import Image from "next/image";
import ReduxProvider from "./redux/provider";


export const metadata = {
  title: "FILBo Independiente",
  description: "Conoce la oferta editorial de las editoriales independientes en la FILBo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ReduxProvider>
          <header className="main-header">
            <div className="main-title">
              <picture className="main-logo">
                <Link href="/">
                  <Image
                    src="filbo-logo.svg"
                    alt="Feria Internacional del Libro de Bogotá"
                    width={130}
                    height={60}
                  ></Image>
                </Link>
              </picture>

              <h1>
                <span className="main-title__filbo">FILBo</span>
                <span>Independiente</span>
              </h1>
            </div>
            <div className="main-date">17 abril al 02 mayo en Corferias</div>
          </header>
          {children}
          <footer className="main-footer">
            <p className="main-footer__logo">
              <span className="main-footer__filbo">FILBo</span>
              <span>Independiente</span>
            </p>
          </footer>
        </ReduxProvider>
      </body>
    </html>
  );
}
