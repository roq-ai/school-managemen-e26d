import { UserInterface } from 'interfaces/user';
import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface TimetableInterface {
  id?: string;
  day: string;
  period: number;
  subject: string;
  user_id: string;
  school_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  school?: SchoolInterface;
  _count?: {};
}

export interface TimetableGetQueryInterface extends GetQueryInterface {
  id?: string;
  day?: string;
  subject?: string;
  user_id?: string;
  school_id?: string;
}
