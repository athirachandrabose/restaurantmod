import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  ratingForm: FormGroup;
  orderedItems: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.ratingForm = new FormGroup({
      rating: new FormControl(null, Validators.required),
      suggestions: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
    const state = this.route.snapshot?.data?.['state'];
    if (state && state.orderedItems) {
      this.orderedItems = state.orderedItems;
    }
  }
  submitRatingForm() {
    if (this.ratingForm.valid) {
      // Perform any necessary actions with the form data
      console.log(this.ratingForm.value);

      // Reset the form
      this.ratingForm.reset();
    }
  }
}
