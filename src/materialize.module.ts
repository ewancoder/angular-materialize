import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule as A2M } from 'angular2-materialize';
import { NotifyService } from './notify.service';
import { CheckComponent } from './check.component';
import { LoadingComponent } from './loading.component';
import { NavbarComponent } from './navbar.component';

@NgModule({
    imports: [
        CommonModule,
        A2M
    ],
    declarations: [
        CheckComponent,
        LoadingComponent,
        NavbarComponent
    ],
    exports: [
        A2M,
        CheckComponent,
        LoadingComponent,
        NavbarComponent
    ]
})
export class MaterializeModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MaterializeModule,
            providers: [ NotifyService ]
        }
    }
}
