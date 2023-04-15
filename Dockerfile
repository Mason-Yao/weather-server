   FROM node:18-alpine

   # Set the working directory in the container to /app
   WORKDIR /app

   # Copy the package.json and package-lock.json files to the container
   COPY package*.json ./

   # Install dependencies
   RUN npm install

   # Copy the rest of the application code to the container
   COPY . .

   # Expose port 13000 for the application
   EXPOSE 13000

   # Define the command that runs the application
   CMD [ "npm", "start" ]