# notes

this is an api for a server that take notes

("DON'T forget the token while using the api")

# Overview

in this api you can register an account and take your notes and retrive them
and even deleting them if you want

# Installation

to start the api
clone the repo
then in the terminal write
`npm i`
after that create a `.env` file in the root directory
and add these envirmoent variables
`PG_URI` the URI for your database (I am using postgresql in this app you'll need to modify the code to use another database)
`PORT` the port number that you want to start the api on
`JWT_PRIVATE_KEY` the private key to generate tokens for users
you can use the `cr.js` to generate a key for you
just write `index cr` and press enter then copy the generated key

# Usage

in this api thers is the following endpoints:

1. `POST` api/author/signup : to regiester a new account
   you will need to send the follwoing information as a json username, email, password
2. `POST` api/author/login: to log in to your account
   you will need to send the follwoing information as a json username, password
3. `POST` api/note/: to add a new note for the user you are registerd with
4. `GET` api/note/: to get all your notes
5. `GET` api/note/id: to get one of your note with the id
6. `DELETE` api/note/id: to delete one of you note with the id

# Authentication

for the authentication I used json web token
when you login or register an account you will get a token in the response header "x-auth-token" use the same header to send the token with your requests for the notes
