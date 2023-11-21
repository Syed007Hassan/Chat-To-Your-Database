# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

# COPY --chown=node:node package*.json ./

# Install app dependencies using `npm install`
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# RUN chown -R testuser:testuser /var/local/testrunner/logs

# Bundle app source
COPY . .

# Build command
RUN npm run build

# npm run migration:run:js
# npm run tenant:migration:run:js


#ENTRYPOINT ["/bin/sh","-c","npm run migration:run && npm run tenant:migration:run && npm run start:dev"]
ENTRYPOINT ["/bin/sh", "-c", "npm run start:dev"]