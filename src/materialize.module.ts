import { ModuleWithProviders, NgModule } from '@angular/core';
import { MaterializeModule as A2M } from 'angular2-materialize';
import { NotifyService } from './notify.service';
import { NavbarComponent } from './navbar.component';

@NgModule({
    imports: [ A2M ],
    declarations: [ NavbarComponent ],
    exports: [ A2M, NavbarComponent ]
})
export class MaterializeModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MaterializeModule,
            providers: [ NotifyService ]
        }
    }
}
