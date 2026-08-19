"use client";
import { VisualField,VisualRecordEditor } from "./visual-record-editor";
export const seasonFields:VisualField[]=[{key:"name",label:"Nom de la saison (ex. 2028-2029)"},{key:"start_date",label:"Date de début",type:"date"},{key:"end_date",label:"Date de fin",type:"date"},{key:"notes",label:"Notes",type:"textarea",required:false}];
export function SeasonControl(){return <VisualRecordEditor table="seasons" fields={seasonFields} label="Ajouter une saison" accent="blue"/>}
export function normalizeSeason(value:string){return value.replace("/","-")}
