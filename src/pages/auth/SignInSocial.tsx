import { useEffect, useRef } from "react";
import { thirdPartySignInAndUp } from "supertokens-web-js/recipe/thirdpartyemailpassword";

const SignInSocial = () => {
  const dataFetchedRef = useRef(false);
  async function handleGoogleCallback() {
    try {
      const response = await thirdPartySignInAndUp();

      if (response.status === "OK") {
        console.log(response.user);
        if (response.createdNewUser) {
          // sign up successful
        } else {
          // sign in successful
        }
        window.location.assign("/");
      } else {
        // SuperTokens requires that the third party provider
        // gives an email for the user. If that's not the case, sign up / in
        // will fail.

        // As a hack to solve this, you can override the backend functions to create a fake email for the user.

        window.alert(
          "No email provided by social login. Please use another form of login"
        );
        window.location.assign("/auth"); // redirect back to login page
      }
    } catch (err: any) {
      if (err.isSuperTokensGeneralError === true) {
        // this may be a custom error message sent from the API by you.
        window.alert(err.message);
      } else {
        window.alert("Oops! Something went wrong.");
      }
    }
  }

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    handleGoogleCallback();
  }, []);
  return <div></div>;
};

export default SignInSocial;
