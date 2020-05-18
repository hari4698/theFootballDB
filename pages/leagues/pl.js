import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Image from 'react-bootstrap/Image'
import { Table } from 'react-bootstrap'
import fetch from 'isomorphic-unfetch'

const leagueName = "Premier League";

const PL = ({ data }) => {
    return (
        <Layout>
            <Head>
                <title>{leagueName}</title>
            </Head>
            <h1>Premier League</h1>
            <div className="imgContainer">
                <Image src="/images/PL.png" alt="PL Logo" fluid />
            </div>

            <Table hover bordered striped variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Abbreviation</th>
                        <th>First Season</th>
                        <th>Players</th>
                        <th>Foreign Players</th>
                        <th>UEFA Coefficient</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.abbreviation}</td>
                        <td>{data.firstSeason}</td>
                        <td>{data.players}</td>
                        <td>{data.foreignPlayers}</td>
                        <td>{data.UEFACoeff}</td>
                    </tr>
                </tbody>
            </Table>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/leagueData?name=' + leagueName);
    const data = await res.json();
    return { props: { data } }
}

export default PL;