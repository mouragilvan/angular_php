FROM webdevops/php-apache:7.3-alpine

RUN apk add --update nodejs npm
RUN npm install -g @angular/cli

COPY . /app

# RUN npm install --legacy-peer-deps
# RUN apk add bash
# RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
# RUN source ~/.nvm/nvm.sh
# RUN nvm install 16
# RUN nvm use v16.17.0
#  

EXPOSE 80
EXPOSE 443
EXPOSE 3000