## Vote Employee 

This project is developed with Next.js 14. Mock data is obtained using Graphql-faker. The project lists information about employees, and when clicked on the cards, it redirects to the details page of the employee. Server Side Rendering, styled-components, and Docker are utilized.

## Directory Structure

- **public**
- **src**
  - **app**
    - **page**
    - **employee[id]**
    - **lib** (This directory contains common functions used in the project.)
    - **ui**
      - **components**
      - **pages**       
- **.env**
- **Dockerfile**
- **docker-compose.yml**
- **schema.graphql**

## How to Run the Project?

To run the project, first, you need to add a .env file to the root directory. 
Inside it, add WEB_API_ENDPOINT='http://localhost:9002/graphql'. Then, we'll use Docker to bring up the project.

Run the following command to see the project:

docker compose up --build

