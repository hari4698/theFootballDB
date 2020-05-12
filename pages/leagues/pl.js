import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Image from 'react-bootstrap/Image'

export default function PL() {
    return (
        <Layout>
            <Head>
                <title>Premier League</title>
            </Head>
            <h1>Premier League</h1>
            <div className="imgContainer">
                <Image src="/images/PL.png" alt="PL Logo" fluid/>
            </div>
            <h2 className="backHome">
                <Link href="/">
                    <a>Back to the Home page</a>
                </Link>
            </h2>
        </Layout>
    )
}