import * as fs from 'fs';

let content = fs.readFileSync('src/app/components/right-panel/right-panel.component.ts', 'utf8');

const target = `                                  </div>

                                <!-- Damage/Healing Roll -->
                                @if (ability.damage || ability.healing) {
                                  <div>
                                    @if (!isManualRollingDamage()) {`;

const replacement = `                                  </div>
                                }

                                <!-- Damage/Healing Roll -->
                                @if ((ability.damage || ability.healing) && (ability.attackBonus === undefined || ability.attackBonus === null || lastAbilityResult()?.attack)) {
                                  <div class="animate-in fade-in slide-in-from-top-2">
                                    @if (!isManualRollingDamage()) {`;

content = content.split(target).join(replacement);

fs.writeFileSync('src/app/components/right-panel/right-panel.component.ts', content);
console.log("Done");
