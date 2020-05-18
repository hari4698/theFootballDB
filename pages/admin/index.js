import Link from 'next/link'
import Layout from '../../components/layout'
// import AddPlayer from '../../components/addPlayer'
import { Button } from 'react-bootstrap'

class Admin extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         viewForm: false
    //     };
    //     // this.handleAddPlayer = this.handleAddPlayer.bind(this);
    // }

    // handleAddPlayer = () => {
    //     this.setState({
    //         viewForm: !this.state.viewForm
    //     });
    // }

    render() {

        // const canViewForm = this.state.viewForm;
        // let form;

        // if (this.viewForm) {
        //     form = <AddPlayer />
        // }
        return (
            <Layout>
                <h1>Admin Console</h1>
                <Button><Link href="admin/addPlayer">Add Player</Link>
                </Button>
                {/* {form} */}
            </Layout>
        );
    }
}

// function AddPlayer() {

//     return (
//         <h1>PLayer Form</h1>
//     )
// }

export default Admin;