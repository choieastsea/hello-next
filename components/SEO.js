import Head from "next/head";

export default function SEO({ title }) {
  return (
    <Head>
      <title> {title} | Hello Next</title>
    </Head>
  );
}
