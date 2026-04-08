import * as fs from 'fs';

let content = fs.readFileSync('src/app/components/right-panel/right-panel.component.ts', 'utf8');

content = content.replace(/                                      @if \(atk\.roll\.isCriticalFail\) \{ <div class="mt-1 text-\[10px\] font-bold text-red-500 uppercase tracking-widest text-center">Falha Crítica!<\/div> \}\n                                    <\/div>\n                                  \}\n                                <\/div>/g,
  `                                      @if (atk.roll.isCriticalFail) { <div class="mt-1 text-[10px] font-bold text-red-500 uppercase tracking-widest text-center">Falha Crítica!</div> }
                                    </div>
                                  }
                                </div>
                              }`);

fs.writeFileSync('src/app/components/right-panel/right-panel.component.ts', content);
console.log("Done");
