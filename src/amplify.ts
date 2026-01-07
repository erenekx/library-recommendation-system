import { Amplify } from "aws-amplify";
import { cognitoConfig } from "./auth/cognito";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: cognitoConfig.userPoolId,
      userPoolClientId: cognitoConfig.userPoolWebClientId,
      userPoolRegion: cognitoConfig.region,
    },
  },
});