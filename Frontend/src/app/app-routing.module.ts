import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponetComponent } from './list-view-component/list-view-componet.component';
import { ProfileViewComponentComponent } from './profile-view-component/profile-view-component.component';

const routes: Routes = [
  {path:'lists',component:ListViewComponetComponent},
  {path:'profile-view',component:ProfileViewComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
