import * as React from "react";
import * as ReactDOM from "react-dom";

import {Card} from "./Card";

export namespace CardList {
    export interface Props extends React.Props<CardList> {
        data?: Card.Data[];
        selectCardId?: number;
        selectCardState?: string;
    }
    export interface State {
    }
}

export class CardList extends React.Component<CardList.Props, CardList.State> {
    render() {
        const cardNodes = this.props.data.map((data) => (
                <Card key={data.id}
                    state={data.id === this.props.selectCardId? this.props.selectCardState : null}
                    name={data.name}
                    age={data.age}
                    address={data.address}
                    tweet={data.tweet}
                    profession={data.profession}
                    height={data.height}
                    imageUrl={data.imageUrl}
                    />
        )).reverse();
        
        return (
            <ul className="cardList">
                {cardNodes}
            </ul>
        );
    }
}

export default Card;