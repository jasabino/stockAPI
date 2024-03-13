# Stock app API Suite

API suite for an Stock App created with NodeJS, Express, Swagger and MongoDB

For more information please check the documentation on:

 1. [Express](https://www.npmjs.com/package/express)
 2. [Swagger Express](https://www.npmjs.com/package/swagger-express-middleware)
 3. [Swagger UI](https://www.npmjs.com/package/swagger-ui)
 4. [Mongoose](https://www.npmjs.com/package/mongoose)

## Getting Started

These instructions will get you a copy of the project running on your local machine for development and testing purposes.

1. Download a GIT client as [TortoiseGIT](https://tortoisegit.org/)
2. Clone the repository from [SSH](git@gitlab.com:jasabino/storingapp.git) or [HTTPS](https://gitlab.com/jasabino/storingapp.git)

### Prerequisites

You need these programs in order to run this project:

1. Node.js [(Download)](https://nodejs.org/en/)
2. Mongo DB [(Download)](https://www.mongodb.com/download-center#community)
3. RoboMongo 1.0 [(Download)](https://robomongo.org/download)

4. Download project

```
guide: https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone?utm_source=stash&utm_medium=in-app-help&utm_campaign=learn-git-clone

git clone https://gitlab.com/jasabino/storingapp.git
```
## Installing the Project

For installing the project dependencies, please execute this command on the root path of the project (where the file app.js is located)

```
npm install
```

## Starting up the Server

For starting up the server, please execute this command on the root path of the project (where the file app.js is located)

```
npm start
```

Now, you will see a message like

```
project started here: http://localhost:10010/
```

It indicates that the server is running on the port 10010 and the url base for all web services is `http://localhost:10010/`

## Checking the API Docs

An API doc page will be deployed on:

```
http://localhost:10010/api-docs
```

with all information of each web services, so you can see:

1. Method
2. Path
3. Parameters
4. Possible Responses

And you could test each api, doing click on the `try it out` button


### Responses

For 200 response you will get an structure like that:
```
{
  "success": true,
  "response": {},
  "errors": [
    {
      "code": "string",
      "message": "string"
    }
  ]
}
```

Where success indicates if the response is valid or not, if this variable is false, you will get errors, such as:

**1000 - 1100 Items Errors**

* 1000 Item not found
* 1001 Error adding the item

## Project Structure

In the root folder you could find the app.js that is the principal file of the configuration of this project if you want to change the port of the server please change the variable `port` on this file

#### api folder

It contains the source, controllers, generic functions and models files

**NOTE:** In swagger folder, you will find a file  `swagger.yaml` that contains the rules for each api in the system

#### config folder

It contains two files:

1. `db.js` contains the settings for connecting to the data base

2. `default.yaml` contains the default configuration for swagger

## Built With

* [Node.js](https://nodejs.org/en) - The runtime environment
* [Express](https://www.npmjs.com/package/express) - Web application framework for Node.js
* [Swagger Express](https://www.npmjs.com/package/swagger-express-middleware) - For API documentation
* [Swagger UI](https://www.npmjs.com/package/swagger-ui) -  For visualizing render documentation for the API
* [Mongoose](https://www.npmjs.com/package/mongoose) - For connecting to a Mongo Data Base

