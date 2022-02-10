# Mambas - Instagramme (Instagram) - Flask React Group Project
<img src='https://i.imgur.com/OBiiMKY.png'>

This is the README for the final group project from App Academy.
The project was inspired by Instagram and build using Javascript,
React.js and Redux for the front end and Python with Flask for the backend.

<img src='https://i.imgur.com/SI5Pov1.png'>

# Project Installation

1. Clone the project repository from https://github.com/hauck29/PythonGroupProject.git

2. Rename the folder to whatever you want.

3. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

4. Create a **.env** file based on the example with proper settings for your
   development environment
5. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

6. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory OR `cd` into the `react-app` folder and run `npm install` to install node package manager dependencies.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***



# Running Locally
>To start the server, run `flask run` from the root directory, then run `npm start` from the `react-app` directory. This will allow you to make requests to http://localhost:3000 using any client (browser and Postman).
>To stop the server from listening to requests, press CTRL + c for Windows/Linux or CMD + c for MacOS in the terminal that you started the server (wherever you >ran npm start).

# Running Live
>The live link for this project is located here: https://instagramme-mambas.herokuapp.com/

# What You Can Do

>You can log in as a demo user with the `Demo Login` button on the login form or landing page.

>You can log in as a user of your choice, using the credentials you selected when creating an account.

<img src='https://i.imgur.com/dsJ79cF.png'>

>You can add posts with the `Add` button in the Navigation Component
<img src='https://i.imgur.com/LdNQmEc.png'>

>You can edit your posts with the `Edit` button.
<img src='https://i.imgur.com/Ri5V7yh.png'>

>You can delete your posts with the `Delete` button.
<img src='https://i.imgur.com/PdHDfXd.png'>

>You can add comments in the `Add a comment` block with the `Submit` button.
<img src='https://i.imgur.com/abb8aPr.png'>

>You can edit your comments with the `Edit` button.

>You can delete your comments with the `Delete` button.
<img src='https://i.imgur.com/Hvm2uEp.png'>

# Technical Details
>This project was done during the week of December 6th - 12th, 2021.



# Features
>Sign up/Login with credentials

>Read, add, edit and remove posts from the posts feed (full CRUD)

>Read, add, edit and remove comments from the comments feed of a particular post (full CRUD)

>Read, add, and remove a user that is being followed (full CRUD, edit/update is nonsensical here, as the combination of add and remove is the edit)
<!-- >Read, add and remove a like from a post (full CRUD, edit/update is nonsensical here, as the combination of add and remove is the edit) -->

# React Components
>Comments - Commetns feed and CommentForm for comment creation

>DisplayBlockFollowers - Displays a block with your followers

>DisplayFollowers - Shows who your current followers are on profile page

>DisplayFollowing - Shows who you are followiung on your profile page

>DisplayUnfollow - Provides a button to allow a user to unfollow another user

>DisplayPostModal - Modal for displaying a single post and its comments

>Feed - This is where all the posts load into

>FollowingFeed - This is the feed for the users the current user is following

>Footer - This is where developer links live

>LandingPage - This is the page that most closely emulates Instagram

>LoginPage - Allows for a user to login using credentials

>NavigationBar - Provides icon links to different routes on the site

>ProfileButton - Allows functionality of profile options

>SignupPage - Provides a form to allow a user to signup for Instagramme

>UploadModal - Modal for uploading a photo and adding a caption

>auth - Provided with starter

>NavBar - Provided with starter

>User - Provided with starter

>UserList - Provided with starter

# Front End Routes - Logged In
```
<>
      <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true}>
          <Feed />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
    </>
```

# Back End Routes

>-- Posts

>Read One: ```
    posts_router.post('/<int:id>')
    ```

>Read All: ```
    posts_router.post('/')
    ```

>Create: ```
    posts_router.post('/')
    ```

>Update: ```
    posts_router.post('/')
    ```

>Delete: ```
    posts_router.post('/<int:id>')
    ```

# To-Do List
>Like/unlike posts and comments

>Continously refine css to look modern

>Search feature

>Explore feature

# Screen Candy
<img src='https://i.imgur.com/lvFusuh.png'>
<img src='https://i.imgur.com/JfMl4ez.png'>
<img src='https://i.imgur.com/5gYDYdr.png'>
<img src='https://i.imgur.com/QiwmMzc.png'>
<img src='https://i.imgur.com/DAuh3IA.png'>
<img src='https://i.imgur.com/5dEhv4X.jpg'>
