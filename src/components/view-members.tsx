import {ListItem, ListItemText} from "@material-ui/core";
import * as React from "react";
import DeleteButton from "./delete-button";

interface Props {
    members: Member[],
    onDeleteButtonClick: (member: Member) => void
}

const ViewMembers: React.SFC<Props> = (
    {
        members,
        onDeleteButtonClick
    }
) => {
    return (<div>
            {renderList()}
        </div>
    );

    function renderList() {
        return members.map((member) =>
            <ListItem key={member.number} component="nav" divider={true}>
                <ListItemText primary={member.name}/>
                <DeleteButton member={member} onDeleteButtonClick={onDeleteButtonClick}/>
            </ListItem>
        );
    }
};

export default ViewMembers