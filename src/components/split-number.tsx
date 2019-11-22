import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import * as React from "react";
import {range} from "../utils/array-util";

interface Props {
    maxValue: number,
    currentValue: number
    onChangeSelectValue: (event: React.ChangeEvent<{ value: unknown }>) => void
}

interface State {
}


class SplitNumber extends React.Component<Props, State> {
    public render() {
        return <div>
            <Select
                value={this.props.currentValue}
                onChange={this.props.onChangeSelectValue}
            >
                {this.renderSelector()}
            </Select>
        </div>
    }

    private renderSelector() {
        return range(1, this.props.maxValue).map((num) =>
            <MenuItem key={num} value={num}>{num}</MenuItem>
        );
    }
}

export default SplitNumber