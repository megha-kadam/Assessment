import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { SnackbarService } from '../../services/snackbar.service';
import { IProduct } from '../../models/product';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products !: IProduct[];
  productFilter : IProduct[] = [];

  productSearch = new FormControl('');

  constructor(
        private productService : ProductService,
        private snackbar : SnackbarService,
        private route : ActivatedRoute
      ) { 
       let productArr = this.route.snapshot.data['products'];
       this.products = productArr.products;
        this.productFilter = [...this.products];        
      }

  // getProducts(){
  //    this.productService.fetchAllProduct()
  //   .subscribe({
  //     next : (res : IProduct[] | any) => {
  //       this.products = res.products;
  //       this.productFilter = [...this.products]
  //     },
  //     error : err => this.snackbar.openSnackbar(err)
      
  //   })
  // }

  
  ngOnInit(): void {
   //this.getProducts();

   this.productSearch.valueChanges.subscribe((value) => {
        console.log(value);
        
      this.filterProduct(value!);
    });

  }


  filterProduct(searchText: string) {
    if (!searchText) {
      this.productFilter = [...this.products]; // reset
      return;
    }
    const lowerText = searchText.toLowerCase();

    this.productFilter = this.products.filter(product =>
      product.title.toLowerCase().includes(lowerText) 
    );
  }

}
