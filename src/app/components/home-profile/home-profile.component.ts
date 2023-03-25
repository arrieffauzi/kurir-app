import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-profile',
  templateUrl: './home-profile.component.html',
  styleUrls: ['./home-profile.component.scss'],
})
export class HomeProfileComponent  implements OnInit {
  toggle:boolean = false;
  status: string = 'Offline'
  constructor() { }

  ngOnInit() {}

  onChange(){
    this.status = this.toggle? 'Online' : 'Offline'
  }
}
