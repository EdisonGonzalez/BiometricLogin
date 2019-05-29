import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Router } from '@angular/router'; 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private fingerprintAIO: FingerprintAIO) { }

  ngOnInit() {
    this.login();
  }

  login() {
    this.fingerprintAIO.show({
      clientId: 'FingerPrint',
      clientSecret: 'pass'
    })
    .then(result => {
      this.router.navigateByUrl('/home');
    })
    .catch(error => {
      console.log('Error: ', error);
    });
  }

}
