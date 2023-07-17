# Social Media Web App
1. # Project summary
----------------

This is a Social Media Web App which has login/registration functionality, loggedin user able to create view update delete a post. Also there is functionality to like unlike, comment a post. and view profile page as well.


2. # Project URL
----------------

https://merng-client-lemon.vercel.app/

4. # Technology Stack used
-----------------
client:
HTML5/CSS3, JavaScript, React, Apollo-Client
Backend:
GraphQL, Apollo-Server, Node, Express, MongoDB, JWT Auth
Deployment: Vercel

5. # Functional Requirements/Acceptance Criteria
-----------------
##### Feature: User Registration and Login

**Given** a user is on the web app's landing page
**When** the user clicks on the "Register" button
**Then** the user should be redirected to the registration page

**Given** a user is on the registration page
**When** the user enters valid registration details and clicks on the "Submit" button
**Then** the user should be registered and redirected to the login page

**Given** a user is on the web app's landing page
**When** the user clicks on the "Login" button
**Then** the user should be redirected to the login page

**Given** a registered user is on the login page
**When** the user enters valid login credentials and clicks on the "Login" button
**Then** the user should be logged in and redirected to the home page

##### Feature: Post Management

**Given** a logged-in user is on the home page
**When** the user clicks on the "Create Post" button
**Then** the user should be redirected to the post creation page

**Given** a logged-in user is on the post creation page
**When** the user enters valid post content and clicks on the "Publish" button
**Then** the post should be created and displayed on the home page

**Given** a logged-in user is on the home page
**When** the user clicks on the "Edit" button next to a post
**Then** the user should be redirected to the post editing page

**Given** a logged-in user is on the post editing page
**When** the user modifies the post content and clicks on the "Update" button
**Then** the post should be updated and the changes should be reflected on the home page

**Given** a logged-in user is on the home page
**When** the user clicks on the "Delete" button next to a post
**Then** the post should be deleted and removed from the home page

##### Feature: Interacting with Posts

**Given** a logged-in user is on the home page
**When** the user clicks on the "Like" button next to a post
**Then** the post's like count should increase by one

**Given** a logged-in user is on the home page
**When** the user clicks on the "Unlike" button next to a post
**Then** the post's like count should decrease by one

**Given** a logged-in user is on the home page
**When** the user clicks on the "Comment" button next to a post
**Then** the user should be redirected to the post's comments section

**Given** a logged-in user is on a post's comments section
**When** the user enters a comment and clicks on the "Submit" button
**Then** the comment should be added to the post's comments list and displayed

##### Feature: Viewing Profile Page

**Given** a logged-in user is on the home page
**When** the user clicks on their username or profile picture
**Then** the user should be redirected to their profile page

**Given** a logged-in user is on their profile page
**Then** the user should be able to view their own posts, profile picture, and bio


6. # Test Data(if any)
-----------------

1. username: apple password: password
2. username: harryputtar@gmail.com password: password
3. username: orange password: password
   
7. # Screens
------------------
### Homepage (Not Logged in)
![image](https://github.com/seyedhaiderraza/merng-client/assets/129282622/fd01981b-9e0d-4824-b576-4937f9ee80af)

### Homepage (Logged in)
![image](https://github.com/seyedhaiderraza/merng-client/assets/129282622/3176ecd8-4c54-408e-b470-940bc06700c0)

### Create Post section
![image](https://github.com/seyedhaiderraza/merng-client/assets/129282622/484d5283-748d-4805-a731-1a4dc44dfd67)

### homepage Post
![image](https://github.com/seyedhaiderraza/merng-client/assets/129282622/ba63da0b-1f0e-4f74-ba09-ea481f1363af)

### Profile Page
![image](https://github.com/seyedhaiderraza/merng-client/assets/129282622/8db38b34-6f8c-4725-8bb5-97c9ff435f73)

### Login Page
![image](https://github.com/seyedhaiderraza/merng-client/assets/129282622/8e27fe29-9b39-4213-9c9e-c464a8d9f4fb)

### Register Page
![image](https://github.com/seyedhaiderraza/merng-client/assets/129282622/a6a04b42-ae39-4314-8e0c-060824ab654f)









