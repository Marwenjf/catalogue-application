import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { EventDriverService } from 'src/app/state/event.driver.service';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product| null = null;
  //@Output() productItemEventEmitter : EventEmitter<ActionEvent> = new EventEmitter();
  constructor(private eventDriverService:EventDriverService) { }

  ngOnInit(): void {
  }

  onSelect(p: Product) {
    //this.productItemEventEmitter.emit({type:ProductActionsTypes.SELECT_PRODUCT,payload:p});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.SELECT_PRODUCT,payload:p});
  }
  onDelete(p: Product) {
    //this.productItemEventEmitter.emit({type:ProductActionsTypes.DELETE_PRODUCT,payload:p});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.DELETE_PRODUCT,payload:p});
  }
  onEdit(p: Product) {
    //this.productItemEventEmitter.emit({type:ProductActionsTypes.EDIT_PRODUCT,payload:p});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.EDIT_PRODUCT,payload:p});
  }
}
