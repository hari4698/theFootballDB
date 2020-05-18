import Link from 'next/link'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch';
import { Card, Button } from 'react-bootstrap';

function League({ data }) {
    return (
        <Layout>
            <h1>Leagues</h1>
            <div className="Cards">
                <Card style={{ width: '30em' }}>
                    <Card.Img variant="top" src="/images/PL.png" />
                    <Card.Body>
                        <Card.Title>
                            <Link href="/leagues/pl">Premier League</Link>
                        </Card.Title>
                        <Card.Text>
                            The Premier League, often referred to as the English Premier League or the EPL outside England, is the top level of the English football league system.
                            Contested by 20 clubs, it operates on a system of promotion and relegation with the English Football League (EFL).
                        </Card.Text>
                        <Button variant="light"><a href="https://www.premierleague.com" target="_blank">Offical Website</a></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18em' }}>
                    <Card.Img variant="top" src="/images/laliga.jpg" />
                    <Card.Body>
                        <Card.Title>La Liga</Card.Title>
                        <Card.Text>
                            The Premier League, often referred to as the English Premier League or the EPL outside England, is the top level of the English football league system.
                            Contested by 20 clubs, it operates on a system of promotion and relegation with the English Football League (EFL).
                        </Card.Text>
                        <Button variant="light"><a href="https://www.laliga.com/en-GB" target="_blank">Offical Website</a></Button>
                    </Card.Body>
                </Card>
            </div>

            <style jsx>{`
        .Cards {
                display: flex;
                margin: 20px;
                padding: 10px;
            }
        h1{
            text-align: center;
            margin: 0;
        }
        
        `}</style>
        </Layout>
    )
}

// export async function getStaticProps() {
//     const res = await fetch('http://localhost:3000/api/populateLeague');
//     const data = await res.json();
//     return { props: { data } }
// }

export default League;