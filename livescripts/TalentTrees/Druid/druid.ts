import { EmptyPrereqs, EmptySpellArray, SetChoiceNode, SetTalentNode } from "../TalentTreeLoader"

export function ReloadDruidTree() {
    let TAB: uint32 = 61

    QueryWorld(`Delete from forge_talents where talentTabId = ${TAB}`)
    QueryWorld(`Delete from forge_talent_prereq where talentTabId = ${TAB}`)
    QueryWorld(`Delete from forge_talent_ranks where talentTabId = ${TAB}`)
    QueryWorld(`Delete from forge_talent_unlearn where talentTabId = ${TAB}`)



}