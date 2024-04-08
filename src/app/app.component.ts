import { Component } from '@angular/core';

interface Sonidos {
  id: number;
  nombre: string;
  styleClass?: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pianoApp';
  currentUrl = '../assets/sonidos/';
  public publicClass = 'list-group-item list-group-item-action';
  public pianoSounds: Sonidos[] = [
    {
      id: 1,
      nombre: 'Sonido 1',
      styleClass: this.publicClass + 'list-group-item-primary bg-primary',
    },
    {
      id: 2,
      nombre: 'Sonido 2',
      styleClass: this.publicClass + 'list-group-item-success bg-success',
    },
    {
      id: 3,
      nombre: 'Sonido 3',
      styleClass: this.publicClass + 'list-group-item-danger bg-danger',
    },
    {
      id: 4,
      nombre: 'Sonido 4',
      styleClass: this.publicClass + 'list-group-item-warning bg-warning',
    },
    {
      id: 5,
      nombre: 'Sonido 5',
      styleClass: this.publicClass + 'list-group-item-dark bg-success',
    },
  ];

  playThePiano(id: number) {
    const audio = new Audio();
    audio.src = this.currentUrl + id + '.mp3';
    audio.volume = 0.1;
    audio.load();
    audio.play();
  }
}
