import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ModeloIdentificar } from 'src/app/modelos/identificar.mdelo';
import { SeguridadService } from 'src/app/serivcios/seguridad.service';


@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  sesionIniciada?: boolean = false;
  subs: Subscription = new Subscription();
  constructor(private seguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    //determina si existeun usuario en sesión
    this.subs= this.seguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe((datos:ModeloIdentificar)=>{
      this.sesionIniciada= datos.estaIdentificado;
    })
  }

}
