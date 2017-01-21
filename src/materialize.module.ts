import { ModuleWithProviders, NgModule } from '@angular/core';
import { NotifyService } from './notify.service';

@NgModule({})
export class MaterializeModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MaterializeModule,
            providers: [ NotifyService ]
        }
    }
}
