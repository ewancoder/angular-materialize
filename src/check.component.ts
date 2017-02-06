import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'check',
    template:
`
<div id="check-container">
  <i class="material-icons"
    [class.green-text]="good"
    [class.orange-text]="warning"
    [class.red-text]="bad">

    {{good ? 'check_circle' : (warning ? 'warning' : (bad ? 'error' : 'unknown'))}}

  </i>
</div>
`,
    styles: [
`
#check-container {
    height: 24px;
    text-align: center;
}

i {
    margin: 0 auto;
}
`
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckComponent {
    @Input() good: boolean;
    @Input() warning: boolean;
    @Input() bad: boolean;
}
