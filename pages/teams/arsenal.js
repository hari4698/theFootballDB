import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Image from 'react-bootstrap/Image'

export default function Arsenal() {
    return (
        <Layout>
            <Head>
                <title>Arsenal FC</title>
            </Head>
            <h1>Arsenal Football Club</h1>
            <div className="imgContainer">
                <Image src="/images/Arsenal.png" alt="Arsenal Logo" fluid />
            </div>
            {/* <h2 className="backHome">
                <Link href="/">
                    <a>Back to the Home page</a>
                </Link>
            </h2> */}
        </Layout>
    )
}