"use client";

import { styled } from "styled-components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProjectContainer className='main-content'>
      {children}
    </ProjectContainer>
  );
}

const ProjectContainer = styled.section`
  margin-top: 13rem;
`;
