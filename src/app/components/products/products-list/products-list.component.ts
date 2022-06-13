import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productsInput$ :Observable<AppDataState<Product[]>>| null = null;
  //@Output() productListEventEmitter : EventEmitter<ActionEvent> = new EventEmitter();

  readonly DataStateEnum=DataStateEnum;

  constructor() { }

  ngOnInit(): void {
  }

  /*onSelect(p: Product) {
    this.productListEventEmitter.emit({type:ProductActionsTypes.SELECT_PRODUCT,payload:p});
  }
  onDelete(p: Product) {
    this.productListEventEmitter.emit({type:ProductActionsTypes.DELETE_PRODUCT,payload:p});
  }
  onEdit(p: Product) {
    this.productListEventEmitter.emit({type:ProductActionsTypes.EDIT_PRODUCT,payload:p});
  }*/

}
