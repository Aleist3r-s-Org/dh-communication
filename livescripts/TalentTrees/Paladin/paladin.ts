import { EmptyPrereqs, EmptySpellArray, SetChoiceNode, SetTalentNode, SpecTabs } from "../TalentTreeLoader"

export function ReloadPalTree() {
    let TAB: uint32 = 52
    let CLASS = 2

    QueryWorld(`Delete from forge_talents where talentTabId = ${TAB}`)
    QueryWorld(`Delete from forge_talent_prereq where talentTabId = ${TAB}`)
    QueryWorld(`Delete from forge_talent_ranks where talentTabId = ${TAB}`)
    QueryWorld(`Delete from forge_talent_unlearn where talentTabId = ${TAB}`)

    let Talent : uint32 = GetID(`Spell`, `dh-spells`, `pal-gen-loh`)
    SetTalentNode(Talent, TAB, 3, 1, 0, false, 2**(SpecTabs.HPAL - 1), CreateArray<uint32>([Talent]), EmptyPrereqs, EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-divinesteed`)
    SetTalentNode(Talent, TAB, 6, 1, 0, false, 2**(SpecTabs.PPAL - 1), CreateArray<uint32>([Talent]), EmptyPrereqs, EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-exorcism`)
    SetTalentNode(Talent, TAB, 9, 1, 0, false, 2**(SpecTabs.RPAL - 1), CreateArray<uint32>([Talent]), EmptyPrereqs, EmptySpellArray, EmptySpellArray)
    
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-sotp`)
    SetTalentNode(Talent, TAB, 5, 2, 0, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-loh`)]: 1, [GetID(`Spell`, 'dh-spells', 'pal-gen-divinesteed')]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-pursuitofjustice`)
    SetTalentNode(Talent, TAB, 6, 2, 0, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-divinesteed`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-sanctified-plaets`)
    SetTalentNode(Talent, TAB, 7, 2, 0, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-divinesteed`)]: 1, [GetID(`Spell`, 'dh-spells', 'pal-gen-exorcism')]: 1}), EmptySpellArray, EmptySpellArray)
    
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-all-good-deeds`)
    SetTalentNode(Talent, TAB, 3, 3, 0, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-loh`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-healinglight`)
    SetTalentNode(Talent, TAB, 4, 3, 0, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-sotp`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-rebuke`)
    SetTalentNode(Talent, TAB, 6, 3, 0, false, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-sotp`)]: 1, [GetID(`Spell`, 'dh-spells', 'pal-gen-pursuitofjustice')]: 1, [GetID(`Spell`, 'dh-spells', 'pal-gen-sanctified-plaets')]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-crusade`)
    SetTalentNode(Talent, TAB, 8, 3, 0, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-sanctified-plaets`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-evil-be-judged`)
    SetTalentNode(Talent, TAB, 9, 3, 0, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-exorcism`)]: 1}), EmptySpellArray, EmptySpellArray)
    
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-purify`)
    SetTalentNode(Talent, TAB, 3, 4, 0, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-all-good-deeds`)]: 1, [GetID(`Spell`, `dh-spells`, `pal-gen-healinglight`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-replenishing-strikes`)
    SetTalentNode(Talent, TAB, 5, 4, 0, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-rebuke`)]: 1, [GetID(`Spell`, `dh-spells`, `pal-gen-healinglight`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-punishment`)
    SetChoiceNode(Talent, TAB, 6, 4, 0, true, CreateArray<uint32>([Talent, GetID(`Spell`, `dh-spells`, `pal-gen-example`)]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, 'dh-spells', 'pal-gen-rebuke')]: 1}), EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-no-mercy-for-the-wicked`)
    SetTalentNode(Talent, TAB, 7, 4, 0, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-rebuke`)]: 1, [GetID(`Spell`, `dh-spells`, `pal-gen-crusade`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-seals-of-the-just`)
    SetTalentNode(Talent, TAB, 9, 4, 0, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-crusade`)]: 1, [GetID(`Spell`, `dh-spells`, `pal-gen-evil-be-judged`)]: 1}), EmptySpellArray, EmptySpellArray)

    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-divinefavor`)
    SetTalentNode(Talent, TAB, 3, 5, 8, false, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-purify`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-consecratedground`)
    SetTalentNode(Talent, TAB, 4, 5, 8, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-purify`)]: 1, [GetID(`Spell`, `dh-spells`, `pal-gen-replenishing-strikes`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-benediction`)
    SetTalentNode(Talent, TAB, 5, 5, 8, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-replenishing-strikes`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-crusadersreprieve`)
    SetTalentNode(Talent, TAB, 6, 5, 8, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-no-mercy-for-the-wicked`)]: 1, [GetID(`Spell`, `dh-spells`, `pal-gen-replenishing-strikes`)]: 1, [GetID(`Spell`, `dh-spells`, `pal-gen-punishment`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-eyeforaneye`)
    SetTalentNode(Talent, TAB, 7, 5, 8, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-no-mercy-for-the-wicked`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-longersentence`)
    SetTalentNode(Talent, TAB, 8, 5, 8, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-seals-of-the-just`)]: 1, [GetID(`Spell`, `dh-spells`, `pal-gen-no-mercy-for-the-wicked`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-repentance`)
    SetTalentNode(Talent, TAB, 9, 5, 8, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-seals-of-the-just`)]: 1}), EmptySpellArray, EmptySpellArray)
    
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-empoweredfavor`)
    SetTalentNode(Talent, TAB, 3, 6, 8, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-divinefavor`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-goldenpath`)
    SetTalentNode(Talent, TAB, 4, 6, 8, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-divinefavor`)]: 1, [GetID(`Spell`, `dh-spells`, `pal-gen-consecratedground`)]: 1, [GetID(`Spell`, `dh-spells`, `pal-gen-benediction`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-crusadersdetermination`)
    SetTalentNode(Talent, TAB, 6, 6, 8, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-eyeforaneye`)]: 1, [GetID(`Spell`, `dh-spells`, `pal-gen-benediction`)]: 1, [GetID(`Spell`, `dh-spells`, `pal-gen-crusadersreprieve`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-crusader`)
    SetTalentNode(Talent, TAB, 8, 6, 8, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-eyeforaneye`)]: 1, [GetID(`Spell`, `dh-spells`, `pal-gen-longersentence`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-sappedstrength`)
    SetTalentNode(Talent, TAB, 9, 6, 8, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-repentance`)]: 1}), EmptySpellArray, EmptySpellArray)
    
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-handofmercy`)
    SetTalentNode(Talent, TAB, 3, 7, 8, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-empoweredfavor`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-handsofcourage`)
    SetChoiceNode(Talent, TAB, 4, 7, 8, true, CreateArray<uint32>([Talent, GetID(`Spell`, `dh-spells`, `pal-gen-handsofvalor`)]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, 'dh-spells', 'pal-gen-goldenpath')]: 1, [GetID(`Spell`, 'dh-spells', 'pal-gen-empoweredfavor')]: 1}), EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-arbiteroflight`)
    SetTalentNode(Talent, TAB, 5, 7, 8, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-goldenpath`)]: 1, [GetID(`Spell`, `dh-spells`, `pal-gen-crusadersdetermination`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-vengeful`)
    SetChoiceNode(Talent, TAB, 6, 7, 8, true, CreateArray<uint32>([Talent, GetID(`Spell`, `dh-spells`, `pal-gen-wrathful`)]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, 'dh-spells', 'pal-gen-crusadersdetermination')]: 1}), EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-swiftjustice`)
    SetTalentNode(Talent, TAB, 7, 7, 8, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-crusadersdetermination`)]: 1, [GetID(`Spell`, `dh-spells`, `pal-gen-crusader`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-denounceevil`)
    SetTalentNode(Talent, TAB, 8, 7, 8, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-crusader`)]: 1, [GetID(`Spell`, `dh-spells`, `pal-gen-sappedstrength`)]: 1}), EmptySpellArray, EmptySpellArray)
    Talent = GetID(`Spell`, `dh-spells`, `pal-gen-justification`)
    SetTalentNode(Talent, TAB, 9, 7, 8, true, 0, CreateArray<uint32>([Talent]), CreateDictionary<uint32, uint8>({[GetID(`Spell`, `dh-spells`, `pal-gen-sappedstrength`)]: 1}), EmptySpellArray, EmptySpellArray)
}