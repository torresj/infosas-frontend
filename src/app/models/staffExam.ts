import {SasType} from "./SasType";


export default interface StaffExam{
  type: SasType;
  shift: string;
  provisional: boolean;
  total: number;
  op: number;
  con: number;
  position: number;
  examYear: number;
}
