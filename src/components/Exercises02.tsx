import {Component} from 'react'

interface NguyenMinhSon {
    id: number;
    name: string;
    dob: string;
    address: string;
}

export default class Exercises01 extends Component<object, NguyenMinhSon> {
    constructor(props: object) {
        super(props);
        this.state = {
            id: 1,
            name: "Nguyen Van A",
            dob: "20/12/2023",
            address: "Thanh Xuan, Ha Noi"
        }
    }
    render() {
        return (
            <div>
                <h3>Thong tin ca nhan</h3>
                <p>id: {this.state.id}</p>
                <p>Ten: {this.state.name}</p>
                <p>Ngay sinh: {this.state.dob}</p>
                <p>Dia chi: {this.state.address}</p>
            </div>
        )
    }
}

