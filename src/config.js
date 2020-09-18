export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "ricej008-notes-app-uploads"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://nbt3p8wrq8.execute-api.ap-southeast-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_wJdMqPE3t",
    APP_CLIENT_ID: "58nvs43e6ilrfbebplh4kiefl6",
    IDENTITY_POOL_ID: "ap-southeast-2:967af1c2-cd6c-4f05-ab04-b7984bcc703c"
  }
};
  