import {Status} from './status';
import ExclusionReason from './exclusionReason';
import {StaffSpecificJobBankType} from './staffSpecificJobBankType';

export default interface StaffSpecificJobBank{
  treaty: string;
  shift: string;
  general_admission: Status;
  specific_admission: Status;
  type: StaffSpecificJobBankType;
  exclusionReasons: ExclusionReason[];
  experience: number;
  formation: number;
  others: number;
  total: number;
  provisional: boolean;
}
