```md
# News Aggregator App - Frontend

This project contains the frontend application for the News Aggregator App.

## Prerequisites

- Docker
- Node.js 16

## Running the Project

To run the News Aggregator App within a Docker container, follow these steps:

1. Clone the project repository.
2. Build the Docker image: `docker build -t react-app-image .`
3. Run the Docker container: `docker run -p 3000:3000 react-app-image`
4. Access the application at http://localhost:3000.

## Development

To run the project for development purposes, first install the dependencies and then run the development server:

1. Install dependencies: `yarn`
2. Start the development server: `yarn dev`

Access the application at http://localhost:3000.

## Production Build

To build a production-ready version of the frontend application, run the following command:

1. Create an optimized production build: `yarn build`

The production build files will be available in the `build` folder.
```
