FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install mysql-cli
RUN apt-get update
RUN apt-get install default-mysql-client -y

ENTRYPOINT ["bash", "./scripts/start-api.sh"]

CMD tail -f /dev/null