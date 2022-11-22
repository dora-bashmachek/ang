import { Component, OnInit } from '@angular/core';
import FirebaseMethods from 'src/utils/firebaseMethods';
import { Sneaker } from '../models/sneaker.model';
import { getAuth } from 'firebase/auth';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-products',
  templateUrl: './sneakers.component.html',
  styleUrls: ['./sneakers.component.css'],
})
export class SneakersComponent implements OnInit {
  sneakers: Sneaker[] = [new Sneaker()];
  constructor(private firebaseMethods: FirebaseMethods) {}

  async ngOnInit(): Promise<void> {
    const sneakersSnapshot = await this.firebaseMethods.getDocuments(
      'sneakers'
    );
    const sneakers: { id: string; title: any; price: any; desc: any; img:any }[] = [];
    sneakersSnapshot.forEach((doc) => {
      const data = doc.data();
      sneakers.push({
        id: doc.id,
        title: data['title'],
        price: data['price'],
        desc: data['desc'],
        img: data['img']
      });
    });
    this.sneakers = sneakers;
    // console.log(this.products);
    
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

