import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TrainingComponent } from './training/training.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { OnPushComponent } from './training/on-push/on-push.component';
import { AllLifecycleComponent } from './training/all-lifecycle/all-lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: TrainingComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'training', component: TrainingComponent },
    ]),
    TrainingComponent,
    AllLifecycleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
