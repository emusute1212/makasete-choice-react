import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import * as React from "react";
import {range} from "../utils/array-util";

interface Props {
    maxValue: number,
    currentValue: number
    onChangeSelectValue: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const SplitNumber: React.SFC<Props> = (
    {
        maxValue,
        currentValue,
        onChangeSelectValue
    }
) => {
    return (
        <div>
            <Select
                value={currentValue}
                onChange={onChangeSelectValue}
            >
                {renderSelector()}
            </Select>
        </div>
    );

    function renderSelector() {
        return range(1, maxValue).map((num) =>
            <MenuItem key={num} value={num}>{num}</MenuItem>
        );
    }
};

export default SplitNumber