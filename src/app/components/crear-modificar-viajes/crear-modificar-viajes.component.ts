import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-modificar-viajes',
  templateUrl: './crear-modificar-viajes.component.html',
  styleUrls: ['./crear-modificar-viajes.component.scss']
})
export class CrearModificarViajesComponent implements OnInit {

  constructor(
    private route : ActivatedRoute, 
    ) { }


  ngOnInit(): void {
    if (this.route.snapshot.params['id']){
      console.log("edit")
    } else {
      console.log("new")
    }
  }
}
