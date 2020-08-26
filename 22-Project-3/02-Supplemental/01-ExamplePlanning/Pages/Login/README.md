# Planning

[Back to Table of Contents](../../TABLE_OF_CONTENTS.md)
[Back to Pages](../README.md)

## Mock Up

![Login Page](./Login.png  "Login Mock Up")

### Components visible

* (App Level, not in this page directly)

    * [Nav Bar](../../Components/NavBar/README.md)

* Login Page

    * [Login Form](../../Components/LoginForm/README.md)

        * [User Form](../../Components/UserForm/README.md)

### Routes

* To Page: [GET - '/login'](../../Routes/html/ROUTES.md)

* Retrieve User: [GET - '/api/user_data'](../../Routes/API/User/ROUTES.md)

### Contexts

* [User](../../Stores/User/README.md) 

    * refreshUser (hook) - when the component is loaded will refresh user to ensure user is not logged in.

### User Story

* A user navigates to this page

* At the bottom of the page they can navigate to [Sign Up Page](../SignUp/README.md)

* The page will retrieve user data to ensure the user is not logged in

* if they are logged in redirect them to the home page

* if they are not logged in the user can now fill out the form for their user information.

* when the user clicks login the page will first ensure that all the inputs were filled out, then it will send the login info to the server.

* if there is an error logging in user, display the error to the user.

* if there is no error move them to the [Index Page](../Index/README.md)

[Back to Table of Contents](../../TABLE_OF_CONTENTS.md)
[Back to Pages](../README.md)