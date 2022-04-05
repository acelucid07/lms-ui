import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faGoogle = faGoogle;
  constructor() { }

  ngOnInit(): void {
  }

}
