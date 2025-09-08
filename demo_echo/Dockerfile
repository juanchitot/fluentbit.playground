FROM node:latest

RUN sh -c 'curl https://raw.githubusercontent.com/fluent/fluent-bit/master/install.sh | sh'
RUN touch /etc/fluent-bit/fluent-bit-custom.conf
RUN echo "@INCLUDE fluent-bit-custom.conf" >> /etc/fluent-bit/fluent-bit.conf
COPY echo-app /app
WORKDIR /app
ENTRYPOINT  ["/bin/sh","-c", "nohup /opt/fluent-bit/bin/fluent-bit -d -c /etc/fluent-bit/fluent-bit.conf &  npm i && npm run start"]

