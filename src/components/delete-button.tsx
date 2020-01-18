import {Button} from "@material-ui/core";
import * as React from "react";

interface Props {
    member: Member,
    onDeleteButtonClick: (member: Member) => void
}

const DeleteButton: React.SFC<Props> = (
    {
        member,
        onDeleteButtonClick
    }
) => {
    return (
        <div>
            <Button variant="contained" color="primary"
                    onClick={handleOnDeleteButtonClick}>
                X
            </Button>
        </div>
    );

    function handleOnDeleteButtonClick() {
        onDeleteButtonClick(member);
    }
};

export default DeleteButton