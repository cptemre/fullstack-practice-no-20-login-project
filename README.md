![login1](/client/src/imgs/login1.png)

<hr>

![login2](/client/src/imgs/login2.png)

<hr>

![login3](/client/src/imgs/login3.png)

<hr>

# LOGIN PROJECT

## FULLSTACK PRACTICE PROJECT NO: 20

### PURPOSE OF THE PROJECT

1. I created this project to practice my new JWT skills to understand it better.
2. Connecting client and server to share tokens to authorize to login the by user page.

### HOW IT WORKS

1. When we try to sign it, app checks if all the requirements of email and password provided by the user and then creates a new user and saves the information in the database.
2. When we login, it checks if the login information correct, then creates a new access token and sends a response to the client.
3. Client stores this token in state as token variable and uses this to send a request to server to authorize the token to reach the main page.
4. If anything goes wrong server sends an error response.
5. Client runs on http://localhost:3000 and server runs on http://localhost:5000

### TECHNOLOGIES USED

1. HTML
2. CSS
3. JavaScript
4. Jquery
5. React
6. NodeJS
7. ExpressJS
8. MongoDB

### WHAT IS NOT INCLUDED

1. To be able to use this app you need a file called '.env'.
2. This file contains the access token secret for JWT and url path to connect MongoDB. Without these, app can not work.
3. The app only works on main page path '/'. This is a small project to practice therefore I did not spend my time on it to make it perfect.
4. If you see any bugs please make a comment.