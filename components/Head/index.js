import Head from "next/head";

export default function MyHead({
  title,
  description = "Made by Alexis Toranzo",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
