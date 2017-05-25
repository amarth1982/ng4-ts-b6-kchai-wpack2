import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit, OnChanges {

    @Input() Title: string

    constructor() { }

    ngOnInit() { }

    ngOnChanges(changes){
        if(changes.Title){
            
        }
    }
}