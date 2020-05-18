import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Image from 'react-bootstrap/Image'
import { Table } from 'react-bootstrap'
import fetch from 'isomorphic-unfetch'

const playerName = "Mesut Özil";

function Ozil({ data }) {

    const pageName = data.key
    console.log(pageName);
    return (
        <Layout>
            <Head>
                <title>{playerName}</title>
            </Head>
            <h1>{playerName}</h1>
            <Image src="/images/ozil.jpg" alt="Arsenal Logo" fluid />
            <Table hover bordered striped variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Club</th>
                        <th>Nationality</th>
                        <th>Date of birth</th>
                        <th>Appearances</th>
                        <th>Goals</th>
                        <th>Assists</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.name}</td>
                        <td>
                            <Link href={'/teams/' + pageName}>{data.Team}</Link>
                        </td>
                        <td>{data.Nationality}</td>
                        <td>{data.DOB}</td>
                        <td>{data.Appearances}</td>
                        <td>{data.Goals}</td>
                        <td>{data.Assists}</td>
                    </tr>
                </tbody>
            </Table>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/playerData?name=' + playerName);
    const data = await res.json();
    return { props: { data } }
}

export default Ozil;