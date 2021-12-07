import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/product/products.service';
import { RequestService } from 'src/app/services/request/reques.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { User } from 'src/core/tools/classes/User.models';
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
    private formBuilder: FormBuilder,
    private requestService: RequestService,
    private storageService: StorageService) {
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
    this.submitted = true
    if (this.newProductForm.valid) {
      const user_: User = this.storageService.getCurrentUser()
      this.requestService.saveNewRequestOfUser(user_.IDNumber, this.newProductForm.value)
    }
  }

}
