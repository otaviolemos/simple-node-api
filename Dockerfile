FROM node:14
WORKDIR /app
COPY . .
RUN npm install --only=prod
EXPOSE 8000
CMD NODE_URLS=http://*:$PORT npm start