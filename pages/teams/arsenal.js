import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Image from 'react-bootstrap/Image'
import { Table } from 'react-bootstrap'
import fetch from 'isomorphic-unfetch'

const teamName = 'Arsenal Football Club';

const Arsenal = ({ data }) => {
    return (
        <Layout>
            <Head>
                <title>{teamName}</title>
            </Head>
            <h1>{teamName}</h1>
            <div className="imgContainer">
                <Image src="/images/Arsenal.png" alt="Arsenal Logo" fluid />
            </div>
            <Table hover bordered striped variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Stadium</th>
                        <th>Matches played</th>
                        <th>Goals</th>
                        <th>Goals Conceded</th>
                        <th>Clean Sheets</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.Stadium}</td>
                        <td>{data.MatchesPlayed}</td>
                        <td>{data.Goals}</td>
                        <td>{data.GoalsConceded}</td>
                        <td>{data.CleanSheets}</td>
                    </tr>
                </tbody>
            </Table>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/teamData?name=' + teamName);
    const data = await res.json();
    return { props: { data } }
}

export default Arsenal;