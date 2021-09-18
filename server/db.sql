CREATE 
    DATABASE 
        final_project_db;



CREATE TABLE admin (

    id                   SERIAL PRIMARY KEY,
    admin_id             INT NOT NULL GENERATED ALWAYS AS IDENTITY,
    admin_name           VARCHAR(63) NOT NULL, NOT NULL,
    admin_phone          VARCHAR(15)  NOT NULL,
    admin_email          VARCHAR(255) NOT NULL,
    admin_password       VARCHAR(8) NOT NULL UNIQUE 

)

CREATE TABLE edit_admin_profile (

   id                     SERIAL PRIMARY KEY,
   edit_admin_profile_id  INT NOT NULL,
   edit_admin_id          INT NOT NULL,
   edit_admin_name        VARCHAR(63) NOT NULL,
   edit_admin_surname     VARCHAR(63) NOT NULL,
   edit_admin_phone       VARCHAR(15) NOT NULL


)
 


CREATE  TABLE  mentor(

    id                      SERIAL PRIMARY KEY,            
    mentor_id               INT NOT NULL GENERATED ALWAYS AS IDENTITY,
    mentor_name         	VARCHAR(63) NOT NULL, UNIQUE,
    mentor_phone  	        VARCHAR(15) NOT NULL,
    mentor_email          	VARCHAR(255) NOT NULL,
    mentor_password       	VARCHAR(8) NOT NULL UNIQUE


);

CREATE TABLE edit_mentor_profile (

id                      SERIAL PRIMARY KEY, 
edit_mentor_profile_id  INT NOT NULL,
edit_mentor_name        VARCHAR(63) NOT NULL,
edit_mentor_surname     VARCHAR(63) NOT NULL,
edit_mentor_phone       VARCHAR(15) NOT NULL,

)

CREATE TABLE students (

    id                           SERIAL PRIMARY KEY,
    student_id        	         INT NOT NULL GENERATED ALWAYS AS IDENTITY,
    student_name 		         VARCHAR(255) NOT NULL,
    student_surname              VARCHAR(255) NOT NULL,
    student_phone                VARCHAR(15)  NOT NULL,
    student_email                VARCHAR(255) NOT NULL,
    student_password             VARCHAR(8) NOT NULL UNIQUE
    CONSTRAINT fk_advisor
    FOREIGN KEY(student_id) 
    REFERENCES advisors(advisor_id)

);


CREATE TABLE edit_student_profile (

id                           SERIAL PRIMARY KEY,
edit_student_profile_id      INT NOT NULL,
edit_students_name           VARCHAR(63) NOT NULL,
edit_students_surname        VARCHAR(63) NOT NULL,
edit_students_phone          VARCHAR(15) NOT NULL,



)


CREATE TABLE projects (

    id            	    SERIAL PRIMARY KEY, 
    admin_id            INT NOT NULL,
    student_id          INT NOT NULL,
    mentor_id           INT NOT NULL,
    project_name        VARCHAR(255) NOT NULL,
    project_status      VARCHAR(255) NOT NULL
    CONSTRAINT fk_students
    FOREIGN KEY(students_id) 
    REFERENCES projects.projects(id) 

);

CREATE TABLE my_projects (

id            	    SERIAL PRIMARY KEY, 
my_projects_id      INT NOT NULL,


)


CREATE TABLE new_projects (
id            	    SERIAL PRIMARY KEY, 
new_project_id      INT NOT NULL,
project_name        VARCHAR(63) NOT NULL,
project_summary     VARCHAR(255) NOT NULL,
project_description VARCHAR(500) NOT NULL,
CONSTRAINT fk_students
FOREIGN KEY(students_id) 
REFERENCES projects.projects(id) 

);



CREATE TABLE project_proposal (

    id            			    SERIAL PRIMARY KEY,  
    project_name_id			    VARCHAR(255) NOT NULL,
    problem_statement_id        VARCHAR(255) NOT NULL,
    proposed_action_id  	    VARCHAR(500) NOT NULL,
    project_status_id      	    VARCHAR(255) NOT NULL
    CONSTRAINT fk_students
    FOREIGN KEY(students_id) 
    REFERENCES projects.projects(id) 
);


CREATE ROLE admin_user [IDENTIFIED BY admin [REPLACE old_password]];
