import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isUpdate: boolean = false;
  editingProductCode: string | null = null;

  productCode = '';
  productName = '';
  productCategory = '';
  productPrice: any = '';

  products: any[] = [];

  constructor(private ps: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  // ADD / UPDATE 
  submitProduct(form: any) {

    const product = {
      productCode: this.productCode,
      productName: this.productName,
      productCategory: this.productCategory,
      productPrice: this.productPrice
    };

    if (this.isUpdate && this.editingProductCode) {

      if (confirm('Are you sure to delete this product?')){
          this.ps.updateProduct(this.editingProductCode, product)
          .subscribe(() => {
            this.isUpdate = false;
            this.editingProductCode = null;
            this.getProducts();
            form.resetForm();
          });

      }

     

    } else {

      this.ps.addProduct(product).subscribe(() => {
        this.getProducts();
        form.resetForm();
      });

    }
  }

  // EDIT
  editProduct(p: any) {
    this.isUpdate = true;
    this.editingProductCode = p.productCode;

    this.productCode = p.productCode;
    this.productName = p.productName;
    this.productCategory = p.productCategory;
    this.productPrice = p.productPrice;
  }

  // CANCEL
  clear(form: any) {
    this.isUpdate = false;
    this.editingProductCode = null;
    form.resetForm();
  }

  // DELETE
  deleteProduct(id: string) {
    if (confirm('Are you sure to delete this product?')) {
      this.ps.deleteProduct(id).subscribe(() => {
        this.getProducts();
      });
    }
  }

  // GET 
  getProducts() {
    this.ps.getProduct().subscribe((res) => {
      this.products = res;
    });
  }
}
