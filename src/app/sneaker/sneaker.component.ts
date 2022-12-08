import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import FirebaseMethods from 'src/utils/firebaseMethods';
import { Sneaker } from '../models/sneaker.model';
import { CartComponent } from '../cart/cart.component';
import { getAuth } from 'firebase/auth';

// const ALERTS: Alert[] = [
//   {
// 		type: 'info',
// 		message: 'This is an info alert',
// 	}
// ];

@Component({
  selector: 'app-product',
  templateUrl: './sneaker.component.html',
  styleUrls: ['./sneaker.component.css'],
})

export class SneakerComponent implements OnInit {
  id: string;
  sneaker: Sneaker = new Sneaker();
  sneakers: Sneaker[] = [new Sneaker()];
  size: string = "36";
  // alerts: Alert[];

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
  
  async addToCart(id: string) {
    console.log(id);
    const auth = getAuth().onAuthStateChanged(async user => {

        const sneaker = { ...this.sneaker, productId:this.sneaker.id, uid: user?.uid, size:this.size };
        await this.firebaseMethods.create('cart', sneaker);
    });

  }
  handleChange(event: Event) {
   this.size = (event.target as HTMLInputElement).value;
  }
}
