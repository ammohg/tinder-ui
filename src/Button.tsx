import * as React from "react";
import * as ReactDOM from "react-dom";

export namespace Button {
    export interface Props extends React.Props<Button> {
        text: string | JSX.Element;
        onClick?: (e: Event) => any;
    }
}

export class Button extends React.Component<Button.Props, {}> {
    render() {
        return (
            <button onClick={this.props.onClick.bind(this)}>
                {this.props.text}
            </button>
        )
    }
}
