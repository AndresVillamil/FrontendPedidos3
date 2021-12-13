import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarProductosComponent } from './productos/buscar-productos/buscar-productos.component';
import { CrearProductosComponent } from './productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './productos/editar-productos/editar-productos.component';
import { EliminarProductosComponent } from './productos/eliminar-productos/eliminar-productos.component';

const routes: Routes = [
  {
    path: "crear",
    component: CrearPersonaComponent
  },
  {
    path: "eliminar",
    component: EliminarPersonaComponent
  },
  {
    path: "buscar",
    component: BuscarPersonaComponent
  },
  {
    path: "editar",
    component: EditarPersonaComponent
  },
  {
    path:"buscar-producto",
    component: BuscarProductosComponent
  },
  {
    path: "editar-producto/:id",
    component: EditarProductosComponent
  },
  {
    path: "crear-producto",
    component: CrearProductosComponent
  },
  {
    path: "eliminar-producto/:id",
    component: EliminarProductosComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
