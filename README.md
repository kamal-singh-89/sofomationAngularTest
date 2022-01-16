# SofomationAngularTest

## problem

<pre>
Angular Developer Test V3
Overview
Create a new Angular application to manage users. This document documents the mandatory
and optional requirements. As this is a frontend task, an API with data is provided (see API).
We will be looking at:
• The quality of your code and project (is it clear and efficient, is it well organised)
• The functionality of your application (can it do what it needs to)
• The usability of your application (is it easy/enjoyable to use)
• The design of your application (how does it look)
You are encouraged to use your experience and creativity to enhance the application's
functionality, usability and design in any way you wish.
You should upload your files to a public repository or host your files in an online development
environment such as StackBlitz or CodeSandbox.
Features
The application should perform the following 2 main functions (feature 2 is optional). How you
choose to provide these in the user interface is up to you.
• Feature 1 (mandatory): Display a list of all users, showing their 'First name', 'Last name', 'Date
of birth', 'Gender' and 'Status'.
• Feature 2 (optional): Provide the ability to add a new user, including their 'First name', 'Last
name', 'Date of birth' and 'Gender'. 'First name' and 'Last name' should be mandatory, but
'Date of birth' and 'Gender' should be optional. Your code should assign users with a status of
"Active" when passing them to the POST endpoint to add them.
Each user has the following attributes:
• First name (string)
• Last name (string)
• Date of birth (string)
• Gender ("Male", "Female", or "Not specified")
• Status ("Active" or "Suspended")
Technical Requirements
The application must:
• Be created using Angular 8 or higher.
• Include a lazy-loaded module.
• Include the use of a built-in directive.
• Include types, interfaces and enums where appropriate.
• Include some basic styling with Sass (.scss).
• Be responsive to support any size device/screen.
• Clearly inform the user what is happening throughout their use of the application.
The application should optionally:
• Include routing to display content based on URL.
• Include reactive forms with validators.
• Include one or more Angular Material components (https://material.angular.io/components/
categories).
API
There are two public endpoints available in the API for you to use.
Note: When calling the API you must include the following header:
'Authorization': 'Bearer key3GnfHvdYoWedr5'
• GET https://api.airtable.com/v0/appzoLh5b0y8mV3WF/Angular-Test-Users
Returns a list of users.
Response:
{
 "records": {
 id: string;
 fields: {
 "Date of Birth": string;
 "Status": "Active" | "Suspended";
 "First Name": string;
 "Gender": "Male" | "Female" | "Not specified";
 "Last Name": string;
 };
 "createdTime": string;
 }[];
 "offset": string;
}
• POST https://api.airtable.com/v0/appzoLh5b0y8mV3WF/Angular-Test-Users
Adds a user. Optional.
Payload:
{
 fields: {
 "First Name": "Bart",
 "Last Name": "Simpson",
 "Date of Birth": "1980-11-23",
 "Status": "Active",
 "Gender": "Male"
 }
}
Response:
{
 id: string;
 fields: {
 "Date of Birth": string;
 "Status": "Active" | "Suspended";
 "First Name": string;
 "Gender": "Male" | "Female" | "Not specified";
 "Last Name": string;
 };
 "createdTime": string;
} 

</pre>

## to run projet use ng serve command
# sofomationAngularTest
