import re

with open('src/app/components/right-panel/right-panel.component.ts', 'r') as f:
    content = f.read()

content = re.sub(r'<!-- Attack Roll -->\s*<div>\s*@if \(!isManualRollingAttack\(\)\) \{',
                 r'<!-- Attack Roll -->\n                                @if (ability.attackBonus !== undefined && ability.attackBonus !== null) {\n                                  <div>\n                                    @if (!isManualRollingAttack()) {',
                 content)

content = re.sub(r'  \}\n\s*</div>\n\s*<!-- Damage/Healing Roll -->\n\s*@if \(ability\.damage \|\| ability\.healing\) \{\n\s*<div>\n\s*@if \(!isManualRollingDamage\(\)\) \{',
                 r'  }\n                                  </div>\n                                }\n\n                                <!-- Damage/Healing Roll -->\n                                @if ((ability.damage || ability.healing) && (ability.attackBonus === undefined || ability.attackBonus === null || lastAbilityResult()?.attack)) {\n                                  <div class="animate-in fade-in slide-in-from-top-2">\n                                    @if (!isManualRollingDamage()) {',
                 content)

with open('src/app/components/right-panel/right-panel.component.ts', 'w') as f:
    f.write(content)

print("Done")
