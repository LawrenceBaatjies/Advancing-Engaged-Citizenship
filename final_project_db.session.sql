CREATE  DATABASE advancing_engaged_citizenship;



CREATE  TABLE  advisors(

id            	SERIAL PRIMARY KEY,              
advisors_id     INT NOT NULL,
advisor_name   	VARCHAR(255) NOT NULL UNIQUE,
cell_number   	VARCHAR(15) NOT NULL,
email          	VARCHAR(255) NOT NULL,
password       	VARCHAR(255) NOT NULL UNIQUE

);

SELECT * FROM advisors;


CREATE TABLE students (

id            		 SERIAL PRIMARY KEY,  
student_id        	 INT NOT NULL,
student_name 		 VARCHAR(255) NOT NULL,
cell_number          VARCHAR(15)  NOT NULL,
email                VARCHAR(255) NOT NULL,
password             VARCHAR(255) NOT NULL UNIQUE

);

SELECT * FROM students;


CREATE TABLE projects (

id            	SERIAL PRIMARY KEY,  
student_id      INT NOT NULL,
advisor_id      INT NOT NULL,
project_name    VARCHAR NOT NULL,
project_status  VARCHAR NOT NULL

);

SELECT * FROM projects;

CREATE TABLE project_proposal (

id            			SERIAL PRIMARY KEY,  
project_name_id			VARCHAR(255) NOT NULL,
problem_statement_id    	VARCHAR(255) NOT NULL,
proposed_action_id  	VARCHAR(500) NOT NULL,
project_status_id   	VARCHAR(255) NOT NULL
);

SELECT * FROM project_proposal;
