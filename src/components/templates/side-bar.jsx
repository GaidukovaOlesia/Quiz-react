import SearchInfo from "../searchButton";

const a = {
    color: 'white',
    fontSize: '20px',
    display: 'block',
    marginBottom: '10px',
    marginLeft: '12px',
    textDecoration: 'none',
    marginRight: '10px',
}

export default function SideBar() {

    return (
        <div>
            <a href='src/components/templates/side-bar#' style={a}>JS</a>
            <a href='src/components/templates/side-bar#' style={a}>React</a>
            <a href='src/components/templates/side-bar#' style={a}>Node JS</a>
            <a href='src/components/templates/side-bar#' style={a}>Python</a>
            <a href='src/components/templates/side-bar#' style={a}>CSS</a>
            <a href='src/components/templates/side-bar#' style={a}>HTML</a>
            <SearchInfo
                placeholder='Search...'
            />
        </div>
    )
}
