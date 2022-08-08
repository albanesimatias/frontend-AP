import { NodeCompatibleEventEmitter } from "rxjs/internal/observable/fromEvent";

export class Habilidad {
    id?: number;
    nombre?: string;
    porcentaje?: number;
    ruta?: string;

    constructor(nombre: string, porcentaje: number, ruta: string){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.ruta = ruta;
    }
}
