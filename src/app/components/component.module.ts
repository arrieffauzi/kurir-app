import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { HomeProfileComponent } from "./home-profile/home-profile.component";
import { HomeProgressComponent } from "./home-progress/home-progress.component";
import { OrderDetailComponent } from "./order-detail/order-detail.component";
import { OrderHomeComponent } from "./order-home/order-home.component";
import { PageHeaderComponent } from "./page-header/page-header.component";
import { StatusComponentComponent } from "./status-component/status-component.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations:[
        HomeProfileComponent,
        HomeProgressComponent,
        OrderHomeComponent,
        OrderDetailComponent,
        PageHeaderComponent,
        StatusComponentComponent
    ],
    exports:[
        HomeProfileComponent,
        HomeProgressComponent,
        OrderHomeComponent,
        OrderDetailComponent,
        PageHeaderComponent,
        StatusComponentComponent
    ]
})
export class ComponentsModule{}
