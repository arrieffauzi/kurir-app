import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'order-home',
  templateUrl: './order-home.component.html',
  styleUrls: ['./order-home.component.scss'],
})
export class OrderHomeComponent  implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  seeAll(){
    this.navCtrl.navigateForward('pick-up')
  }

}
