import React from "react";
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
import SideBar from "./side-bar";

const Wrap = styled(Box)(() => ({
    backgroundColor: 'rgba(9,80,55,1)',
    height: '100%',
    overflow: 'auto',
}));

export default function NavBarWrapper() {

    return (
        <Wrap>
            <SideBar />
        </Wrap>
    )
}
