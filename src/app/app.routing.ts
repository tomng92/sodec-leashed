import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {DogsComponents} from "./showDogs/dogs.component";
import {KendoGridTest} from "./kendo-grid/kendo-grid.component";
import {KendoUploadTest} from "./kendo-upload/kendo-upload";
import {DujardinSuperBasicDataTable} from "./dujardin-data-table/dujardinTable";
import {ZenDialogComponent} from "./edit-detail-dialog/dialog.component";
import {EditDetailComponent} from "./edit-detail/edit-detail.component";



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dogs'},
  {path: 'dogs', component: DogsComponents},
  {path: 'kendo-grid', component: KendoGridTest},
  {path: 'kendo-upload', component: KendoUploadTest},
  {path: 'dujardin-superbasic-datatable', component: DujardinSuperBasicDataTable},
  {path: 'edit-detail', component: EditDetailComponent}
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
