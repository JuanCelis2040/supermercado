export interface Catalogo{
    id:number,
    nombre:string,
    descripcion:string,
    precio:number,
    img:string
}

export const productos = [
    {
        id: 1,
        nombre: "audifonos agogo",
        precio: 99,
        descripcion: "se escucha melo.",
        img: "audifonos.jpg"
    },
    {
        id: 2,
        nombre: "teclado",
        precio: 10,
        descripcion: "escribe melo",
        img: "teclado.jpg"
    },
    {
        id: 3,
        nombre: "mouse",
        precio: 12,
        descripcion: "se mueve melo",
        img: "mause.jpg"
    }
];
