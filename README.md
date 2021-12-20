# Inventory-Management-System

## Install MongoDB Shell

- Download the mongodb from this website: https://www.mongodb.com/try/download/community (Follow default setup)
- ![image](https://user-images.githubusercontent.com/43282559/146696780-7af3ccc8-2fab-44f2-8b02-471e6757b041.png)
- Create `data` folder in C: folder (C:\)
- Inside `data` folder create a new folder with a name of `db`
- The ultimate path for the `db` folder should be `C:\data\db`
- Now open command prompt and run this command: `cd C:\Program Files\MongoDB\Server\4.0\bin` 
- Run `mongod` command 
- Now open a new command prompt and run the same command: `cd C:\Program Files\MongoDB\Server\4.0\bin` (The version number might be different for you. Find MongoDB folder in your Program Files folder and go to Server -> {version number} -> bin
- Run `mongo` command

## Install Postman

- Download POSTMAN from this website: https://www.postman.com/downloads/

## Install VS Code

- Download VS Code from this website: https://code.visualstudio.com/Download

## Next Steps

- Clone the github project
- Run `cd backend` command in the terminal
- Run `npm install` command in the terminal
- Run `nodemon app` command in the terminal
- Check if the app is running on `http://localhost:3000` 
- Ping `http://localhost:3000/inventories` with GET header in the Postman (You should get all the current inventory records)



