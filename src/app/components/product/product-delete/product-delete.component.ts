import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product;

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id") || ''
    this.productService.readById(id).subscribe(product => {
      this.product = product
    });
  }

  deleteProduct(): void {
    console.log(this.product)
    this.productService.delete(`${this.product.id}`).subscribe(() => {
      this.productService.showMessage('Product Deleted')
      this.router.navigate([`/`])
    })
  }

  cancel(): void {
    this.router.navigate(['/'])
  }

}
