export interface iSchoolInfoProps {
  student_id: string;
  matric_no: string;
  first_name: string;
  last_name: string;
  createdAt: null;
  updatedAt: null;
  school: string;
  outstanding_fee: OutstandingFee;
  student: Student;
}

export interface OutstandingFee {
  bills_title: string;
  session: string;
  amount: string;
}

export interface Student {
  student_id: string;
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  gender: string;
  email: string;
  address: string;
  phone_number: string;
  username: string;
  password: string;
  profile_picture_url: string;
  faculty: string;
  department: string;
  createdAt: Date;
  updatedAt: Date;
  saved_posts: null;
  school: string;
  matric_no: string;
}
