"use client";

import MainFooter from "@/components/main/MainFooter";
import MainHeader from "@/components/main/MainHeader";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import Theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={Theme}>
            <MainHeader />
            {children}
            <MainFooter />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
