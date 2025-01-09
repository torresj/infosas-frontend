import {Status} from './status';
import {StaffJobBankType} from './staffJobBankType';
import ExclusionReason from './exclusionReason';

export default interface StaffJobBank{
  treaty: string;
  shift: string;
  status: Status;
  type: StaffJobBankType;
  exclusionReason: ExclusionReason;
  experience: number;
  formation: number;
  others: number;
  total: number;
}
