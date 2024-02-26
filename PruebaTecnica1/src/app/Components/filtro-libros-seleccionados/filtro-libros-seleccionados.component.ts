import { Component, Input, Output, EventEmitter } from '@angular/core';
import{ModelBook} from '../../Models/model-book';
import{ServiceBookService} from '../../Services/service-book.service'  
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-filtro-libros-seleccionados',
  templateUrl: './filtro-libros-seleccionados.component.html',
  styleUrls: ['./filtro-libros-seleccionados.component.css']
})
export class FiltroLibrosSeleccionadosComponent {
  @Input() genero1: string[] = []; 
  @Input() filtroGenero: string | undefined;
  @Output() filtroGeneroChange = new EventEmitter<string>();
  books: ModelBook[] = [];
  constructor(private bookService: ServiceBookService) {}
  ngOnInit(): void {
    this.filtroGenero = '';
  }


  onGeneroChange1(): void {
    this.filtroGeneroChange.emit(this.filtroGenero);
    console.log("Cambio de género:", this.filtroGenero);
  }
  onGeneroChange(): void {
    this.filtroGeneroChange.emit(this.filtroGenero);
    console.log("Cambio de género:", this.filtroGenero);
  }
}
