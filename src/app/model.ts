export interface CartItem {
  item: MenuItem;
  quantity: number;
  price: number;

 
}

  export interface MenuItem {
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number; 
    category: string;
    rating: number;
  }