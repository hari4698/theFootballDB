import Layout from '../../components/layout'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'

function AddPlayer() {

    return (
        <Layout>
            <h1>Player Form</h1>
            <div className="playerForm">
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="PlayerName">
                                <Form.Label>Player Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Player Name" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="PlayerNation">
                                <Form.Label>Nationality</Form.Label>
                                <Form.Control type="text" placeholder="Enter Player Nationality" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="PlayerDOB">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control type="text" placeholder="Enter Player Date of Birth" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="PlayerHeight">
                                <Form.Label>Height</Form.Label>
                                <Form.Control type="text" placeholder="Enter Player Height" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="PlayerApp">
                                <Form.Label>Number of Appearances</Form.Label>
                                <Form.Control type="text" placeholder="Enter Number of Appearances" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="PlayerGoals">
                                <Form.Label>Goals</Form.Label>
                                <Form.Control type="text" placeholder="Enter Number of Goals" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="PlayerAssists">
                                <Form.Label>Assists</Form.Label>
                                <Form.Control type="text" placeholder="Enter Number of Assists" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="PlayerCleanSheets">
                                <Form.Label>Clean Sheets</Form.Label>
                                <Form.Control type="text" placeholder="Enter Number of Clean Sheets" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="PlayerTeam">
                                <Form.Label>Team</Form.Label>
                                <Form.Control type="text" placeholder="Enter Player Team" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="PlayerLeague">
                                <Form.Label>League</Form.Label>
                                <Form.Control type="text" placeholder="Enter Player League" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="PlayerTeamKey">
                        <Form.Label>Team key</Form.Label>
                        <Form.Control type="text" placeholder="Enter Team Key" />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Submit
                        </Button>
                </Form>
            </div>
        </Layout>
    )
}

export default AddPlayer;