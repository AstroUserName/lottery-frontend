import Head from "next/head"

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            {/* <----Google Fonts----> */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="true"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Aboreto&family=Inter+Tight:wght@400;500;600;700;900&family=Inter:wght@400;500;600;700;900&family=Megrim&display=swap"
                rel="stylesheet"
            />
        </Head>
    )
}

Meta.defaultProps = {
    title: "Super Rafle",
    keywords: "smart contract, random number, chainlink, web3",
    description: "A Decentralized Smart Contract Lottery",
}

export default Meta
