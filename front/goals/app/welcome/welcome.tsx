import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router";

export function Welcome() {
    const [equipo, setEquipo] = useState(null);
    const navigate = useNavigate();
    const equiposLigaMX = [
        { id: 3320, name: "Chivas" },
        { id: 3321, name: "Cruz Azul" },
        { id: 3322, name: "Pumas" },
        { id: 3323, name: "Monterrey" },
        { id: 3324, name: "Tigres" },
        { id: 3325, name: "Toluca" },
        { id: 3326, name: "León" },
        { id: 3327, name: "Pachuca" },
        { id: 3328, name: "Santos Laguna" }
    ];

    function handleVamosClick() {
        if (equipo) {
            navigate("/analysis", { state: { equipoId: equipo.id, equipoNombre: equipo.name } });
        }
    }

    return (
        <main>
            <div className="main-view-container">
                <div className="items-baseline">
                    <p className="text-7xl font-semibold text-gray-600">¡Hola!</p>
                    <p className="text-5xl font-semibold text-gray-600">
                        ¿Contra qué equipo jugamos?
                    </p>

                    <div className="pt-10 flex justify-between gap-4 content-col">
                        <Dropdown
                            value={equipo}
                            onChange={(e) => setEquipo(e.value)}
                            options={equiposLigaMX}
                            optionLabel="name"
                            placeholder="Selecciona equipo"
                            className="boton p-dropdown-custom"
                            panelClassName="p-dropdown-panel-custom"
                        />
                        <button className="boton" type="button" onClick={handleVamosClick}>
                            ¡Vamos!
                        </button>
                    </div>
                </div>

                <div className="px-10 ">
                    <img src="app/assets/logo_america.png" alt="América" />
                </div>
            </div>
        </main>
    );
}