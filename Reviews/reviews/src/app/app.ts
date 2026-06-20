import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Review, ReviewService } from './Services/review-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  reviews: Review[] = []
  currentIndex = signal(0);
  loading = signal(true);

  constructor(private reviewService: ReviewService){}

  ngOnInit(){
    this.reviewService.getReivews().subscribe((data) => {
      this.reviews = data;
      this.loading.set(false);
    })
  }

  get currentReview(): Review | null {
    return this.reviews.length ? this.reviews[this.currentIndex()] : null;
  }

  nextreivew(){
    let index = this.currentIndex() + 1;
    if(index >= this.reviews.length){
      index = 0;
    }
    this.currentIndex.set(index);
  }

  previousReview(){
    let index = this.currentIndex() - 1;
    if(index < 0){
      index = this.reviews.length - 1;
    }
    this.currentIndex.set(index);
  }

  randomReview(){
    let index = Math.floor(Math.random() * this.reviews.length);
    this.currentIndex.set(index);
  }
}
