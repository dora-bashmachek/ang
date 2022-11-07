import { Component, OnInit } from '@angular/core';
import FirebaseMethods from 'src/utils/firebaseMethods';
import { Product } from '../models/product.model';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [new Product()];
  constructor(private firebaseMethods: FirebaseMethods) {}

  async ngOnInit(): Promise<void> {
    const productsSnapshot = await this.firebaseMethods.getDocuments(
      'products'
    );
    const products: { id: string; title: any; price: any; spec: any; img:any }[] = [];
    productsSnapshot.forEach((doc) => {
      const data = doc.data();
      products.push({
        id: doc.id,
        title: data['title'],
        price: data['price'],
        spec: data['spec'],
        img: data['img']
      });
    });
    this.products = products;
    // console.log(this.products);
    
  }
  async addToCart(id:string){
    const auth = getAuth();
    const user = auth.currentUser;
    const idx = this.products.findIndex((x)=>x.id == id);
    if (idx !=-1){
      const product = {...this.products[idx],uid:user?.uid};
    await this.firebaseMethods.create('cart',product);

    }
  }
}

