export class Sneaker {
  id: string
  title: string
  price:number
  desc:string
  img: string
  constructor(id: string = '', title: string ='', price:number = 0, spec: any = {}, img:string='', desc:string="") {
    this.id = id
    this.title = title
    this.price = price
    this.desc = desc
    this.img = img
  }
};
