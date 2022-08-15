import { NodeCompatibleEventEmitter } from "rxjs/internal/observable/fromEvent";

export class Habilidad {
    id?: number;
    nombre: string;
    porcentaje: number;
    imagen: string;

    constructor(nombre: string, porcentaje: number, imagen: string){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.imagen = imagen;
    }
}
