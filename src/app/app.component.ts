import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageSlide } from './image-slide';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'Angular-Assignment-2';
  imageForm !: FormGroup;
  slides : ImageSlide[] =[];


  ngOnInit(): void {
    //slide Add form
    this.imageForm = new FormGroup({
      imageSrc : new FormControl('',Validators.required),
      imageCaption : new FormControl('')

    })

    //default random slide
    this.slides.push(this.getRandomSlide());
    this.slides.push(this.getRandomSlide());
    this.slides.push(this.getRandomSlide());
  }

  get imageFormControls(){
    return this.imageForm.controls;
  }

  // add slide from form data
  onSubmit(){
    const getImageSlide = this.imageForm.value;
    const src = getImageSlide.imageSrc;
    const caption = getImageSlide.imageCaption;
    const slide : ImageSlide = { imgSrc : src , imgCaption : caption };
    this.slides.push(slide);

  }

  // function to delete Slide
  deleteSlide(index: number){
    this.slides.splice(index,1);
  }

  // to get randomm slides
  getRandomSlide() : ImageSlide {
    let randomCaption = [
      "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
      "Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead",
      "You change the world by being yourself. -Yoko Ono",
      "In the end, it's not the years in your life that count. It's the life in your years. -Abraham Lincoln",
      "What I know for sure is that speaking your truth is the most powerful tool we all have. - Oprah Winfrey",
      "The purpose of our lives is to be happy. -Dalai Lama",
      "You only live once, but if you do it right, once is enough. -Mae West",
      "Live in the sunshine, swim the sea, drink the wild air. -Ralph Waldo Emerson",
      "I would rather die of passion than of boredom. -Vincent van Gogh",
    ];

    let n = Math.floor(Math.random() * 999);
    let src = 'https://picsum.photos/seed/'+n+'/900/400.jpg';
    n = Math.floor(Math.random() * 9);
    let caption = randomCaption[n];
    let slide : ImageSlide = { imgSrc : src , imgCaption : caption };
    return slide;
  }




}


