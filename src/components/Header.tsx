import { FunctionComponent } from "react";

interface HeaderProps {

}

const Header: FunctionComponent<HeaderProps> = (props) => {

    return (
        <div className="header">
            {props.children}
        </div>
    );
}

export default Header;