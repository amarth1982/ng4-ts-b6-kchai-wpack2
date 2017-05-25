import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'

import { HeaderModule } from './header'

@NgModule({
    imports: [BrowserModule, CommonModule, HttpModule, RouterModule, HeaderModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}