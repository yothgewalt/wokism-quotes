import { NextPage } from "next";
import { CssBaseline } from "@nextui-org/react";
import Document, { DocumentContext, DocumentInitialProps, DocumentProps, Head, Html, Main, NextScript } from "next/document";
import { Children } from "react";
import { globalStyles } from "src/styles/globals";

const WokismQuotesDocument: NextPage<DocumentProps, DocumentInitialProps> = (
    props: DocumentProps
) => {
    const { locale } = props;

    return (
        <Html dir="ltr" lang={locale}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="robots" content="follow, index" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

WokismQuotesDocument.getInitialProps = async (
    context: DocumentContext
): Promise<DocumentInitialProps> => {
    const initialProps = await Document.getInitialProps(context);
    globalStyles();

    return {
        ...initialProps,
        styles: [
            ...Children.toArray(initialProps.styles),
            ...Children.toArray(CssBaseline.flush())
        ]
    };
};

export default WokismQuotesDocument;