import {StaffType} from './staffType';

export default interface Staff{
  id: number;
  name: string;
  surname: string;
  types: [StaffType];
  dni: string;
  exams: number
  jobBanks: number;
  specificJobBanks: number;
}
