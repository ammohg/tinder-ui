import * as React from "react";
import * as ReactDOM from "react-dom";

export namespace Card {
    export interface Data extends React.Props<Card> {
        state?: string;
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
    evaluation = '';
    render() {
        if (!this.evaluation && this.props.state) {
            console.log(`${this.props.name}は${this.props.state}されました`);
            this.evaluation = this.props.state;
        }

        return (
            <li className={'card ' + this.evaluation}>
                <div className="card-img" style={{ backgroundImage: `url(${this.props.imageUrl})` }}>
                <div className="card-overlay">
                    <span className="card-overlay-text">
                        {`${this.props.name} ${this.props.age}歳 ${this.props.address}`}
                    </span>
                    <span className="card-tweet">{this.props.tweet}</span>
                </div>
                </div>
                <div className="card-profession">
                    {`${this.props.profession} ${this.props.height}cm`}
                </div>
            </li>
        )
    }
}