import {Status} from './status';
import ExclusionReason from './exclusionReason';
import {SasType} from "./SasType";

export default interface StaffJobBank{
  treaty: string;
  shift: string;
  status: Status;
  type: SasType;
  exclusionReasons: ExclusionReason[];
  experience: number;
  formation: number;
  others: number;
  total: number;
  provisional: boolean;
  cutOffYear: number;
}
