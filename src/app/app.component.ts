import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'my-app',
    template: `
        <app-header [Title]=title></app-header>
    `
})
export class AppComponent implements OnInit{
    title: string

    ngOnInit(){
        this.title = "ng2-application"
    }
}