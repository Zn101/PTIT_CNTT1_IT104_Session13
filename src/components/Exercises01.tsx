import {Component} from 'react'

interface NguyenMinhSon {
    name: string;
}

export default class Exercises01 extends Component<object, NguyenMinhSon> {
    constructor(props: object) {
        super(props);
        this.state = {
            name: "Nguyen Van A",
        }
    }
    render() {
        return (
            <div>
                <p>Ho va ten: {this.state.name}</p>
            </div>
        )
    }
}

