import * as fs from 'fs';

let lines = fs.readFileSync('src/app/components/right-panel/right-panel.component.ts', 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('<!-- Damage/Healing Roll -->')) {
    if (lines[i+1].includes('@if (ability.damage || ability.healing) {')) {
      lines[i+1] = '                                @if ((ability.damage || ability.healing) && (ability.attackBonus === undefined || ability.attackBonus === null || lastAbilityResult()?.attack)) {';
      lines[i+2] = '                                  <div class="animate-in fade-in slide-in-from-top-2">';
    }
  }
}

fs.writeFileSync('src/app/components/right-panel/right-panel.component.ts', lines.join('\n'));
console.log("Done");
