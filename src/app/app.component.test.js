import {AppComponent} from './app.component'

describe('AppComponent', ()=>{
    let obj = new AppComponent()

    it('works', ()=>{
        expect(AppComponent).to.be.not.false
    })

    it('on init set title to ng2-application', ()=>{
        obj.ngOnInit();

        expect(obj.title == "ng2-application").to.be.true
    })
})