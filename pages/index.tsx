import type { NextPage } from "next";

import Layout from "ui/molecules/Layout";
import { Home } from "ui/pages/Home";

const HomePage: NextPage = () => {
  return (
    <Layout title="Atomic Labs | Home" description="Landing Page">
      <Home />
    </Layout>
  );
};

export default HomePage;
