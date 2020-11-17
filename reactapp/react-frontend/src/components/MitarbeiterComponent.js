import React from 'react';
import MitarbeiterService from './services/MitarbeiterService';

class MitarbeiterComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            mitarbeiter: []
        }
    }

    //call rest API
    componentDidMount() {
        MitarbeiterService.getMitarbeiter().then((response) => {
            this.setState({ mitarbeiter: response.data })
        });
    }
    render() {
        return (

            <div>
                <h1 className="text-center"> Mitarbeiter Liste</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>

                            <td>Mitarbeiter ID</td>
                            <td>Mitarbeiter Vorname</td>
                            <td>Mitarbeiter Nachname</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.mitarbeiter.map(
                                mitarbeiter =>
                                    <tr key={mitarbeiter.id}>
                                        <td>{mitarbeiter.id}</td>
                                        <td>{mitarbeiter.vorName}</td>
                                        <td>{mitarbeiter.nachName}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>

        )
    }

}

export default MitarbeiterComponent