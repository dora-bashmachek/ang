import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {getAuth} from 'firebase/auth';
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from 'src/utils/firebase';

import FirebaseMethods from 'src/utils/firebaseMethods';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

    sneakers: any = null;
    total: number = 0;
    totalTax: number = 0;
    totalWithTax: number = 0;
    closeResult: any = null;

    constructor(private firebaseMethods: FirebaseMethods, private modalService: NgbModal) {
    }


    private recalculateTotal(): void {
        if (!this.sneakers || this.sneakers.length === 0) {
            return;
        }

        const total = this.sneakers.reduce((sum: number, product: {price: number}

          ) => sum + product.price, 0);
        const totalTax = total * 0.1;
        const totalWithTax = total + totalTax;

        this.total = total;
        this.totalTax = totalTax;
        this.totalWithTax = totalWithTax;
    }

    async ngOnInit(): Promise<void> {
        const auth = getAuth().onAuthStateChanged(async user => {

            console.log(user);
            const q = query(collection(db, "cart"), where("uid", "==", user?.uid));
            const sneakersSnapshot = await getDocs(q)
            const sneakers: {
                id: string;
                productId: string;
                title: any;
                price: any;
                spec: any;
                img: any;
                size: any;
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
                    size: data['size'],
                    user_uid: data['user_uid']
                });
            });
            this.sneakers = sneakers;
            this.recalculateTotal();
            console.log(this.sneakers);
        })
    }

    async deleteFromCart(id: string) {
        const auth = getAuth().onAuthStateChanged(async (user) => {
            const idx = this.sneakers.findIndex((x: { id: string; }) => x.id == id)

            console.log(id, this.sneakers, idx, user);

            if (idx != -1) {
                const Tour = {...this.sneakers[idx], uid: user?.uid}
                await this.firebaseMethods.removeDocument('cart', Tour.id)
                this.sneakers.splice(this.sneakers.id, 1,)
                this.recalculateTotal();
            }
        });

    }

    open(content: any) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = 'Closed with: ${result}';
        }, (reason) => {
            this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return 'with: ${reason}';
        }
    }

    // Subtotal () {
    //   this.products.reduce((sum, product) => sum+product.price, 0)
    // }
}
