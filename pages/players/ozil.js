import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Image from 'react-bootstrap/Image'

export default function Ozil() {
    return (
        <Layout>
            <Head>
                <title>Mesut Ozil</title>
            </Head>
            <h1>Mesut Ozil</h1>
            <div className="imgContainer">
                <Image src="/images/ozil.jpg" alt="Arsenal Logo" fluid />
            </div>
            {/* <h2 className="backHome">
                <Link href="/">
                    <a>Back to the Home page</a>
                </Link>
            </h2> */}
        </Layout>
    )
}