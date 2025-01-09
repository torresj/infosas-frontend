import {StaffType} from './staffType';

export default interface Staff{
  id: number;
  name: string;
  surname: string;
  type: StaffType;
  dni: string;
  exams: number
  jobBanks: number;
  specificJobBanks: number;
}
