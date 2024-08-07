import { EmptyPrereqs, EmptySpellArray, SetChoiceNode, SetTalentNode, SpecTabs } from "../TalentTreeLoader"

export function ReloadDruidTree() {
    let TAB: uint64 = 61

    QueryWorld(`Delete from forge_talents where talentTabId = ${TAB}`)
    QueryWorld(`Delete from forge_talent_prereq where talentTabId = ${TAB}`)
    QueryWorld(`Delete from forge_talent_ranks where talentTabId = ${TAB}`)
    QueryWorld(`Delete from forge_talent_unlearn where talentTabId = ${TAB}`)

    let Talent : uint32 = GetID(`Spell`, 'dh-spells', `dru-gen-pounce`)
    SetTalentNode(Talent, TAB, 3, 1, 0, false, 2**(SpecTabs.FERA-1), CreateArray<uint32>([Talent]), EmptyPrereqs, EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `dru-gen-frenziedregen`)
    SetTalentNode(Talent, TAB, 5, 1, 0, false, 2**(SpecTabs.GUAR-1), CreateArray<uint32>([Talent]), EmptyPrereqs, EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `dru-gen-lifebloom`)
    SetTalentNode(Talent, TAB, 7, 1, 0, false, 2**(SpecTabs.RDRU-1), CreateArray<uint32>([Talent]), EmptyPrereqs, EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `dru-gen-typhoon`)
    SetTalentNode(Talent, TAB, 9, 1, 0, false, 2**(SpecTabs.BALD-1), CreateArray<uint32>([Talent]), EmptyPrereqs, EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `dru-gen-effortlessinitiation`)
    SetChoiceNode(Talent, TAB, 3, 2, 0, true, CreateArray<uint32>([Talent, GetID(`Spell`, `dh-spells`, `dru-gen-visceralinitiation`)]), CreateDictionary<uint32, uint8>({[GetID('Spell', 'dh-spells', 'dru-gen-pounce')]: 1}), EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `dru-gen-goldrinnsfury`)
    SetTalentNode(Talent, TAB, 4, 2, 0, false, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `dru-gen-pounce`)]: 1, [GetID(`Spell`, `dh-spells`, `dru-gen-frenziedregen`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `dru-gen-powerfrenzied`)
    SetTalentNode(Talent, TAB, 5, 2, 0, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `dru-gen-frenziedregen`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `dru-gen-naturesgrasp`)
    SetTalentNode(Talent, TAB, 6, 2, 0, false, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `dru-gen-lifebloom`)]: 1, [GetID(`Spell`, `dh-spells`, `dru-gen-frenziedregen`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `dru-gen-greaterbloom`)
    SetTalentNode(Talent, TAB, 7, 2, 0, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `dru-gen-lifebloom`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `dru-gen-summontreants`)
    SetTalentNode(Talent, TAB, 8, 2, 0, false, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `dru-gen-lifebloom`)]: 1, [GetID(`Spell`, `dh-spells`, `dru-gen-typhoon`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `dru-gen-galewinds`)
    SetChoiceNode(Talent, TAB, 9, 2, 0, true, CreateArray<uint32>([Talent, GetID(`Spell`, `dh-spells`, `dru-gen-forcefulwinds`)]), CreateDictionary<uint32, uint8>({[GetID('Spell', 'dh-spells', 'dru-gen-typhoon')]: 1}), EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `dru-gen-gofortheeyes`)
    SetTalentNode(Talent, TAB, 4, 3, 0, false, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `dru-gen-goldrinnsfury`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `dru-gen-dota`)
    SetTalentNode(Talent, TAB, 6, 3, 0, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `dru-gen-naturesgrasp`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `dru-gen-solarflash`)
    SetTalentNode(Talent, TAB, 8, 3, 0, false, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `dru-gen-summontreants`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `dru-gen-setupandkill`)
    SetTalentNode(Talent, TAB, 3, 4, 0, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `dru-gen-gofortheeyes`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `dru-gen-killerinstinct1`)
    SetTalentNode(Talent, TAB, 4, 4, 0, true, 0, CreateArray<uint32>([Talent, GetID(`Spell`, `dh-spells`, `dru-gen-killerinstinct2`)]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `dru-gen-gofortheeyes`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `dru-gen-ironfur`)
    SetTalentNode(Talent, TAB, 5, 4, 0, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `dru-gen-gofortheeyes`)]: 1, [GetID(`Spell`, `dh-spells`, `dru-gen-dota`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `dru-gen-leiofthelifegiver`)
    SetTalentNode(Talent, TAB, 7, 4, 0, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `dru-gen-solarflash`)]: 1, [GetID(`Spell`, `dh-spells`, `dru-gen-dota`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `dru-gen-nurturinginstinct1`)
    SetTalentNode(Talent, TAB, 8, 4, 0, true, 0, CreateArray<uint32>([Talent, GetID(`Spell`, `dh-spells`, `dru-gen-nurturinginstinct2`)]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `dru-gen-solarflash`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `dru-gen-returntonight`)
    SetTalentNode(Talent, TAB, 9, 4, 0, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `dru-gen-solarflash`)]: 1}), EmptySpellArray, EmptySpellArray)
    
}