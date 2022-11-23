import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import FirebaseMethods from 'src/utils/firebaseMethods';
import { Sneaker } from '../models/sneaker.model';
import { CartComponent } from '../cart/cart.component';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-product',
  templateUrl: './sneaker.component.html',
  styleUrls: ['./sneaker.component.css'],
})
export class SneakerComponent implements OnInit {
  id: string;
  sneaker: Sneaker = new Sneaker();
  sneakers: Sneaker[] = [new Sneaker()];
  constructor(
    private activatedRoute: ActivatedRoute,
    private firebaseMethods: FirebaseMethods
  ) {
    this.id = String(activatedRoute.snapshot.paramMap.get('id'));
  }
  async ngOnInit(): Promise<void> {
    const sneaker: any = await this.firebaseMethods.getDocumentById(
      'sneakers',
      this.id
    );
    this.sneaker = new Sneaker(sneaker.id, sneaker.title, sneaker.price, sneaker.desc, sneaker.img);
  }
  async addToCart(id:string){
    const auth = getAuth();
    const user = auth.currentUser;
    const idx = this.sneakers.findIndex((x)=>x.id == id);
    if (idx !=-1){
      const sneaker = {...this.sneakers[idx],uid:user?.uid};
    await this.firebaseMethods.create('cart',sneaker );

    }
  }
}
