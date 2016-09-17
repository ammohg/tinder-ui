import * as React from "react";
import * as ReactDOM from "react-dom";

export namespace Button {
    export interface Props extends React.Props<Button> {
        disabled: boolean;
        onClick?: (e: Event) => any;
        className?: string;
    }
}

export class Button extends React.Component<Button.Props, {}> {
    render() {
        return (
            <button className={'button ' + this.props.className} onClick={this.props.onClick.bind(this)} disabled={this.props.disabled}>
                {this.props.children}
            </button>
        )
    }
}
