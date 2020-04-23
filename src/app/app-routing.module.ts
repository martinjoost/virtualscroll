import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DragComponent } from './drag/drag.component';
import { VirtualComponent } from './virtual/virtual.component';

const routes: Routes = [
    {
        path: 'drag',
        component: DragComponent
    },
    {
        path: 'virtual',
        component: VirtualComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
