export class Proyecto {
    id?: number;
    nombre: string;
    imagen: string;
    githublink: string;

    constructor(nombre: string, imagen: string, githublink: string){
        this.nombre = nombre;
        this.imagen = imagen;
        this.githublink = githublink;
    }
}
