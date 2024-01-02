export interface iPostsProps {
    post_id:        string;
    student_id:     string;
    title:          string;
    content:        string;
    createdAt:      Date;
    last_updated:   Date;
    is_published:   boolean;
    category:       string;
    attachment_url: string;
    updatedAt:      Date;
    student:        Student;
}

export interface Student {
    student_id:          string;
    first_name:          string;
    last_name:           string;
    date_of_birth:       Date;
    gender:              string;
    email:               string;
    address:             string;
    phone_number:        string;
    username:            string;
    password:            string;
    profile_picture_url: string;
    faculty:             string;
    department:          string;
    createdAt:           Date;
    updatedAt:           Date;
}