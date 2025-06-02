import React from "react";
import type { Cat } from "./types";

interface CatListProps {
    cats: Cat[];
}

const CatList: React.FC<CatListProps> = ({ cats }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cats.map((cat) => (
                <div
                    key={cat.id}
                    className="rounded-lg shadow-md flex"
                >
                    {/* Columna izquierda - 1/3 */}
                    <div className="w-1/3 bg-gray-100 p-4 flex flex-col justify-center pr-2">
                        <h3
                            tabIndex={0}
                            className="font-bold text-2xl focus:outline-none focus:ring-2 focus:ring-purple-600 text-purple-600"
                        >
                            {cat.nombre}
                        </h3>
                        <p className="text-black">{cat.edad} años</p>
                        <p className="text-black italic">{cat.estado}</p>
                    </div>

                    {/* Columna derecha - 2/3 */}
                    <div className="w-2/3 flex items-center justify-center flex-grow">
                        <img
                            src={cat.imagen}
                            alt={cat.nombre}
                            className="w-full h-full rounded-lg object-cover"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CatList;
