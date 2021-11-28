import type { NextPage } from "next";

import Layout from "ui/molecules/Layout";
import { Application } from "ui/pages/Application";

const ApplicationPage: NextPage = () => {
  return (
    <Layout title="Atomic Labs | Application" description="application">
      <Application />
    </Layout>
  );
};

export default ApplicationPage;
