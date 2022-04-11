import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  class_container_sing_in: string = 'hidden';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.class_container_sing_in = 'show';
  }

  GoSignUp() {
    if (this.class_container_sing_in == 'show') {
      this.class_container_sing_in = 'hidden';
    } else if (this.class_container_sing_in == 'hidden') {
      this.class_container_sing_in = 'show';
    }
    setTimeout(() => {
      this.router.navigate(['sign-up']);
    }, 700);
  }
}
