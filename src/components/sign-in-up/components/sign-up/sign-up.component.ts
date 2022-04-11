import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  class_container_sing_up: string = 'hidden';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.class_container_sing_up = 'show';
  }

  ReturnHome() {
    if (this.class_container_sing_up == 'show') {
      this.class_container_sing_up = 'hidden';
    } else if (this.class_container_sing_up == 'hidden') {
      this.class_container_sing_up = 'show';
    }
    setTimeout(() => {
      this.router.navigate(['']);
    }, 700);
  }
}
