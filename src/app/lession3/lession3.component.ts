import { Component } from '@angular/core';
// 1.2
interface User {
  name: string;
  id: number;
  email: string;
}
interface AuthenticatedUser extends User {
  authToken: string;
}

const firstUser: User = {
  name: 'Jonas',
  id: 10,
  email: 'Jonas.collsten@gmail.com',
};
const authenticatedUser: AuthenticatedUser = {
  name: 'Jonas',
  id: 10,
  email: 'Jonas.collsten@gmail.com',
  authToken: 'abc123xxa',
};

// 1.2
type typeUser = {
  name: string;
  age: number;
};
type typeUserID = string | number;

// uppgift 2.1
function wrapInArray<T>(arg: T): T[] {
  return [arg];
}
const numberArray = wrapInArray(42); // numberArray är av typen number[]
console.log(numberArray); // Output: [42]

// uppgift 3
// interface Product{
//   ID:number
//   name:String
//   price:number
//   category:string
// }

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

class ProductCatalog<T extends Product> {
  private products: T[];

  constructor(products: T[]) {
    this.products = products;
  }

  addProduct(product: T) {
    this.products.push(product);
  }

  getAllProducts(): T[] {
    return this.products;
  }

  getProductById(id: number): T | undefined {
    return this.products.find((product) => product.id === id);
  }

  // You can add more methods here as needed
}

// Example usage
const products: Product[] = [
  { id: 1, name: 'Product 1', price: 10, category: 'Category 1' },
  { id: 2, name: 'Product 2', price: 20, category: 'Category 2' },
];

const catalog = new ProductCatalog(products);

// Adding a new product
const newProduct: Product = {
  id: 3,
  name: 'Product 3',
  price: 30,
  category: 'Category 3',
};
catalog.addProduct(newProduct);

// Getting all products
const allProducts = catalog.getAllProducts();
console.log(allProducts);

// Getting a product by id
const productIdToFind = 2;
const productById = catalog.getProductById(productIdToFind);
console.log(productById);

@Component({
  selector: 'app-lession3',
  standalone: true,
  imports: [],
  templateUrl: './lession3.component.html',
  styleUrl: './lession3.component.css',
})
export class Lession3Component {}
