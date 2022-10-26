import { Component, OnInit } from '@angular/core';
import { collection, getDocs, doc, getDoc, addDoc,deleteDoc  } from "firebase/firestore";
import { db } from 'src/utils/firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

async ngOnInit(): Promise<void> {
  // await deleteDoc(doc(db, "products", "1OSCVrqtOYKv3qk9UB0p"));  

  // const docRef = await addDoc(collection(db, "products"), {
  //   id: "Phone 3",
  //   title: "Phone 3",
  //   price: 700,
  //   category: "Phones",
  //   spec: {
  //     RAM: 6,
  //     ROM:258
  //   }
  // });
  // console.log("Document written with ID: ", docRef.id);


//     const docRef = doc(db, "products", "Phone 1");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }
  }
  
  async getDocuments(document: string){
  const querySnapshot = await getDocs(collection(db, document));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
}
}
