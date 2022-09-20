# Contact List......

A Contact List React-App.

## Technology Stack
- ReactJS

## How-To-Use

- Clone this project

- Navigate to Project Directory
    ```
    cd contact_list
    ```
- run following commands :
    ```
    npm install 
    ```
    ```
    npm start
    ```
## Basic-Features
- Show the Contacts on the screen.
- Data Fetched using JSON place holder API.
- HTTP Methods used->
    --GET- To fetch the data from API.
    --POST-
    --PUT
    --DELETE- To delete a contact.
- These Request sent to API are all dummy-valid request, means we cant change the data on server but it will send a response.  
   
## Directory Structure and flow of The Code
This code follows MVC pattern and hence everything is differentiated and well managed:

    React-contactList
        |-----public
        |       |--- favicon.ico
        |       |--- index.html
        |       |--- logo192.png
        |       |--- logo512.png
        |       |---manifest.json
        |       |---robots.txt
        |------ src
        |         └--- assets
        |         |       |--- css
        |         |              |--- AddContact.module.css
        |         |              |--- ContactList.module.css
        |         |--- components
        |         |       |--- AddContact
        |         |              |--- AddContact.js
        |         |       |--- ContactList
        |         |              |--- AddContact.js
        |         |       |--- App.js
        |         |--- utils
        |         |       |--- constant.js
        |         |       |--- fetchData.js
        |         |--- index.js
        |         |--- index.css
        |------ .gitignore
        |------ index.js
        |------ package.json
        |------ package-lock.json
        └------ README.md

Happy Coding :)
