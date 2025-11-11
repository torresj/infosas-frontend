import {Status} from './status';
import ExclusionReason from './exclusionReason';
import {SasType} from "./SasType";

export default interface StaffSpecificJobBank{
  treaty: string;
  shift: string;
  general_admission: Status;
  specific_admission: Status;
  type: SasType;
  exclusionReasons: ExclusionReason[];
  experience: number;
  formation: number;
  others: number;
  total: number;
  provisional: boolean;
  cutOffYear: number;
}
