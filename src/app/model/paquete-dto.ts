import { Educacion } from "./educacion";
import { Habilidad } from "./habilidad";
import { Perfil } from "./perfil";
import { Proyecto } from "./proyecto";

export class PaqueteDTO {
    educaciones: Educacion[];
    habilidades: Habilidad[];
    proyectos: Proyecto[];
    perfil: Perfil;

    constructor(educaciones:Educacion[],habildades:Habilidad[],proyectos:Proyecto[],perfil:Perfil){
        this.educaciones = educaciones;
        this.habilidades = habildades;
        this.proyectos = proyectos;
        this.perfil = perfil;
    }
}
