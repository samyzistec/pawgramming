export function Welcome() {
    return (
        <main>
            <div className="main-view-container">
                <div className="items-baseline">
                    <p className="text-7xl font-semibold text-gray-600">¡Hola!</p>
                    <p className="text-5xl font-semibold text-gray-600">
                        ¿Contra qué equipo jugamos?
                    </p>

                    <div className="pt-10 flex justify-between gap-4">
                        <button className="boton-blanco" type="button">
                            ¡Vamos!
                        </button>
                        <button className="boton-blanco" type="button">
                            ¡Vamos!
                        </button>
                    </div>
                </div>

                <div className="px-10">
                    <img src="app/assets/logo_america.png" alt="América" />
                </div>
            </div>
        </main>
    );
}