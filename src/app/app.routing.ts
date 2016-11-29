import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {DogsComponents} from "./showDogs/dogs.component";
import {KendoGridTest} from "./kendo-grid/kendo-grid.component";
import {KendoUploadTest} from "./kendo-upload/kendo-upload";
import {DujardinSuperBasicDataTable} from "./dujardin-data-table/dujardinTable";



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dogs'},
  {path: 'dogs', component: DogsComponents},
  {path: 'kendo-grid', component: KendoGridTest},
  {path: 'kendo-upload', component: KendoUploadTest},
  {path: 'dujardin-superbasic-datatable', component: DujardinSuperBasicDataTable},
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
