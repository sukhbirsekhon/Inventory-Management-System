# Inventory-Management-System

## Technologies Need to run the app

- Download POSTMAN from this website: https://www.postman.com/downloads/
- Download VS Code from this website: https://code.visualstudio.com/Download
- Download Git from here: https://git-scm.com/downloads
- Download node from here: https://nodejs.org/en/download/

## How to run the app

- Clone the github project and run it on your vs code
- Run `cd backend` command in the terminal
- Run `npm install` command in the terminal
- Run `npm install -g nodemon` in your terminal
- Run `nodemon app` command in the terminal
- Check if the app is running on `http://localhost:3000` /
- Import this collection in your POSTMAN: https://www.getpostman.com/collections/284da6468ca6a9d51671 (Copy this link and use it to import the collection)
- Ping `http://localhost:3000/inventories` with GET header in the Postman (You should get all the current inventory records)
- You can also create records by using `POST Inventories` endpoint 

- Now open a new terminal while keeping the first one open on the side and run the command `cd frontend`
- Run `npm i` command
- Run `ng serve` command
- Note: If `ng` command doesn't work then run this command `npm i -g ng` and then run the command `ng serve`
- Go to `localhost:4200` and you should see the app running

## Steps to deploy the app on heroku (Applies to Front-end only)

- Make changes
- Run `cd frontend`
- Run `ng build`  
- Run `git add .`
- Run `git commit -m "Message"`
- Run `git push heroku master`

## Steps to deploy the app on heroku (Applies to Front-end only)

- Make changes
- Run `cd backend`
- Run `git add .`
- Run `git commit -m "Message"`
- Run `git push heroku master`
