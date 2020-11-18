import React from 'react';
import MitarbeiterService from './services/MitarbeiterService';

class MitarbeiterComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            m: []
        }
    }

    //lifecyclemethod, will get called immetiately after component got mounted
    componentDidMount() {
        MitarbeiterService.getMitarbeiter().then((response) => {
            const data = response.data;
            //console.log(data)
            //var sortItOut = Object.keys(data).map(key => { return data[key] });
            var newArrayDataOfOjbect = Object.entries(data)

            console.log(newArrayDataOfOjbect)//funkt .entries macht ein array von arrays draus
            this.setState({ m: newArrayDataOfOjbect })
            console.log(this.state)//basst
        });
    }





    render() {
        //console.log(this.mitarbeiter)
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

                        {this.state.m.map(
                            (mitarbeiter) => {
                                return (
                                    <tr>
                                        <td key={mitarbeiter.Id}> {mitarbeiter.id}</td>
                                        <td key={mitarbeiter.vorName}> {mitarbeiter.vorName}</td>
                                        <td key={mitarbeiter.Nachname}> {mitarbeiter.nachName}</td>
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