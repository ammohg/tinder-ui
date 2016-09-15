import * as React from "react";
import * as ReactDOM from "react-dom";

import {Card} from "./Card";

export namespace CardList {
    export interface Props extends React.Props<CardList> {
        data?: Card.Data[];
        selectCard?: {
            id: number;
            state: string;
        }
    }
    export interface State {
    }
}

export class CardList extends React.Component<CardList.Props, CardList.State> {
    render() {
        let cardNodes = this.props.data.map((data) => (
            <Card key={data.id}
                state={
                    (data.id === this.props.selectCard.id) ?
                        this.props.selectCard.state : null
                }
                name={data.name}
                age={data.age}
                address={data.address}
                tweet={data.tweet}
                profession={data.profession}
                height={data.height}
                imageUrl={data.imageUrl}
                />
        ));

        cardNodes.push(<li className="card no-card" key="no-card">カードがありません</li>)
        cardNodes.reverse()

        return (
            <ul className="cardList">
                {cardNodes}
            </ul>
        );
    }
}

export default Card;