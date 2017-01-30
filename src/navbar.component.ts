import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'navbar',
    template:
`
<nav style="margin-bottom: 10px">
  <div class="nav-wrapper container">
    <a materialize="sideNav" href="#" data-activates="slide-out" class="navbar-button-collapse waves-effect waves-light" style="margin-right: 30px">
      <i class="material-icons">menu</i>
    </a>
    <a href="#" class="brand-logo">
      <ng-content select="[navbar-logo]"></ng-content>
    </a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <ng-content select="[navbar-top]"></ng-content>
    </ul>
    <ul id="slide-out" class="side-nav">
      <ng-content select="[navbar-side]"></ng-content>
    </ul>
  </div>
</nav>
`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent { }
