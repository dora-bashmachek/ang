import { Component, OnInit } from '@angular/core';
import { db } from 'src/utils/firebase';
import { collection, query, where, getDocs } from "firebase/firestore";

import FirebaseMethods from 'src/utils/firebaseMethods';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: any = null;
  constructor(private firebaseMethods: FirebaseMethods) {}

  async ngOnInit(): Promise<void> {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user);
    const q = query(collection(db, "cart"), where("uid", "==", user?.uid));
    const productsSnapshot = await getDocs(q)
    const products: {
      id: string;
      title: any;
      price: any;
      spec: any;
      img: any;
      user_uid: string;
    }[] = [];
    productsSnapshot.forEach((doc) => {
      const data = doc.data();
      products.push({
        id: doc.id,
        title: data['title'],
        price: data['price'],
        spec: data['spec'],
        img: data['img'],
        user_uid:data['user_uid']
      });
    });
    this.products = products;
    console.log(this.products);
  }

}
