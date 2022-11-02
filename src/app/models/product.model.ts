export class Product {
  id: string
  title: string
  price:number
  spec: any
  img: string
  constructor(id: string = '', title: string ='', price:number = 0, spec: any = {}, img:string='') {
    this.id = id
    this.title = title
    this.price = price
    this.spec = spec
    this.img = img
  }
};
