# Inventory-Management-System

## Technologies Used

- Download POSTMAN from this website: https://www.postman.com/downloads/
- Download VS Code from this website: https://code.visualstudio.com/Download


## Install MongoDB Shell

- Download the mongodb from this website: https://www.mongodb.com/try/download/community (Follow default setup)
- ![image](https://user-images.githubusercontent.com/43282559/146696780-7af3ccc8-2fab-44f2-8b02-471e6757b041.png)
- Create `data` folder in C: folder (C:\)
- Inside `data` folder create a new folder with a name of `db`
- The ultimate path for the `db` folder should be `C:\data\db`
- Now open command prompt and run this command: `cd C:\Program Files\MongoDB\Server\{version number}\bin` (The version number might be different for you. Find MongoDB folder in your Program Files folder and go to Server -> {version number} -> bin)
- Run `mongod` command 
- Now open a new command prompt and run the same command: `cd C:\Program Files\MongoDB\Server\{version number}\bin` 
- Run `mongo` command
- Keep both command prompts open throught the usage of an application

## Next Steps

- Clone the github project and run it on your vs code
- Run `cd backend` command in the terminal
- Run `npm install` command in the terminal
- Run `npm install -g nodemon` in your terminal
- Run `nodemon app` command in the terminal
- Check if the app is running on `http://localhost:3000` /
- POSTMAN Collections: https://www.getpostman.com/collections/284da6468ca6a9d51671
- Ping `http://localhost:3000/inventories` with GET header in the Postman (You should get all the current inventory records)





