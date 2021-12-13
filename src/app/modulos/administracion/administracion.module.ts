import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
//import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
//import { EditarPersonaComponent } from './editar-persona/editar-persona.component';
//import { EliminarPersonaComponent } from './eliminar-persona/eliminar-persona.component';
//import { BuscarPersonaComponent } from './buscar-persona/buscar-persona.component';
import { CrearProductosComponent } from './productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './productos/editar-productos/editar-productos.component';
import { BuscarProductosComponent } from './productos/buscar-productos/buscar-productos.component';
import { EliminarProductosComponent } from './productos/eliminar-productos/eliminar-productos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    //CrearPersonaComponent,
    //EditarPersonaComponent,
    //EliminarPersonaComponent,
    //BuscarPersonaComponent,
    CrearProductosComponent,
    EditarProductosComponent,
    BuscarProductosComponent,
    EliminarProductosComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
