import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from './pages/homescreen/homescreen.component';
import { SongDetailComponent } from './pages/song-detail/song-detail/song-detail.component';

const routes: Routes = [
	{path: '', component: HomescreenComponent},
	{path: 'song-detail/:key', component: SongDetailComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
