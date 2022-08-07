export class Educacion {
    id?: number;
    institucion: string;
    titulo: string;
    desc: string;

    constructor(institucion: string, titulo: string, desc: string){
        this.institucion = institucion;
        this.titulo = titulo;
        this.desc = desc;
    }

}
