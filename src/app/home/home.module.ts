import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MaterialModule } from "../share/material/material.module";
import { VideosComponent } from "./pages/videos/videos.component";
import { ScrollDispatchModule } from "@angular/cdk/scrolling";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ScrollDispatchModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    VideosComponent
  ]
})
export class HomeModule {}
