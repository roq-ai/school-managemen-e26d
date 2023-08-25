import { UserInterface } from 'interfaces/user';
import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface FeeInterface {
  id?: string;
  amount: number;
  due_date: any;
  status: string;
  user_id: string;
  school_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  school?: SchoolInterface;
  _count?: {};
}

export interface FeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  user_id?: string;
  school_id?: string;
}
