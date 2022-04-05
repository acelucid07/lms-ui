import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faGoogle = faGoogle;
  constructor() { }

  ngOnInit(): void {
  }

}
