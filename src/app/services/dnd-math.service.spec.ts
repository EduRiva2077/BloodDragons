import { TestBed } from '@angular/core/testing';
import { DndMathService } from './dnd-math.service';

describe('DndMathService - Cálculos Base (D&D 5e)', () => {
  let service: DndMathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DndMathService);
  });

  it('deve calcular o Modificador de Atributo baseado nas regras oficiais', () => {
    // Math.floor((Score - 10) / 2)
    expect(service.calculateModifier(1)).toBe(-5);
    expect(service.calculateModifier(8)).toBe(-1);
    expect(service.calculateModifier(10)).toBe(0);
    expect(service.calculateModifier(11)).toBe(0);
    expect(service.calculateModifier(12)).toBe(1);
    expect(service.calculateModifier(15)).toBe(2);
    expect(service.calculateModifier(16)).toBe(3);
    expect(service.calculateModifier(20)).toBe(5);
    expect(service.calculateModifier(30)).toBe(10);
  });

  it('deve calcular o Bónus de Proficiência com base no nível (Math.ceil(level / 4) + 1)', () => {
    // Minimum lvl scenario
    expect(service.calculateProficiencyBonus(0)).toBe(2);
    
    // Tiers according to PHB
    expect(service.calculateProficiencyBonus(1)).toBe(2);
    expect(service.calculateProficiencyBonus(4)).toBe(2);
    
    expect(service.calculateProficiencyBonus(5)).toBe(3);
    expect(service.calculateProficiencyBonus(8)).toBe(3);
    
    expect(service.calculateProficiencyBonus(9)).toBe(4);
    expect(service.calculateProficiencyBonus(12)).toBe(4);
    
    expect(service.calculateProficiencyBonus(13)).toBe(5);
    expect(service.calculateProficiencyBonus(16)).toBe(5);
    
    expect(service.calculateProficiencyBonus(17)).toBe(6);
    expect(service.calculateProficiencyBonus(20)).toBe(6);
  });

  it('deve calcular os Pontos de Vida corretamente - Lvl 1: Dado Max + Mod. Con', () => {
    // 1D8 + 3 (CON mod is +3)
    const hp = service.calculateMaxHpGain(8, 3, true, false);
    expect(hp).toBe(11); // 8 + 3 = 11

    // Weak constitution edge case (Min 1)
    const hpWeak = service.calculateMaxHpGain(6, -6, true, false);
    expect(hpWeak).toBe(1);
  });

  it('deve calcular os Pontos de Vida (Subsequente Médio arredondado p/ cima) corretamente', () => {
    // HitDie 8 (avg 4.5 -> 5) + Mod Con 2 => 5 + 2 = 7
    const hpd8 = service.calculateMaxHpGain(8, 2, false, false);
    expect(hpd8).toBe(7);

    // HitDie 10 (avg 5.5 -> 6) + Mod Con 3 => 6 + 3 = 9
    const hpd10 = service.calculateMaxHpGain(10, 3, false, false);
    expect(hpd10).toBe(9);

    // HitDie 6 (avg 3.5 -> 4) + Mod Con -1 => 4 - 1 = 3
    const hpd6 = service.calculateMaxHpGain(6, -1, false, false);
    expect(hpd6).toBe(3);
  });

  it('deve calcular HP somado correto até do nível do jogador (Teórico)', () => {
    // Fighter lvl 3 (hit die 10), con 14 (mod +2).
    // Nvl 1 = 10 + 2 = 12. Nvl 2 = 6 + 2 = 8. Nvl 3 = 6 + 2 = 8.
    // Total = 12 + 8 + 8 = 28.
    const fighterHp = service.calculateTotalMaxHp(3, 10, 14);
    expect(fighterHp).toBe(28);

    // Wizard lvl 5 (hit die 6), con 10 (mod 0).
    // Nvl 1 = 6 + 0 = 6. Nvl 2,3,4,5 = 4 each (16 total). Total = 22.
    const wizardHp = service.calculateTotalMaxHp(5, 6, 10);
    expect(wizardHp).toBe(22);
  });

});
