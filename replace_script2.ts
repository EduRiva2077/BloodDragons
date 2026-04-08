import * as fs from 'fs';

const path = 'src/app/components/right-panel/right-panel.component.ts';
let content = fs.readFileSync(path, 'utf8');

const target = `                                <!-- Attack Roll -->
                                <div>
                                  @if (!isManualRollingAttack()) {`;

console.log('Target found:', content.includes(target));
