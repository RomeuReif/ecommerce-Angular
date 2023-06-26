import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: 'product-box.component.html',
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;

  product: Product | undefined = {
    id: 1,
    title: 'Air Jordan',
    price: 150,
    category: 'tenis',
    description: 'Descrição',
    image: 'https://via.placeholder/150'
  };

  @Output() addToCart = new EventEmitter();

  onAddToCart(): void{
    this.addToCart.emit(this.product);
  }
}
