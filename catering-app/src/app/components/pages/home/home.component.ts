import { Component, OnInit, ElementRef } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Food } from 'src/app/shared/models/Food';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private seeMoreIcon: HTMLElement | null = null;
  foods: Food[] = [];
  isAdmin: boolean = false;

  constructor(private db: AngularFireDatabase, public afAuth: AngularFireAuth, private elRef: ElementRef) {
    const foodsRef = this.db.list('foods');
    foodsRef.snapshotChanges().subscribe((foods: any[]) => {
      this.foods = foods.map((food) => {
        const id = food.payload.key;
        const data = food.payload.val();
        return { id, ...data };
      });
    });

    // Check if the user is an admin
    this.afAuth.authState.subscribe((user) => {
      if (user && user.email === 'admin@gmail.com') {
        this.isAdmin = true;
      }
    });
  }

  addFood() {
    const name = (document.getElementById('name') as HTMLInputElement).value!;
    const price = parseFloat(
      (document.getElementById('price') as HTMLInputElement).value!
    );
    const imageUrl = (document.getElementById('imageUrl') as HTMLInputElement)
      .value!;
    const ingredients = (
      document.getElementById('ingredients') as HTMLInputElement
    ).value!.split(',');

    const food = { name, price, imageUrl, ingredients };
    const foodsRef = this.db.list('foods');
    foodsRef.push(food);
  }

  deleteFood(id: string) {
    const foodsRef = this.db.list('foods');
    foodsRef.remove(id);
  }

  logout(): void {
    this.afAuth.signOut();
  }

  scrollToNextSection() {
    const nextSection = this.elRef.nativeElement.querySelector('.section-video')?.nextElementSibling;

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });

      setInterval(() => {
        if (this.seeMoreIcon) {
          this.seeMoreIcon.classList.toggle('bounce');
        }
      }, 2000);
    }
  }

  autoplayVideo() {
    const myVideo = this.elRef.nativeElement.querySelector('#myVideo');
    myVideo.controls = false;
    myVideo.autoplay = true;
    myVideo.muted = true;
    myVideo.play();
  }

  ngOnInit() {
    this.autoplayVideo();
  }
}
