Social-Feed API Documentation

Practice project implementing OAuth 2.0 authentication, CRUD operations, and email flows using Nodemailer.
This repository includes a Postman collection for testing authentication, environment setup, and API endpoints.

📁 Collection

Social-Feed

🎯 Goal

Demonstrate:

OAuth 2.0 login & verification

CRUD for users, posts, comments, reactions, profiles, notifications

Transactional emails (Nodemailer)

🌐 Base URL
http://localhost:8000

📘 Swagger UI
http://localhost:8000/api

📑 Contents

Quick Start

Swagger UI

OAuth 2.0 Authentication Workflow

Email (Nodemailer) Behavior

Environments & Variables

Folders & Endpoints

Common Workflows

Testing & Automation in Postman

Troubleshooting

License

🚀 Quick Start

Start your API server at:

http://localhost:8000


Open Swagger UI:

http://localhost:8000/api


Open the Social-Feed Postman collection.

(Optional) Create a Postman environment:

baseUrl = http://localhost:8000
authToken = (token from login)


Run the authentication flow:

AUTH > REGISTER (optional)

AUTH > LOGIN

AUTH > VERIFY CODE (if using OTP)

Use the Bearer token to access protected endpoints.

Store authToken in environment variables for easier usage.

🔐 OAuth 2.0 Authentication Workflow
Auth Endpoints
Method	Endpoint	Description
POST	/authentication/register	Create new user
POST	/authentication/login	Authenticate & get access token
POST	/authentication/verify	Verify OTP or login code
POST	/authentication/logout	Invalidate session/token
Typical Sequence

Register (optional)

Login → receive JWT/access token

Verify code (if enabled)

Send Authorization: Bearer <token> for protected routes

Logout when finished

📧 Email (Nodemailer) Behavior

Nodemailer is used for:

Verification codes

Notification emails

If you're not receiving emails:

Verify SMTP host, port, and credentials

Check spam folder

Ensure the route triggering the email succeeds (2xx)

Confirm .env values like:

MAIL_HOST=
MAIL_PORT=
MAIL_USER=
MAIL_PASS=

🌍 Postman Environments & Variables
Recommended Variables
baseUrl = http://localhost:8000
authToken = <Bearer token>
userId
postId
commentId
notificationId
reactionId

Tips

Set Authorization as Bearer Token using {{authToken}}.

Use variables in paths:

{{baseUrl}}/users/{{userId}}/details

📂 Folders & Endpoints

Below are all endpoints grouped by feature.
Replace IDs with your actual values.

🔐 AUTH

POST /authentication/register

POST /authentication/login

POST /authentication/verify

POST /authentication/logout

👤 USER

GET /users

PATCH /users/{id}

GET /users/{id}/details

GET /users/current

DELETE /users/{id}

GET /users/name?firstname=Test

🧩 PROFILE

GET /profile

POST /profile

PATCH /profile

DELETE /profile

📝 POST

POST /posts

DELETE /posts/{id}

GET /posts/own/{id}

GET /posts/own

PUT /posts/own/{id}

💬 COMMENTS

POST /comments

GET /comments/{id}

PATCH /comments/{id}

DELETE /comments/{id}

👍 Reactions

POST /reactions

PATCH /reactions/{id}

DELETE /reactions/{id}

🔔 Notifications

POST /notifications

GET /notifications

DELETE /notifications/{id}

PUT /notifications/{id}

🔄 Common Workflows
Onboarding & Profile Setup

Register

Login (store token)

Create profile

Get current user

Posting & Commenting

Create post

Add comment

Add reaction

Notifications & Email

Get notifications

Update/delete notification

Check email inbox for notifications

🛠 Troubleshooting
Swagger UI Not Loading

Check /api route

Confirm OpenAPI config

401 Unauthorized

Ensure valid Bearer token

Re-login or verify code again

404 Not Found

Check IDs and endpoint paths

Verify baseUrl

400 / 422 Validation Errors

Check required fields

Ensure correct content type

Nodemailer Not Sending

Verify SMTP settings

Check logs

Confirm route execution
