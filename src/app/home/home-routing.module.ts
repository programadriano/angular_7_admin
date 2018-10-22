import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { VideosComponent } from "./pages/videos/videos.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "videos",
        component: VideosComponent
      }
    ]
  },
  {
    path: "",
    redirectTo: "home/videos",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
