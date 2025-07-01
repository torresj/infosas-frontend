import {StaffExamType} from './staffExamType';

export default interface StaffExam{
  type: StaffExamType;
  shift: string;
  provisional: boolean;
  total: number;
  op: number;
  con: number;
  position: number;
  examYear: number;
}
