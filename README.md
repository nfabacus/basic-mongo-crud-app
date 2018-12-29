# Basic Mongo Crud App - mongo-proj
reference: https://www.youtube.com/watch?v=4yqu8YF29cU

To insert sample data. cd into initial folder, then type below.
```
mongoimport --db mongo-proj --collection profiles --file profiles.json
```
_id is assigned automatically for each data.

#### How to remove an entire collection
- Go to terminal
```
mongo mongo-proj
show collections
db.profiles.find()
db.profiles.drop()
```


This project was built with Turbo 360. To learn more, click here: https://www.turbo360.co

## Instructions
After cloning into repo, cd to project root directory and create a .env file. This file requires a TURBO_APP_ID and SESSION_SECRET keys:

```
TURBO_ENV=dev
SESSION_SECRET=YOUR_SESSION_SECRET
TURBO_APP_ID=123abc
```

Then run npm install from the root directory:

```
$ npm install
```

To run dev server, install Turbo CLI globally:

```
$ sudo npm install turbo-cli -g
```

Then run devserver from project root directory:

```
$ turbo devserver
```

To build for production, run build:

```
$ npm run build
```

