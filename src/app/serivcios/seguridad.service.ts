import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.mdelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  //Se inicializa en vacio y evalua la propiedad
  datosUsuarioEnSesion = new BehaviorSubject <ModeloIdentificar> (new ModeloIdentificar());

  constructor(private http:HttpClient) {
    this.VerficarSesionActual();
   }

  Identificar(usuario:string , clave:string):Observable<ModeloIdentificar>{
    //Origen de datos
    return this.http.post<ModeloIdentificar>("http://localhost:3000/identificarPersona",{
      //Parametros
      usuario:usuario,
      clave:clave
    },{
    headers: new HttpHeaders({

      })
    })
  }

  RefrescarDatosSesion(datos: ModeloIdentificar) {
    this.datosUsuarioEnSesion.next(datos);
  }

  VerficarSesionActual(){
    //Validar si hay datos en el navegador
    let datos = this.ObtenerInformacionSesion();
    if(datos){
      //Llenar los datos (Variable de comportamiento)
      this.RefrescarDatosSesion(datos);
    }

  }
  //Parseo a Observable
  ObtenerDatosUsuarioEnSesion() {
    return this.datosUsuarioEnSesion.asObservable();
  }

  SeHaIniciadoSesion(){
    let datosString = localStorage.getItem("datosSesion");
    return datosString;
  }


//LocalStorage memoria del navegador
  AlmacenarSesion(datos:ModeloIdentificar){
    datos.estaIdentificado = true;
    //Convertir de Json a String
    let datosString= JSON.stringify(datos);
    //Llave y Datos
    localStorage.setItem("datosSesion", datosString);
    this.RefrescarDatosSesion(datos);
  }

  ObtenerInformacionSesion(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      //Convertir String a Json
      let datos = JSON.parse(datosString);
      return datos;
    }else{
      return null;
    }
  }

  EliminarInformacionSesion(){
    localStorage.removeItem("datosSesion");
    this.RefrescarDatosSesion(new ModeloIdentificar())
  }


  ObtenerToken(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos.tk;
    }else{
      return "";
    }
  }
}
