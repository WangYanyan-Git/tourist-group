import React,{Component,Fragment} from 'react';
import Tab from './tabs/tabs';
export default class Lyout extends Component{
    /*Fragment:react 16新出的片段*/
    render(){
        return (<Fragment>
            {this.props.children}
            <Tab/>
        </Fragment>);
    }
}

