import { Injectable } from '@angular/core';
import { LoggerService } from '@ewancoder/angular-logger';

declare var Materialize: any;

@Injectable()
export class NotifyService {
    constructor(logger: LoggerService) {
        logger.log('Initialized NotifyService.', ['notify', 'service', 'materialize', 'init']);
    }

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
