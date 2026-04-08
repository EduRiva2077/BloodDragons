import * as fs from 'fs';

let content = fs.readFileSync('src/app/components/right-panel/right-panel.component.ts', 'utf8');

content = content.replace(/<!-- Attack Roll -->\s*<div>\s*@if \(!isManualRollingAttack\(\)\) \{/g, 
  '<!-- Attack Roll -->\n                                @if (ability.attackBonus !== undefined && ability.attackBonus !== null) {\n                                  <div>\n                                    @if (!isManualRollingAttack()) {');

content = content.replace(/  \}\n\s*<\/div>\n\s*<!-- Damage\/Healing Roll -->\n\s*@if \(ability\.damage \|\| ability\.healing\) \{\n\s*<div>\n\s*@if \(!isManualRollingDamage\(\)\) \{/g,
  '  }\n                                  </div>\n                                }\n\n                                <!-- Damage/Healing Roll -->\n                                @if ((ability.damage || ability.healing) && (ability.attackBonus === undefined || ability.attackBonus === null || lastAbilityResult()?.attack)) {\n                                  <div class="animate-in fade-in slide-in-from-top-2">\n                                    @if (!isManualRollingDamage()) {');

fs.writeFileSync('src/app/components/right-panel/right-panel.component.ts', content);
console.log("Done");
