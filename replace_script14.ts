import * as fs from 'fs';

let content = fs.readFileSync('src/app/components/right-panel/right-panel.component.ts', 'utf8');

content = content.replace(
  "import { ActionMenuComponent } from '../action-menu/action-menu.component';",
  ""
);

content = content.replace(
  "imports: [CommonModule, MatIconModule, ReactiveFormsModule, FormsModule, ActionMenuComponent],",
  "imports: [CommonModule, MatIconModule, ReactiveFormsModule, FormsModule],"
);

fs.writeFileSync('src/app/components/right-panel/right-panel.component.ts', content);
console.log("Done");
