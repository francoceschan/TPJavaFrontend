import { Component } from '@angular/core';
import { ReseniaPublicaDTO } from 'src/app/model/DTO/ReseniaPublicaDTO';
import { ReseniaService } from 'src/app/services/resenia.service';

@Component({
  selector: 'app-carousel-resenias',
  templateUrl: './carousel-resenias.component.html',
  styleUrls: ['./carousel-resenias.component.scss']
})
export class CarouselReseniasComponent {

  resenias: ReseniaPublicaDTO[] = [];

  constructor(
    private _reseniaService: ReseniaService
  ) {}

  ngOnInit(){
    this._reseniaService.findReseniasRandom().subscribe(res => this.resenias = res)
  }

  currentIndex = 0;
  visibleCards = this.resenias.slice(this.currentIndex, this.currentIndex + 3);

  updateVisibleCards() {
      this.visibleCards = this.resenias.slice(this.currentIndex, this.currentIndex + 3);
  }

  nextSlide() {
      if (this.currentIndex + 3 < this.resenias.length) {
          this.currentIndex++;
          this.updateVisibleCards();
      }
}

prevSlide() {
    if (this.currentIndex > 0) {
        this.currentIndex--;
        this.updateVisibleCards();
    }
}
}
