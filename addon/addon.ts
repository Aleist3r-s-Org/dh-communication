import { ComboPointUI } from "./dh-ui/dh-actions/ComboPoints";
import { SecondaryPowerUI } from "./dh-ui/dh-powertype/PowerType";
import { TalentTreeUI } from "./dh-ui/dh-talent/TalentTree";
import { tooltipInfo } from "./internal-ids";

TalentTreeUI()
ComboPointUI()
SecondaryPowerUI()
//this will have errors if you didnt build data once
_G['tooltipInfo'] = tooltipInfo