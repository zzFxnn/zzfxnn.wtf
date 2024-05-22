import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
    return (
        <>
            <Html lang="en">
                <Head>
                    <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        </>
    );
};

export default Document;