export class Educacion {
    id?: number;
    institucion: string;
    titulo: string;
    descripcion: string;
    ruta: string;

    constructor(institucion: string, titulo: string, descripcion: string, ruta: string){
        this.institucion = institucion;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.ruta = ruta;
    }

}
