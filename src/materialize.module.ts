import { ModuleWithProviders, NgModule } from '@angular/core';
import { MaterializeModule as A2M } from 'angular2-materialize';
import { NotifyService } from './notify.service';

@NgModule({
    imports: [ A2M ],
    exports: [ A2M ]
})
export class MaterializeModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MaterializeModule,
            providers: [ NotifyService ]
        }
    }
}
