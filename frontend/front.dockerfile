# #stage 1
FROM node:14 as node
WORKDIR /app
COPY . .
RUN npm install 
RUN npm run build 

# #stage 2
FROM webdevops/php-apache:7.3-alpine
COPY --from=node /app/dist/angular-boostrap-theme /app
WORKDIR /app
RUN apk add nano


EXPOSE 80
EXPOSE 443
EXPOSE 3000