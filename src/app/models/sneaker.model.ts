export class Sneaker {
  id: string
  title: string
  price:number
  img: string
  desc:string

  constructor(id: string = '', title: string ='', price:number = 0, img:string='', desc:string='' ) {
    this.id = id
    this.title = title
    this.price = price
    this.img = img
    this.desc = desc
    
  }
};
