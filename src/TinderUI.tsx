import * as React from "react";
import * as ReactDOM from "react-dom";

import {data} from "./data.ts";

// import {Button} from "./Button";
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
                id: (this.i + 1 < data.length) ? data[this.i++].id : null,
                state: state
            }
        });
    }

    render() {
        return (
            <div>
                <CardList data={data}
                    selectCard={this.state.selectCard}
                    />
                <button onClick={ () => { this.clickButton('bad') } }>
                    ごめんなさい
                </button>
                <button onClick={ () => { this.clickButton('good') } } >
                    ありがとう
                </button>
            </div>
        );
    }
}