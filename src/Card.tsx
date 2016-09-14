import * as React from "react";
import * as ReactDOM from "react-dom";

export namespace Card {
    export interface Data extends React.Props<Card> {
        className?: string;
        id?: number;
        name?: string;
        age?: number;
        address?: string;
        tweet?: string;
        profession?: string;
        height?: number;
        imageUrl?: string;
    }
}

export class Card extends React.Component<Card.Data, {}> {
    className = '';
    render() {
        if (!this.className && this.props.className) {
            console.log(`${this.props.name}は${this.props.className}されました`);
            this.className = this.props.className;
        }

        return (
            <li className={'card ' + this.className}>
                <div className="card-img" style={{backgroundImage: `url(${this.props.imageUrl})`}}>
                    <p>
                        <span className="name">{this.props.name}</span>
                        <span className="age">{this.props.age}</span>
                        <span className="address">{this.props.address}</span>
                    </p>
                    <p className="tweet"></p>
                </div>
                <p>
                    <span className="profession">{this.props.profession}</span>
                    <span className="height">{this.props.height}</span>
                </p>
            </li>
        )
    }
}