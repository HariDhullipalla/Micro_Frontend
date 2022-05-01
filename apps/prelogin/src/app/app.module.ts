import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

import { Route, RouterModule } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
const routes: Route[] = [
  {
    path: 'post-login-panel', 
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'post-login',
        exposedModule: './Module',
      }).then((m:any) => m.PostLoginModule),
  },
];
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
