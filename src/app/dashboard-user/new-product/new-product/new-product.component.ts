import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/product/products.service';
import { Product } from '../../../../core/tools/classes/Product.models';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  public allProductsAvailable: Product[];
  public productrSelected: any

  public newProductForm: FormGroup
  public submitted: Boolean = false

  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder) {
    this.allProductsAvailable = this.productsService.GetProductsData()
    this.productrSelected = { id: 0, nameProduct: '', cellPhone: 0, monthlyIncome: 0 }
    this.newProductForm = this.formBuilder.group({
      nameProduct: ['', Validators.required],
      cellPhone: ['', Validators.required],
      monthlyIncome: ['', Validators.required]
    })
  }

  ngOnInit(): void { }

  selectObjectProduct(idObjectProduct) {
    this.productrSelected = this.allProductsAvailable.find(element => element.id == Number(idObjectProduct))
  }

  sendRequestNewProduct() {
    console.log(this.newProductForm)
    this.submitted = true
    if (this.newProductForm.valid) {
      alert('Valido')
    }
  }

}
