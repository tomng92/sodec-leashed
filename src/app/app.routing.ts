import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {DogsComponents} from "./showDogs/dogs.component";
import {Primeng1Component} from "./primeng1/primeng1.component";
import {FileUploadDemo} from "./primengdemo/fileupload/fileuploaddemo";




const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dogs'},
  {path: 'dogs', component: DogsComponents},
  {path: 'primeng1', component: Primeng1Component},
  {path: 'primeng2upload', component: FileUploadDemo},
  // {path: 'primeng3tree', component: Primeng3TreeComponent},
  // {path: 'detail/:id', component: HeroDetailComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

// declarations section
export const routingComponents = [DogsComponents, Primeng1Component];
