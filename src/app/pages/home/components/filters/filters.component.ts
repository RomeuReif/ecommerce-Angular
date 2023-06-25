import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: "filters.component.html",
  styles: [
  ]
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();

  categories =['tenis', 'esportes'];


  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }
}
