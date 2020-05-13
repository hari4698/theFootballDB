import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Image from 'react-bootstrap/Image'
import { Table } from 'react-bootstrap'
import { useState } from 'react'

const playerName = "Mesut Özil";

const Ozil = ({ data }) => {
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

Ozil.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/playerData?name=' + playerName);
    const json = await res.json();
    return { data: json }
}

export default Ozil;