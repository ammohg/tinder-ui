import * as React from "react";
import * as ReactDOM from "react-dom";

import {data} from "./data.ts";

import {Button} from "./Button";
import {CardList} from "./CardList";

export namespace TinderUI {
    export interface Props extends React.Props<TinderUI> {
    }
    export interface State {
        selectCard?: {
            id: number;
            state: string;
        }
        isCardAnimetion: boolean;
    }
}

export class TinderUI extends React.Component<TinderUI.Props, TinderUI.State> {
    cardIndex = 0;

    constructor() {
        super();
        this.state = {
            selectCard: {
                id: data[this.cardIndex].id,
                state: null
            },
            isCardAnimetion: false
        }
    }
    changeCard(state: string) {
        this.setState({
            selectCard: {
                id: data[this.cardIndex++].id,
                state: state
            },
            isCardAnimetion: true
        });

        setTimeout(() => {
            this.setState({
                isCardAnimetion: false,
                selectCard: this.state.selectCard
            });
        }, 600);
    }

    render() {
        return (
            <div>
                <CardList data={data} selectCard={this.state.selectCard} />

                {this.cardIndex !== data.length ? (<div className="button-wapper">
                    <Button onClick={this.changeCard.bind(this, 'noop') } disabled={this.state.isCardAnimetion}>
                        <i className="fa fa-meh-o fa-3" aria-hidden="true"></i><br />
                        ごめんなさい
                    </Button>
                    <Button className="like-button" onClick={this.changeCard.bind(this, 'like') } disabled={this.state.isCardAnimetion}>
                        <i className="fa fa-thumbs-o-up fa-3" aria-hidden="true"></i><br />
                        ありがとう
                    </Button>
                    <p>ごめんなさいを押してもお相手には通知されません</p>
                </div>) : ''}
            </div>
        );
    }
}