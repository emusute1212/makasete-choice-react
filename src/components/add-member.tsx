import {Button, TextField} from "@material-ui/core";
import * as React from "react";

interface Props {
    onAddButtonClick: (member: string) => void
}

interface State {
    memberName: string | null
}

class AddMember extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            memberName: ""
        }
    }

    public render() {
        return <div>
            <TextField value={this.state.memberName} onChange={this.handleInputText}/>
            <Button
                variant="contained"
                color="primary"
                onClick={this.handleOnAddButtonClick}
            >
                メンバー追加
            </Button>
        </div>
    }

    private handleOnAddButtonClick = () => {
        if (this.state.memberName == null) {
            return
        }
        this.props.onAddButtonClick(this.state.memberName);
    };

    private handleInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            memberName: event.target.value
        })
    };
}

export default AddMember