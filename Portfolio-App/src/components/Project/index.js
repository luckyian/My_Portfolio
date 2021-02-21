import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Project(props) {

    return (
        <tr>
            <th scope="row"><Link href={props.project}>{props.title}</Link>
            </th>
            <td class="align-middle"><img src={props.src} alt={props.alt}
                id="tabletop"></img>

            </td>
            <td>{props.text}
       
                        <Link href={props.github}>Github: {props.github}</Link>
            </td>

        </tr>
    );
}

export default Project;