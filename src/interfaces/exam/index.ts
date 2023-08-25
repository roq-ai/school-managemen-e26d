import { UserInterface } from 'interfaces/user';
import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface ExamInterface {
  id?: string;
  name: string;
  date: any;
  total_marks: number;
  obtained_marks?: number;
  user_id: string;
  school_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  school?: SchoolInterface;
  _count?: {};
}

export interface ExamGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  user_id?: string;
  school_id?: string;
}
