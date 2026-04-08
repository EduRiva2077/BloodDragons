import * as fs from 'fs';

let lines = fs.readFileSync('src/app/components/right-panel/right-panel.component.ts', 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('<!-- Damage/Healing Roll -->')) {
    // Check if the previous lines are empty and </div>
    if (lines[i-1].trim() === '' && lines[i-2].includes('</div>')) {
      // Insert } after </div>
      lines.splice(i-1, 0, '                                }');
      i++; // Adjust index because we added a line
    }
  }
}

fs.writeFileSync('src/app/components/right-panel/right-panel.component.ts', lines.join('\n'));
console.log("Done");
