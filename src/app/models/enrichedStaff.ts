import StaffExam from './staffExam';
import StaffJobBank from './staffJobBank';
import StaffSpecificJobBank from './staffSpecificJobBank';

export default interface EnrichedStaff{
  id: number;
  name: string;
  surname: string;
  dni: string;
  staffExams: StaffExam[];
  staffJobBanks: StaffJobBank[];
  staffSpecificJobBanks: StaffSpecificJobBank[]
}
