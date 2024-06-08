import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Colectivo } from 'src/app/model/Colectivo';
import { ColectivoService } from '../../services/colectivo.service';

@Component({
  selector: 'app-crear-modificar-colectivos',
  templateUrl: './crear-modificar-colectivos.component.html',
  styleUrls: ['./crear-modificar-colectivos.component.scss']
})
export class CrearModificarColectivosComponent {

  colectivo: Colectivo;

  constructor(
    private route : ActivatedRoute,
    private colectivoService : ColectivoService 
    ) { }


  ngOnInit(): void {
    if (this.route.snapshot.params['id']){
      console.log("edit")
    } else {
      this.colectivo = new Colectivo();
      console.log("new")
    }
  }

  guardar(){
    this.colectivoService.guardarColectivo(this.colectivo).subscribe(resp => console.log(resp))
    console.log(this.colectivo)
  }
}
