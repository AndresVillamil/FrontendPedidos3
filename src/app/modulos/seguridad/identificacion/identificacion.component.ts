import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/serivcios/seguridad.service';
import * as cryptoJS from "crypto-js";
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  estaIdentificado: boolean = false;

  fgValidador : FormGroup = this.fb.group({
    'usuario': ['',[Validators.required, Validators.email]],
    'clave' : ['',[Validators.required]],
    'recaptcha': ['',[Validators.required]]

  })

  siteKey:string ="";
    constructor(private fb: FormBuilder,
      private servicioSeguridad:SeguridadService,
      private router: Router
      ) {
        this.siteKey = "6LfIdYkdAAAAAMcAkkWI2zn7dU2r3V5frh2Zdfc-";
      }

  ngOnInit(): void {
  }
  IdentificarUsuario(){
    let usuario = this.fgValidador.controls['usuario'].value;
    let clave = this.fgValidador.controls['clave'].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();
    //Revisa la base de datos
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos:any)=>{
      //ok
        //alert("Datos Correctos")
      this.servicioSeguridad.AlmacenarSesion(datos);
      //Cambiar ruta
      this.router.navigate(["/inicio"]);

    }, (error:any) => {
      //ko
      alert("Datos Inválidos")
    })
  }


}
