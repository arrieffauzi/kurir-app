import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl: NavController
  ) {}

  ngOnInit(){
    setTimeout(() => {
      console.log('init');
      this.navCtrl.navigateForward('on-boarding')
    }, 1500);
  }

}
