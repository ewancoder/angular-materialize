import { Injectable } from '@angular/core';

declare var Materialize: any;

@Injectable()
export class NotifyService {
    success(message: string): void {
        Materialize.toast(message, 4000, 'green');
    }

    warning(message: string): void {
        Materialize.toast(message, 4000, 'orange');
    }

    error(message: string): void {
        Materialize.toast(message, 15000, 'red');
    }
}
