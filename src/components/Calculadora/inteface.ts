import { surebetInterface } from "../../pages/Home/interface";
import { interfaceSurebets } from "../Surebet/interface";

export interface CalculadoraI{
    setModal(status:boolean):void;
    primeiro:surebetInterface;
    segundo:surebetInterface;
}