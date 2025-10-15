import * as fs from 'fs';
import * as path from 'path';

const ICONS_DIR = path.resolve('src/assets/icons');
const OUTPUT_DIR = path.resolve('src/app/shared/components/ui/icons');

// ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const svgFiles = fs.readdirSync(ICONS_DIR).filter((file) => file.endsWith('.svg'));

for (const file of svgFiles) {
  const svgPath = path.join(ICONS_DIR, file);
  const svgContent = fs.readFileSync(svgPath, 'utf8').trim();

  // Convert file name (e.g. add.svg) to class name and selector
  const baseName = path.basename(file, '.svg');
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
