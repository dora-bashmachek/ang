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
  sneakers: any = null;
  constructor(private firebaseMethods: FirebaseMethods) { }

  async ngOnInit(): Promise<void> {
    const auth = getAuth().onAuthStateChanged(async user => {

      console.log(user);
      const q = query(collection(db, "cart"), where("uid", "==", user?.uid));
      const sneakersSnapshot = await getDocs(q)
      const sneakers: {
        id: string;
        productId:string;
        title: any;
        price: any;
        spec: any;
        img: any;
        size:any;
        user_uid: string;
      }[] = [];
      console.log("petuz");
      console.log(sneakersSnapshot)

      sneakersSnapshot.forEach((doc) => {
        const data = doc.data();
        console.log("petuz 2");
        
        console.log(data);
        
        sneakers.push({
          id: doc.id,
          productId: data['productId'],
          title: data['title'],
          price: data['price'],
          spec: data['spec'],
          img: data['img'],
          size:data['size'],
          user_uid: data['user_uid']
        });
      });
      this.sneakers = sneakers;
      console.log(this.sneakers);
    })
  }

}
