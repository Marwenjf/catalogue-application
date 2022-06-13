import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productFormGroup?:FormGroup;
  submitted:boolean=false;
  productId:number;

  constructor(private activatedRoute:ActivatedRoute,
    private productService:ProductsService,
    private fb:FormBuilder,
    private router:Router) {
      this.productId=activatedRoute.snapshot.params.id;
      console.log('productId => '+this.productId)
     }

  ngOnInit(): void {
    this.productService.getProduct(this.productId)
    .subscribe(product=>{
      this.productFormGroup=this.fb.group({
        id:[product.id,Validators.required],
        name:[product.name,Validators.required],
        price:[product.price,Validators.required],
        quantity:[product.quantity,Validators.required],
        selected:[product.selected,Validators.required],
        available:[product.available,Validators.required]
      })
    });
  }

  onUpdateProduct() {
    this.submitted=true;
    if(this.productFormGroup?.invalid) return;
    this.productService.updateProduct(this.productFormGroup?.value)
      .subscribe(data=>{
        alert("Success Product updated");
        this.router.navigateByUrl("/products");
      });
  }

}
