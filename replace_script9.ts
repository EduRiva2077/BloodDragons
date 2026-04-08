import * as fs from 'fs';

let content = fs.readFileSync('src/app/components/right-panel/right-panel.component.ts', 'utf8');

content = content.replace(/                                  \}\n                                <\/div>\n\n                                <!-- Damage\/Healing Roll -->\n                                @if \(ability\.damage \|\| ability\.healing\) \{\n                                  <div>\n                                    @if \(!isManualRollingDamage\(\)\) \{/g,
  `                                  }
                                </div>
                                }

                                <!-- Damage/Healing Roll -->
                                @if ((ability.damage || ability.healing) && (ability.attackBonus === undefined || ability.attackBonus === null || lastAbilityResult()?.attack)) {
                                  <div class="animate-in fade-in slide-in-from-top-2">
                                    @if (!isManualRollingDamage()) {`);

fs.writeFileSync('src/app/components/right-panel/right-panel.component.ts', content);
console.log("Done");
