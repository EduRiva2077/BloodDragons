import * as fs from 'fs';

let content = fs.readFileSync('src/app/components/right-panel/right-panel.component.ts', 'utf8');

content = content.replace(
  "import { CommonModule } from '@angular/common';",
  "import { CommonModule } from '@angular/common';\nimport { ActionMenuComponent } from '../action-menu/action-menu.component';"
);

content = content.replace(
  "imports: [CommonModule, MatIconModule, ReactiveFormsModule, FormsModule],",
  "imports: [CommonModule, MatIconModule, ReactiveFormsModule, FormsModule, ActionMenuComponent],"
);

fs.writeFileSync('src/app/components/right-panel/right-panel.component.ts', content);
console.log("Done");
