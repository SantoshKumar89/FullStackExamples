import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarServiceService {

  visible: boolean;
  sticky: boolean;

  constructor() { this.visible = false;this.sticky=false }

  hide() { this.visible = false;this.sticky=false  }

  disableSticky(){this.sticky=false}

  show() { this.visible = true; this.sticky=true }

  toggle() { this.visible = !this.visible; }
}
