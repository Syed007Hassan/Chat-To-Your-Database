import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="h-full">
      <Head />
      <body className=" bg-slate-300  h-full dark:bg-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
