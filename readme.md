# Recipes App

## Description

The Recipes App is a full-fledged CRUD (Create, Read, Update, Delete) application built using Node.js, Express.js, and Mongoose. The application allows users to manage their favorite recipes by creating, reading, updating, and deleting them. It follows the MVC (Model-View-Controller) architectural pattern and provides comprehensive API documentation using Postman.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-Instructions)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Documentation URL](#documentation-url)

## Features

- **Create Recipe**: Allows users to create a new recipe.
- **Retrieve All Recipes**: Retrieve a list of all recipes.
- **Retrieve Recipe by ID**: Retrieve a specific recipe by its ID.
- **Update Recipe**: Update the details of an existing recipe by its ID.
- **Delete Recipe**: Delete a recipe by its ID.

## Tech Stack

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Postman**: API documentation and testing tool.

## Setup Instructions

1. Clone the repository::

```bash

       git clone https://github.com/Vijay-Nataraj/Recipes-App.git

```

2. Navigate to the project directory:

```bash

       cd recipes-app

```

3. Install the dependencies::

```bash

       npm install

```

4. Set up environment variables in a .env file:

```bash

        MONGODB_URI=your_mongodb_connection_string
        PORT=your_preferred_port

```

5. Start the server:

```bash

        npm start

```

## API Endpoints

**Create Recipe**

- URL: `/api/v1/recipes`

- Method: `POST`

- Description: Create a new recipe.

- Request Body:

  ```json
  {
    "Title": "Recipe Title",
    "Ingredients": ["Ingredient 1", "Ingredient 2"],
    "Instructions": "Recipe Instructions"
  }
  ```

- Response:

  ```json
  {
    "newRecipe": {
      "Title": "Recipe Title",
      "Ingredients": ["Ingredient 1", "Ingredient 2"],
      "Instructions": "Recipe Instructions",
      "_id": "6780b92d71cd6b477eb18abf",
      "__v": 0
    }
  }
  ```

**Retrieve All Recipes**

- URL: `/api/v1/recipes`

- Method: `GET`

- Description: Retrieve all recipes.

- Response:

  ```json
  [
    {
    "_id": "recipe_id",
    "Title": "Recipe Title",
    "Ingredients": ["Ingredient 1", "Ingredient 2"],
    "Instructions": "Recipe Instructions",
    "createdAt": "creation_timestamp"
  },
  ...
  ]
  ```

**Retrieve Recipe by ID**

- URL: `/api/v1/recipes/:id`

- Method: `GET`

- Description: Retrieve a single recipe by ID.

- Response:

  ```json
  {
    "_id": "recipe_id",
    "Title": "Recipe Title",
    "Ingredients": ["Ingredient 1", "Ingredient 2"],
    "Instructions": "Recipe Instructions",
    "createdAt": "creation_timestamp"
  }
  ```

**Update Recipe**

- URL: `/api/v1/recipes/:id`

- Method: `PUT`

- Description: Update a recipe by ID.

- Request Body:

  ```json
  {
    "Title": "Updated Recipe Title",
    "Ingredients": ["Updated Ingredient 1", "Updated Ingredient 2"],
    "Instructions": "Updated Recipe Instructions"
  }
  ```

- Response:

  ```json
  {
    "_id": "recipe_id",
    "Title": "Updated Recipe Title",
    "Ingredients": ["Updated Ingredient 1", "Updated Ingredient 2"],
    "Instructions": "Updated Recipe Instructions",
    "updatedAt": "update_timestamp"
  }
  ```

**Delete Recipe**

- URL: `/api/v1/recipes/:id`

- Method: `DELETE`

- Description: Delete a recipe by its ID.

- Response:

  ```json
  {
    "message": "Recipe deleted successfully"
  }
  ```

## Error Handling

Proper error handling and validation are implemented for all API endpoints to ensure a smooth user experience.

## Documentation URL

[POSTMAN API Documentation URL: ]()
