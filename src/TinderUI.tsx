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
    }
}

export class TinderUI extends React.Component<TinderUI.Props, TinderUI.State> {
    i = 0
    constructor() {
        super();
        this.state = {
            selectCard: {
                id: data[this.i].id,
                state: null
            }
        }
    }
    clickButton(state: string) {
        this.setState({
            selectCard: {
                id: data[this.i++].id,
                state: state
            }
        });
    }

    render() {
        if (this.i === data.length) {
            return (<div>カードがありません</div>);
        }

        return (
            <div>
                <CardList data={data}
                    selectCard={this.state.selectCard}
                    />
                <Button onClick={this.clickButton.bind(this, 'bad')} text="ごめんなさい" />
                <Button onClick={this.clickButton.bind(this, 'good')} text="ありがとう" />
            </div>
        );
    }
}