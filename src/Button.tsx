import * as React from "react";
import * as ReactDOM from "react-dom";

export namespace Button {
    export interface Props extends React.Props<Button> {
        text: string | JSX.Element;
        disabled: boolean;
        onClick?: (e: Event) => any;
    }
}

export class Button extends React.Component<Button.Props, {}> {
    render() {
        return (
            <button className="button" onClick={this.props.onClick.bind(this)} disabled={this.props.disabled}>
                {this.props.text}
            </button>
        )
    }
}
