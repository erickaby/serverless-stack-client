const dev = {
  STRIPE_KEY: "pk_test_YImdT0OfpjQCmlM4mlGjYybd",
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-4jknfd1516ni"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://6pib7sfb4d.execute-api.ap-southeast-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_Sq2L1rrS0",
    APP_CLIENT_ID: "34urr1m3v21tr6empainoahu95",
    IDENTITY_POOL_ID: "ap-southeast-2:8c7607f7-b595-4926-a94a-f2d10b3fd7b8"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_YImdT0OfpjQCmlM4mlGjYybd",
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1oadnr5er3q6w"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://a5hi7i1sad.execute-api.ap-southeast-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_llJ2xinjB",
    APP_CLIENT_ID: "14c8dkqfirud5efb79qvnbq8i7",
    IDENTITY_POOL_ID: "ap-southeast-2:91d0bb2e-c2f7-49ca-be80-733d59224bd3"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};