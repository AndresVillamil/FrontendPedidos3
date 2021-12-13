import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/serivcios/producto.service';

@Component({
  selector: 'app-eliminar-productos',
  templateUrl: './eliminar-productos.component.html',
  styleUrls: ['./eliminar-productos.component.css']
})
export class EliminarProductosComponent implements OnInit {

  id: string = '';

  constructor(private servicioProducto: ProductoService,
    private router: Router,
    private route: ActivatedRoute) {
      this.id =this.route.snapshot.params['id'];
    }

  ngOnInit(): void {
    this.EliminarProducto();
  }

  EliminarProducto(){
    this.servicioProducto.EliminarProducto(this.id).subscribe((datos:any) => {
      alert("Producto eliminado correctamente!");
      this.router.navigate(["/administracion/buscar-producto"])
    },(error: any)=>{
      alert("No se pudo eliminar!");
    })
  }

}
