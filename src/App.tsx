import { useState, useEffect } from 'react';
import Bienvenida from './components/Bienvenida';
import NavBar from './components/Nav';

export function App() {
    interface Item {
        id: number;
        nombre: string;
        descripcion: string;
        valor: string | number;
        rareza: 'Comun' | 'Raro' | 'Epico' | 'Legendario';
    }

    let inventarioDataBase: Item[] = [
        {
            id: Date.now(),
            nombre: 'Piedra',
            descripcion: 'Es solo una piedra normal. Nada relevante.',
            valor: 0,
            rareza: 'Comun',
        },
        {
            id: Date.now() + 1,
            nombre: 'Agua',
            descripcion: 'Un liquido mágico que no hace absolutamente nada.',
            valor: 0,
            rareza: 'Comun',
        },
        {
            id: Date.now() + 2,
            nombre: 'Ak-47',
            descripcion: 'Es un arma, dispara.',
            valor: 1000,
            rareza: 'Legendario',
        },
    ];
    const [mostrarBienvenida, setMostrarBienvenida] = useState<boolean>(false);
    useEffect(() => {
        setMostrarBienvenida(true);
    }, []);

    const [count, setCount] = useState<number>(1);

    return (
        <>
            {mostrarBienvenida && (
                <Bienvenida
                    cerrarModal={() => setMostrarBienvenida(false)}
                    idk={() => {
                        setCount(count + 1);
                        if (count < 10) {
                            console.clear();
                            console.log(
                                `Has clickeado esto ${count} veces ¿Por qué?`,
                            );
                        } else if (count >= 10 && count < 20) {
                            console.clear();
                            console.log(
                                `Has clickeado esto ${count} veces. ¿Esperas un secreto?`,
                            );
                        } else {
                            const interval = setInterval(() => {
                                console.error('Puto');
                            }, 0);
                            setTimeout(() => {
                                clearInterval(interval);
                                setMostrarBienvenida(false);
                                console.clear();
                            }, 500);
                        }
                    }}
                />
            )}
            <NavBar />
        </>
    );
}

export default App;
