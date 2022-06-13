import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { EventDriverService } from 'src/app/state/event.driver.service';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  //@Output() productEventEmitter : EventEmitter<ActionEvent> = new EventEmitter();
  constructor(private eventDriveService:EventDriverService) { }

  ngOnInit(): void {
  }

  onGetAllProducts(){
    //this.productEventEmitter.emit({type:ProductActionsTypes.GET_ALL_PRODUCTS});
     this.eventDriveService.publishEvent({type:ProductActionsTypes.GET_ALL_PRODUCTS});
  }

  onGetSelectedProducts(){
    //this.productEventEmitter.emit({type:ProductActionsTypes.GET_SELECTED_PRODUCTS});
    this.eventDriveService.publishEvent({type:ProductActionsTypes.GET_SELECTED_PRODUCTS});
  }

  onGetAvailableProducts(){
    //this.productEventEmitter.emit({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
    this.eventDriveService.publishEvent({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
  }

  onNewProduct(){
    //this.productEventEmitter.emit({type:ProductActionsTypes.NEW_PRODUCT});
    this.eventDriveService.publishEvent({type:ProductActionsTypes.NEW_PRODUCT});
  }

  onSearch(value: any){
    //this.productEventEmitter.emit({type:ProductActionsTypes.SEARCH_PRODUCTS,payload: value});
    this.eventDriveService.publishEvent({type:ProductActionsTypes.SEARCH_PRODUCTS,payload: value});
  }
}
