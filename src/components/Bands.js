import React, { Component } from 'react'
import Band from './Band'


class Bands extends Component {
    render(){
        return(
            <div>
                <ul>
                    {this.props.bands.map(band => <Band delete={this.props.delete} key={band.id} band={band} />)}
                </ul>
            </div>
        )
    }
}



export default Bands