import {Button} from "@material-ui/core";
import * as React from "react";

interface Props {
    member: Member,
    onDeleteButtonClick: (member: Member) => void
}

interface State {
}

class DeleteButton extends React.Component<Props, State> {
    public render() {
        return (
            <div>
                <Button variant="contained" color="primary"
                        onClick={this.handleOnDeleteButtonClick}>
                    X
                </Button>
            </div>
        );
    }

    private handleOnDeleteButtonClick = () => {
        this.props.onDeleteButtonClick(this.props.member);
    };
}

export default DeleteButton