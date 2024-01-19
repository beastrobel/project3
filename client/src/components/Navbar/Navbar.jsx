import { Link, useMatch, useResolvedPath } from "react-router-dom"

function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">Programmer's Guide to the Galaxy</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <CustomLink to="/homepage">Homepage</CustomLink>
                </ul>
            </div>
        </nav>
    )
}
function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true }) 
        return (
            <li className={isActive ? "nav-item active" : "nav-item"}>
            <Link class="nav-link" to={to} {...props}>
                {children}
            </Link>
            </li>
        )
}

export default Navbar;