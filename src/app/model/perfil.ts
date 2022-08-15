export class Perfil {
    id: number = 1;
    nombre: string;
    descripcion: string;
    imagen: string

    constructor(nombre: string, descripcion: string, imagen: string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}
