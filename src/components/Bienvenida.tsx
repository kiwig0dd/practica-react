interface BienvenidaProps {
    cerrarModal: () => void;
    idk: () => void;
}
export default function Bienvenida({ cerrarModal, idk }: BienvenidaProps) {
    return (
        <div className="fondo-modal-bienvenida" id="modal-bienvenida">
            <div className="dentro-modal-bienvenida">
                <h2>Bienvenido a este Mini-Proyecto!</h2>
                <p>
                    Aqui podras interactuar con la simulación de un inventario
                    de un Videojuego, pudiendo crear, modificar, leer y eliminar
                    lo que quieras! c:
                </p>

                <button onClick={cerrarModal} className="boton-cerrar-modal">
                    Entendido
                </button>
                <button onClick={idk} className="boton-cerrar-modal">
                    Secret
                </button>
            </div>
        </div>
    );
}
