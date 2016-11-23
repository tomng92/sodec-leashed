import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {DogsComponents} from "./showDogs/dogs.component";



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dogs'},
  {path: 'dogs', component: DogsComponents},
  // {path: 'detail/:id', component: HeroDetailComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

// declarations section
export const routingComponents = [DogsComponents];
