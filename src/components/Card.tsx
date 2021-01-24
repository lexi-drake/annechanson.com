import { FunctionComponent } from "react";

interface CardProps {

}

const Card: FunctionComponent<CardProps> = (props) => {

    return (
        <div className="card">
            {props.children}
        </div>
    );
}

export default Card;