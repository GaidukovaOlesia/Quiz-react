import SearchInfo from "../SearchButton";
import {Component} from 'react';

export default class SideBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <a href='#'
                   style={{
                       display: 'block',
                       color: 'white',
                       textDecoration: 'none',
                       fontSize: '18px',
                       marginBottom: '20px',
                       marginLeft: '12px',
                       marginTop: '20px',
                   }}
                >
                    Add new quiz
                </a>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '20px',
                    marginLeft: '10px',
                    fontSize: '18px',
                    color: 'white',
                }}>
                    <label>
                        <input type='checkbox'/> Favourite
                    </label>
                </div>
                <SearchInfo
                    placeholder='Search...'
                />
            </div>
        )
    }
}
