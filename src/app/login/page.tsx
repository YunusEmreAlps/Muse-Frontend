import { AuthPage } from "@components/auth-page";
import { authProviderServer } from "@providers/auth-provider";
import { redirect } from "next/navigation";

export default async function Login() {
  const data = await getData();

  if (data.authenticated) {
    redirect(data?.redirectTo || "/");
  }

  return (
    <AuthPage
      type="login"
      rememberMe={false}
      forgotPasswordLink={false}
      title={<h1>Welcome to Muse</h1>}
      formProps={{
        defaultValues: {
          username: "muse",
          password: "musedemo",
        },
      }}
    />
  );
}

async function getData() {
  const { authenticated, redirectTo, error } = await authProviderServer.check();

  return {
    authenticated,
    redirectTo,
    error,
  };
}
