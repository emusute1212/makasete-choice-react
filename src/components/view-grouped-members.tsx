import {ListItem, ListItemText} from "@material-ui/core";
import * as React from "react";
import "../model/entity/grouped-members"

interface Props {
    groupedMembers: GroupedMembers[]
}

const ViewGroupedMembers: React.FunctionComponent<Props> = (
    {
        groupedMembers
    }
) => {
    return (
        <div>
            {renderList()}
        </div>
    );

    function renderList() {
        return groupedMembers.map((member) =>
            <ListItem key={member.groupName} component="nav" divider={true}>
                <ListItemText
                    primary={member.groupName + ": " + member.members.map((it) => it.name).join(", ")}/>
            </ListItem>
        );
    }
};

export default ViewGroupedMembers