import React from 'react';


export default
class Bar extends React.Component {







    render(){

        return (
            <div className= "Bar">
              <input ref="field" type="text" onChange = {this.props.change}/>
                <input type="submit" value="Search" onClick = {this.props.search} />


            </div>
        );
    }
}
