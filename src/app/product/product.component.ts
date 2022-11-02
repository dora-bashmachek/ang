import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import FirebaseMethods from 'src/utils/firebaseMethods';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  id: string;
  product: Product = new Product();
  constructor(
    private activatedRoute: ActivatedRoute,
    private firebaseMethods: FirebaseMethods
  ) {
    this.id = String(activatedRoute.snapshot.paramMap.get('id'));
  }
  async ngOnInit(): Promise<void> {
    const product: any = await this.firebaseMethods.getDocumentById(
      'products',
      this.id
    );
    this.product = new Product(product.id, product.title, product.price, product.spec, product.img);
  }
}
