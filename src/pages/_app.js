import { MoralisProvider } from "react-moralis"
import Layout from "components/Layout"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
    return (
        <MoralisProvider initializeOnMount={false}>
            <Layout>
                <Component {...pageProps} />
                <ToastContainer />
            </Layout>
        </MoralisProvider>
    )
}
