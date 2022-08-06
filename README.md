# The Masked Grader
What’s is the Masked Grader?
As a student, have you ever received a grade that you thought was unjustified, unfair or biased? Well, what if there a way for you to submit your work for a grade while masking your personal identity on the part of the grader. That’s where “The Masked Grader” comes in. The way that it works is simple:

- Instructor creates exam and exam questions
- Instructor sends the exam to students to complete the exam online through the authenticated front-end interface
- Students complete the exam and submit for grading
- Instructor receives all student exams in a single batch with a randomized identifier associated with each exam (thereby ‘masking’ the identity of the student who submitted the exam)
- Instructor assigns a grade to all exams
- System retains all exam results until the Instructor has completed the grading process(thereby preventing the instructors/students from triangulating identity based on submission time)
- System distributed grades to students in batch after the instructor has completed the grading process.
- System ‘unmasks’ the student identity to the instructor after grades have been distributed to the student body

Deliverables: 

1. Define an application schema to include the following data models:

- Students
- Instructors
- Courses
- Course Enrollments
- Examinations
- Examination Results (i.e. grades)
- Examination Feedback

2. Build database based on data model using open source database platform, Postgres

3. Create front-end user interface to allow for authentication, exam distribution, grading and automated exam result distribution

How will we build it?
The modern technology stack changes on a daily basis. Our goal for this project is to rely on tried and true platforms, with a blend of what students are likely to encounter in the modern work environment. These tools include (but may not be limited to):

- Team Communications - Slack
- Data Modeling - Airtable (Yes, Airtable…it’ll make sense later), Prisma (Database Object Relational Mapping)
- Databases - SQL (Database querying and management), PopSQL (modern SQL interface)
-APIs - Postman (API development and testing), StepZen (GraphQL endpoint) Note: StepZen will be optional based on available time.
- Front-End Design - React, HTML and CSS, Typescript/Javascript
- Application Logic - Typescript (Javascript with Type-safety)
- Source Control - Git & Github (Collaboration, Source Control, Modern DevOps (ie. CI / CD))
- Cloud Deployment - Netlify (Front End), Supasbse (Postgres backend)

Tech Stack:
    Git (Version Control)
    GraphQL APIs
    Javascript
    React
    REST APIs
    MySQL/Postgres/MSSQL
    Typescript
