import oldPc from '../assets/old-pc.gif';
export default function NavBar() {
    return (
        <>
            <nav className="info-pag" id="nav">
                <img src={oldPc} className="pc-logo" />
                <h1 className="titulo-pagina-nav">Mini Inventario</h1>
                <button className="github-link-btn">
                    <a
                        href="https://github.com/kiwig0dd/practica-react"
                        id="btn-github"
                    >
                        Visite el Repo c:
                    </a>
                </button>
            </nav>
        </>
    );
}
