import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { HomeProfileComponent } from "./home-profile/home-profile.component";
import { HomeProgressComponent } from "./home-progress/home-progress.component";
import { OrderDetailComponent } from "./order-detail/order-detail.component";
import { OrderHomeComponent } from "./order-home/order-home.component";
import { PageHeaderComponent } from "./page-header/page-header.component";

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
        PageHeaderComponent
    ],
    exports:[
        HomeProfileComponent,
        HomeProgressComponent,
        OrderHomeComponent,
        OrderDetailComponent,
        PageHeaderComponent
    ]
})
export class ComponentsModule{}