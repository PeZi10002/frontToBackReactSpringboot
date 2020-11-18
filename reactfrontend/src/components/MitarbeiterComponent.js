import React from 'react';
import MitarbeiterService from './services/MitarbeiterService';

class MitarbeiterComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            m: [Object]
        }
    }

    //lifecyclemethod, will get called immetiately after component got mounted
    async componentDidMount() {

        await MitarbeiterService.getMitarbeiter().then((response) => {
            this.setState({m: response.data})
            console.log(this.state)//passt
            
        });
    }






    render() {
        
        return (

            < div >
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
                        {console.log(this.state)}

                        {this.state.m.map(
                            (mitarbeiter, index) => {
                                return (
                                    <tr>
                                        <td > {mitarbeiter.id}</td>
                                        <td > {mitarbeiter.vorName}</td>
                                        <td > {mitarbeiter.nachName}</td>
                                    </tr>)
                            }
                        )
                        }
                    </tbody>
                </table>

            </div >

        )
    }

}

export default MitarbeiterComponent