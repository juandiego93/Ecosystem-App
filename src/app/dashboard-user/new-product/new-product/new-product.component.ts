import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private route: ActivatedRoute,) {
    this.route.url.forEach(segment => console.log(segment[0].path))
  }

  ngOnInit(): void {
  }

}
