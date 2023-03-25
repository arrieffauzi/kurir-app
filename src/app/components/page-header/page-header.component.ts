import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent  implements OnInit {
  @Input() title: string = '';
  @Input() backPage: string = '';
  @Input() isScanner: boolean = false;
  constructor(
    private navCtrl:NavController
  ) { }

  ngOnInit() {}

  goToBack(){
    if(!this.backPage || this.backPage == ''){
      this.navCtrl.pop();
    }else{
      this.navCtrl.navigateForward(this.backPage);
    }
  }

}
