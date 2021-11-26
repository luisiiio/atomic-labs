import React, { FC, ReactNode } from "react";
import Head from "next/head";

import { Header } from "ui/molecules/Header";
import { Footer } from "ui/molecules/Footer";

const Layout: FC<{
  title: string;
  description: string;
  children: ReactNode;
}> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
