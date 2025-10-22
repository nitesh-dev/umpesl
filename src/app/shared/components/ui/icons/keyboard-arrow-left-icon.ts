import { Component } from '@angular/core';

        @Component({
        selector: 'app-keyboard-arrow-left-icon',
        standalone: true,
        template: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M560-253.85 333.85-480 560-706.15 602.15-664l-184 184 184 184L560-253.85Z"/></svg>`,
          styles: `
            :host {
              display: flex;
              align-items: center;
            }
        `,
        })
        export class KeyboardArrowLeftIcon {}
