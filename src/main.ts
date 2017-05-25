// import { install as offlineInstall } from 'offline-plugin/runtime'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { enableProdMode } from '@angular/core'

import { AppModule } from './app'

enableProdMode()

window.onload = () => {
    platformBrowserDynamic().bootstrapModule(AppModule)
}
