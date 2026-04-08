import * as fs from 'fs';

let content = fs.readFileSync('src/app/components/right-panel/right-panel.component.ts', 'utf8');

const target = `                                <!-- Attack Roll -->
                                @if (ability.attackBonus !== undefined && ability.attackBonus !== null) {
                                  <div>
                                    @if (!isManualRollingAttack()) {
                                      <button (click)="startManualAbilityRoll('attack')" class="w-full py-1.5 bg-amber-600 hover:bg-amber-500 text-stone-900 font-bold rounded shadow-lg transition-colors flex items-center justify-center gap-2">
                                        <mat-icon style="font-size: 16px; width: 16px; height: 16px;">casino</mat-icon>
                                        ROLAR ATAQUE (d20)
                                      </button>
                                    } @else {
                                      <div class="bg-stone-800 border border-stone-700 rounded p-2">
                                        <div class="block text-[10px] font-bold text-amber-500 mb-1 text-center">Digite o valor do d20</div>
                                        <div class="flex gap-1">
                                          <input type="number" 
                                                 [ngModel]="manualAttackRollValue()" 
                                                 (ngModelChange)="manualAttackRollValue.set($event)"
                                                 class="flex-1 bg-stone-900 border border-stone-600 rounded px-2 py-1 text-center font-mono font-bold text-sm focus:outline-none focus:border-amber-500"
                                                 placeholder="1 a 20"
                                                 (keyup.enter)="confirmAbilityRoll('attack')">
                                          <button (click)="confirmAbilityRoll('attack')" class="bg-green-600 hover:bg-green-500 text-white px-2 rounded font-bold transition-colors text-xs">OK</button>
                                          <button (click)="cancelManualAbilityRoll()" class="bg-stone-700 hover:bg-stone-600 text-white px-2 rounded transition-colors"><mat-icon style="font-size: 14px; width: 14px; height: 14px;">close</mat-icon></button>
                                        </div>
                                      </div>
                                    }
                                    @if (lastAbilityResult()?.attack; as atk) {
                                      <div class="mt-2 p-2 rounded border bg-stone-800 border-stone-600">
                                        <div class="flex items-center justify-between mb-1">
                                          <span class="font-bold text-sm" [class.text-green-400]="atk.success" [class.text-red-400]="!atk.success">
                                            {{ atk.success ? 'SUCESSO!' : 'FALHA...' }}
                                          </span>
                                          <span class="font-mono font-bold text-lg text-stone-200">{{ atk.roll.total }}</span>
                                        </div>
                                        <div class="text-[10px] text-stone-400 font-mono break-words leading-tight">{{ atk.roll.log }}</div>
                                        @if (atk.roll.isCritical) { <div class="mt-1 text-[10px] font-bold text-amber-400 uppercase tracking-widest text-center">Sucesso Crítico!</div> }
                                        @if (atk.roll.isCriticalFail) { <div class="mt-1 text-[10px] font-bold text-red-500 uppercase tracking-widest text-center">Falha Crítica!</div> }
                                      </div>
                                    }
                                  </div>
                                
                                <!-- Damage/Healing Roll -->
                                @if (ability.damage || ability.healing) {
                                  <div>
                                    @if (!isManualRollingDamage()) {
                                      <button (click)="startManualAbilityRoll('damage')" class="w-full py-1.5 bg-red-800 hover:bg-red-700 text-stone-200 font-bold rounded shadow-lg transition-colors flex items-center justify-center gap-2">
                                        <mat-icon style="font-size: 16px; width: 16px; height: 16px;">bloodtype</mat-icon>
                                        ROLAR {{ ability.damage ? 'DANO' : 'CURA' }} ({{ ability.damage || ability.healing }})
                                      </button>
                                    } @else {
                                      <div class="bg-stone-800 border border-stone-700 rounded p-2">
                                        <div class="block text-[10px] font-bold text-red-400 mb-1 text-center">Digite o valor do {{ ability.damage || ability.healing }}</div>
                                        <div class="flex gap-1">
                                          <input type="number" 
                                                 [ngModel]="manualDamageRollValue()" 
                                                 (ngModelChange)="manualDamageRollValue.set($event)"
                                                 class="flex-1 bg-stone-900 border border-stone-600 rounded px-2 py-1 text-center font-mono font-bold text-sm focus:outline-none focus:border-red-500"
                                                 placeholder="Valor"
                                                 (keyup.enter)="confirmAbilityRoll('damage')">
                                          <button (click)="confirmAbilityRoll('damage')" class="bg-green-600 hover:bg-green-500 text-white px-2 rounded font-bold transition-colors text-xs">OK</button>
                                          <button (click)="cancelManualAbilityRoll()" class="bg-stone-700 hover:bg-stone-600 text-white px-2 rounded transition-colors"><mat-icon style="font-size: 14px; width: 14px; height: 14px;">close</mat-icon></button>
                                        </div>
                                      </div>
                                    }
                                    @if (lastAbilityResult()?.damage; as dmg) {
                                      <div class="mt-2 p-2 rounded border bg-red-900/20 border-red-500/50">
                                        <div class="flex items-center justify-between mb-1">
                                          <span class="font-bold text-sm text-red-400">DANO</span>
                                          <span class="font-mono font-bold text-lg text-stone-200">{{ dmg.total }}</span>
                                        </div>
                                        <div class="text-[10px] text-stone-400 font-mono break-words leading-tight">{{ dmg.log }}</div>
                                      </div>
                                    }
                                    @if (lastAbilityResult()?.healing; as heal) {
                                      <div class="mt-2 p-2 rounded border bg-green-900/20 border-green-500/50">
                                        <div class="flex items-center justify-between mb-1">
                                          <span class="font-bold text-sm text-green-400">CURA</span>
                                          <span class="font-mono font-bold text-lg text-stone-200">{{ heal.total }}</span>
                                        </div>
                                        <div class="text-[10px] text-stone-400 font-mono break-words leading-tight">{{ heal.log }}</div>
                                      </div>
                                    }
                                  </div>
                                }`;

const replacement = `                                <!-- Attack Roll -->
                                @if (ability.attackBonus !== undefined && ability.attackBonus !== null) {
                                  <div>
                                    @if (!isManualRollingAttack()) {
                                      <button (click)="startManualAbilityRoll('attack')" class="w-full py-1.5 bg-amber-600 hover:bg-amber-500 text-stone-900 font-bold rounded shadow-lg transition-colors flex items-center justify-center gap-2">
                                        <mat-icon style="font-size: 16px; width: 16px; height: 16px;">casino</mat-icon>
                                        ROLAR ATAQUE (d20)
                                      </button>
                                    } @else {
                                      <div class="bg-stone-800 border border-stone-700 rounded p-2">
                                        <div class="block text-[10px] font-bold text-amber-500 mb-1 text-center">Digite o valor do d20</div>
                                        <div class="flex gap-1">
                                          <input type="number" 
                                                 [ngModel]="manualAttackRollValue()" 
                                                 (ngModelChange)="manualAttackRollValue.set($event)"
                                                 class="flex-1 bg-stone-900 border border-stone-600 rounded px-2 py-1 text-center font-mono font-bold text-sm focus:outline-none focus:border-amber-500"
                                                 placeholder="1 a 20"
                                                 (keyup.enter)="confirmAbilityRoll('attack')">
                                          <button (click)="confirmAbilityRoll('attack')" class="bg-green-600 hover:bg-green-500 text-white px-2 rounded font-bold transition-colors text-xs">OK</button>
                                          <button (click)="cancelManualAbilityRoll()" class="bg-stone-700 hover:bg-stone-600 text-white px-2 rounded transition-colors"><mat-icon style="font-size: 14px; width: 14px; height: 14px;">close</mat-icon></button>
                                        </div>
                                      </div>
                                    }
                                    @if (lastAbilityResult()?.attack; as atk) {
                                      <div class="mt-2 p-2 rounded border bg-stone-800 border-stone-600">
                                        <div class="flex items-center justify-between mb-1">
                                          <span class="font-bold text-sm" [class.text-green-400]="atk.success" [class.text-red-400]="!atk.success">
                                            {{ atk.success ? 'SUCESSO!' : 'FALHA...' }}
                                          </span>
                                          <span class="font-mono font-bold text-lg text-stone-200">{{ atk.roll.total }}</span>
                                        </div>
                                        <div class="text-[10px] text-stone-400 font-mono break-words leading-tight">{{ atk.roll.log }}</div>
                                        @if (atk.roll.isCritical) { <div class="mt-1 text-[10px] font-bold text-amber-400 uppercase tracking-widest text-center">Sucesso Crítico!</div> }
                                        @if (atk.roll.isCriticalFail) { <div class="mt-1 text-[10px] font-bold text-red-500 uppercase tracking-widest text-center">Falha Crítica!</div> }
                                      </div>
                                    }
                                  </div>
                                }
                                
                                <!-- Damage/Healing Roll -->
                                @if ((ability.damage || ability.healing) && (ability.attackBonus === undefined || ability.attackBonus === null || lastAbilityResult()?.attack)) {
                                  <div class="animate-in fade-in slide-in-from-top-2">
                                    @if (!isManualRollingDamage()) {
                                      <button (click)="startManualAbilityRoll('damage')" class="w-full py-1.5 bg-red-800 hover:bg-red-700 text-stone-200 font-bold rounded shadow-lg transition-colors flex items-center justify-center gap-2">
                                        <mat-icon style="font-size: 16px; width: 16px; height: 16px;">bloodtype</mat-icon>
                                        ROLAR {{ ability.damage ? 'DANO' : 'CURA' }} ({{ ability.damage || ability.healing }})
                                      </button>
                                    } @else {
                                      <div class="bg-stone-800 border border-stone-700 rounded p-2">
                                        <div class="block text-[10px] font-bold text-red-400 mb-1 text-center">Digite o valor do {{ ability.damage || ability.healing }}</div>
                                        <div class="flex gap-1">
                                          <input type="number" 
                                                 [ngModel]="manualDamageRollValue()" 
                                                 (ngModelChange)="manualDamageRollValue.set($event)"
                                                 class="flex-1 bg-stone-900 border border-stone-600 rounded px-2 py-1 text-center font-mono font-bold text-sm focus:outline-none focus:border-red-500"
                                                 placeholder="Valor"
                                                 (keyup.enter)="confirmAbilityRoll('damage')">
                                          <button (click)="confirmAbilityRoll('damage')" class="bg-green-600 hover:bg-green-500 text-white px-2 rounded font-bold transition-colors text-xs">OK</button>
                                          <button (click)="cancelManualAbilityRoll()" class="bg-stone-700 hover:bg-stone-600 text-white px-2 rounded transition-colors"><mat-icon style="font-size: 14px; width: 14px; height: 14px;">close</mat-icon></button>
                                        </div>
                                      </div>
                                    }
                                    @if (lastAbilityResult()?.damage; as dmg) {
                                      <div class="mt-2 p-2 rounded border bg-red-900/20 border-red-500/50">
                                        <div class="flex items-center justify-between mb-1">
                                          <span class="font-bold text-sm text-red-400">DANO</span>
                                          <span class="font-mono font-bold text-lg text-stone-200">{{ dmg.total }}</span>
                                        </div>
                                        <div class="text-[10px] text-stone-400 font-mono break-words leading-tight">{{ dmg.log }}</div>
                                      </div>
                                    }
                                    @if (lastAbilityResult()?.healing; as heal) {
                                      <div class="mt-2 p-2 rounded border bg-green-900/20 border-green-500/50">
                                        <div class="flex items-center justify-between mb-1">
                                          <span class="font-bold text-sm text-green-400">CURA</span>
                                          <span class="font-mono font-bold text-lg text-stone-200">{{ heal.total }}</span>
                                        </div>
                                        <div class="text-[10px] text-stone-400 font-mono break-words leading-tight">{{ heal.log }}</div>
                                      </div>
                                    }
                                  </div>
                                }`;

// The target string is missing the `</div>` at the end of the Attack Roll block because I messed it up in the previous replace.
// Let's use regex to match the whole block.

const regex = /                                <!-- Attack Roll -->[\s\S]*?<!-- Damage\/Healing Roll -->[\s\S]*?                                  <\/div>\n                                \}/g;

content = content.replace(regex, replacement);

fs.writeFileSync('src/app/components/right-panel/right-panel.component.ts', content);
console.log("Done");
