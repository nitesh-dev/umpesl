import * as fs from 'fs';
import * as path from 'path';
// import { execSync } from 'child_process';

const ICONS_DIR = path.resolve('src/assets/icons');
const OUTPUT_DIR = path.resolve('src/app/shared/components/ui/icons');

// ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const svgFiles = fs.readdirSync(ICONS_DIR).filter((file) => file.endsWith('.svg'));

for (const file of svgFiles) {
  const svgPath = path.join(ICONS_DIR, file);
  let svgContent = fs.readFileSync(svgPath, 'utf8').trim();

  // Remove hardcoded attributes
  svgContent = svgContent
    // .replace(/\s*(width|height)="[^"]*"/g, '')
    .replace(/\s*(fill)="[^"]*"/g, '')
    .trim();

  // Convert file name (e.g. add.svg) to class name and selector
  const baseName = path.basename(file, '.svg').replace(/_/g, '-');
  const className =
    baseName.replace(/(^\w|-\w)/g, (c) => c.replace('-', '').toUpperCase()) + 'Icon';
  const selector = `app-${baseName}-icon`;

  // Angular component content
  const componentSource =
    `
        import { Component } from '@angular/core';

        @Component({
        selector: '${selector}',
        standalone: true,
        template: \`${svgContent}\`,
        })
        export class ${className} {}
`.trim() + '\n';

  const outFile = path.join(OUTPUT_DIR, `${baseName}-icon.ts`);
  fs.writeFileSync(outFile, componentSource);

  console.log(`✅ Generated ${path.basename(outFile)}`);
}

// execSync('npx prettier --write "src/app/icons/*.ts"', { stdio: 'inherit' });
