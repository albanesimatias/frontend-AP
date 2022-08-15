export class Educacion {
    id?: number;
    institucion: string;
    titulo: string;
    descripcion: string;
    imagen: string;

    constructor(institucion: string, titulo: string, descripcion: string, imagen: string){
        this.institucion = institucion;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

}
