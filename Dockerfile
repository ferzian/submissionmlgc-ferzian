FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

COPY submissionmlgc-mferzian-b321704510d1.json /home/m_ferzian09/submissionmlgc-ferzian/

ENV GOOGLE_APPLICATION_CREDENTIALS="/home/m_ferzian09/submissionmlgc-ferzian/submissionmlgc-mferzian-b321704510d1.json"

EXPOSE 8080

CMD ["npm", "start"]