import {Button, TextField} from "@material-ui/core";
import * as React from "react";

interface Props {
    onAddButtonClick: (member: string) => void
}

const AddMember: React.SFC<Props> = ({onAddButtonClick}) => {
    let memberName: string = "";

    return (
        <div>
            <TextField value={memberName} onChange={handleInputText}/>
            <Button
                variant="contained"
                color="primary"
                onClick={handleOnAddButtonClick}
            >
                メンバー追加
            </Button>
        </div>
    );

    function handleOnAddButtonClick() {
        if (memberName == null) {
            return
        }
        onAddButtonClick(memberName);
    }

    function handleInputText(event: React.ChangeEvent<HTMLInputElement>) {
        memberName = event.target.value
    }
};

export default AddMember