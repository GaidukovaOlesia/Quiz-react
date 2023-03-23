import SearchAppBar from "../dialogs/Menu";
import {Component} from "react";

export default class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div  className='container'>
                <SearchAppBar />
            </div>

        )
    }
}

