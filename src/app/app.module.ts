import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule
} from '@angular/material';
import { NgModule } from '@angular/core';

import { ApiService } from './services/api.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatToolbarModule
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }
