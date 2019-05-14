import React, {Component} from 'react';
import Color from './Color'
import Button from './Button'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            colors: []
        };
        this.checkUpdates = this.checkUpdates.bind(this);
    }

    componentWillMount() {
        this.setState ({
            colors: this.props.colors
        })
    }


    shouldComponentUpdate(nextProps) {
        return nextProps.colors !== this.props.colors;
    }


    checkUpdates(currentIndex) {
        console.log(currentIndex);
        let activeColor = this.props.colors.map((obj, index) => {
            obj.active = (currentIndex === index);
            return obj;
        });
        console.log(activeColor);
        this.setState({
            colors: activeColor
        });
    }



    render() {
        console.log(this.state);
        return (
            <div className={'container'}>
                <div className={'buttons'}>
                    {this.state.colors.map((obj, index) => <Button index={index} colors={obj} checkUpdates={this.checkUpdates}/>)}
                </div>
                <div className={'shapes'}>
                    {this.state.colors.map((obj) => <Color colors={this.state.colors}/>)}
                </div>
            </div>

        )
    }
}