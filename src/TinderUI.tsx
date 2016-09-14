import * as React from "react";
import * as ReactDOM from "react-dom";

import {data} from "./data.ts";

// import {Button} from "./Button";
import {CardList} from "./CardList";

export namespace TinderUI {
    export interface Props extends React.Props<TinderUI> {
    }
    export interface State {
        selectCardId?: number;
        selectCardState?: string;
    }
}

export class TinderUI extends React.Component<TinderUI.Props, TinderUI.State> {
    i = 0
    constructor() {
        super();
        this.state = {
            selectCardId: data[this.i].id
        }
    }
    clickButton(state: string) {
        this.setState({
            selectCardState: state
        });
        this.selectId(data[this.i++].id)
    }
    selectId(id: number) {
        this.setState({
            selectCardId: id
        });
    }
    
    render() {
        return (
            <div>
                <CardList data={data}
                    selectCardId={this.state.selectCardId}
                    selectCardState={this.state.selectCardState}
                    />
                <button
                    onClick={()=>{this.clickButton('bad')}}
                    >
                    ごめんなさい
                </button>
                <button
                    onClick={()=>{this.clickButton('good')}}
                    >
                    ありがとう
                </button>
            </div>
        );
    }
}