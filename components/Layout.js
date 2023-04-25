import Head from "next/head"
import Header from "./Header"
import Footer from "./footer"
import Showcase from "./Showcase"
import { useRouter } from "next/router"

export default function Layout({title, keywords, description, children}) {

    const router = useRouter()

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>


            <Header />
            {router.pathname === '/' && <Showcase />}
            <div className="mt-[60px] mx-auto px-[30px] max-w-[960px]">
            {children}
            </div>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'DJ Events | Fint the hottest parties',
    description: 'Find the latest DJ and other musical events',
    keywords: 'music, dj, edm, events',
}