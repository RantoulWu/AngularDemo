import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeComponent } from './prime.component';
import { VideoComponent } from './video/video.component';
import { MusicComponent } from './music/music.component';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [{
  path: '',
  component: PrimeComponent,
  children: [
    {
    path: 'music',
      component: MusicComponent
    },
    {
      path: 'video',
      component: VideoComponent
    }
  ]
}];


@NgModule({
  declarations: [PrimeComponent, VideoComponent, MusicComponent],
  imports: [
    CommonModule,
    // for child, config sub-routing
    RouterModule.forChild(routes)
  ]
})
export class PrimeModule { }
