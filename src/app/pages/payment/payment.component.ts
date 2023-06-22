import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  showSuccess: boolean = false;

  showSuccessMessage() {
    this.cartService.clearCart();
    this.showSuccess = true;
  }
  closeSuccessMessage() {
    this.showSuccess = false;
    this.router.navigate(['/menu']);
  }
  orderedItems: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute,private cartService: CartService) {}


  ngOnInit(): void {
    this.orderedItems = this.cartService.getCartItems();
  }
  submitPaymentForm() {
  
    this.router.navigate(['/thankyou'], { state: { orderedItems: this.orderedItems } });

 
  }
}
