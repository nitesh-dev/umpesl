import { Component } from '@angular/core';

        @Component({
        selector: 'app-grid-view-icon',
        standalone: true,
        template: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_169_6670" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<rect width="24" height="24"/>
</mask>
<g mask="url(#mask0_169_6670)">
<path d="M4 10.8726V4H11V10.8726H4ZM4 19.7088V12.8362H11V19.7088H4ZM13 10.8726V4H20V10.8726H13ZM13 19.7088V12.8362H20V19.7088H13ZM5 9.89079H10V4.9818H5V9.89079ZM14 9.89079H19V4.9818H14V9.89079ZM14 18.727H19V13.818H14V18.727ZM5 18.727H10V13.818H5V18.727Z"/>
</g>
</svg>`,
          styles: `
            :host {
              display: flex;
              align-items: center;
            }
        `,
        })
        export class GridViewIcon {}
