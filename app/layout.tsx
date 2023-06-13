"use client";

import MainFooter from "@/components/main/MainFooter";
import MainHeader from "@/components/main/MainHeader";
import ResumeModal from "@/components/main/ResumeModal";
import Recoil from "@/lib/Recoil";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import Theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";

import '../styles/fonts.css'
import BackButton from '@/components/project/BackButton';


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
            <Recoil>
              <MainHeader />
              {children}
              <MainFooter />
              <ResumeModal />
              <BackButton />
            </Recoil>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
