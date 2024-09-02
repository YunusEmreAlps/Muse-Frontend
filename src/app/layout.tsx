import { DevtoolsProvider } from "@providers/devtools";
import { GitHubBanner, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { notificationProvider, RefineSnackbarProvider } from "@refinedev/mui";
import routerProvider from "@refinedev/nextjs-router";
import { Metadata } from "next";
import { cookies } from "next/headers";
import React, { Suspense } from "react";

import { AppIcon } from "@components/app-icon";
import { ColorModeContextProvider } from "@contexts/color-mode";
import { authProvider } from "@providers/auth-provider";
import { dataProvider } from "@providers/data-provider";

export const metadata: Metadata = {
  title: "Muse",
  description: "Muse is designed to guide users through their financial journey with inspiration, wisdom, and harmony. Our goal is to provide a seamless and insightful banking experience that helps users manage their finances efficiently and effectively.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  const defaultMode = theme?.value === "dark" ? "dark" : "light";

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Suspense>
          <RefineKbarProvider>
            <ColorModeContextProvider defaultMode={defaultMode}>
              <RefineSnackbarProvider>
                  <Refine
                    routerProvider={routerProvider}
                    dataProvider={dataProvider}
                    notificationProvider={notificationProvider}
                    authProvider={authProvider}
                    resources={[
                      {
                        name: "accounts",
                        list: "/accounts",
                        create: "/accounts/create",
                        edit: "/accounts/:id",
                        show: "/accounts/show/:id",
                        meta: {
                          canDelete: true,
                        },
                      },
                      {
                        name: "transactions",
                        list: "/transactions",
                        create: "/transactions/create",
                        edit: "/transactions/:id",
                        show: "/transactions/show/:id",
                        meta: {
                          canDelete: true,
                        },
                      },
                    ]}
                    options={{
                      syncWithLocation: true,
                      warnWhenUnsavedChanges: true,
                      useNewQueryKeys: true,
                      projectId: "auuDLz-coTcEx-e0Ageg",
                      title: { text: "Muse", icon: <AppIcon /> },
                    }}
                  >
                    {children}
                    <RefineKbar />
                  </Refine>
              </RefineSnackbarProvider>
            </ColorModeContextProvider>
          </RefineKbarProvider>
        </Suspense>
      </body>
    </html>
  );
}
