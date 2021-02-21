import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Project() {

    return (
        <tr>
            <th scope="row"><a href="https://luckyian.github.io/whats-for-dinner/">What's for dinner?
                                App</a>
            </th>
            <td class="align-middle"><img src="./Assets/whatsfordinner.gif" alt="Group Project 1"
                id="tabletop"></img>

            </td>
            <td>The goal of this project was to create an application that will lift some of the burden of deciding what to make for dinner. The "What's for Dinner?" application 
                    allows the user to search for online recipes based on ingredients he/she may have on-hand. Additionally, users will have the option to save recipes for future use, 
                    which can easily be converted to a PDF to be used offline, or for the more tangible owners of the printer, printed out on paper.
       
                        <Link href="https://github.com/luckyian/whats-for-dinner">Github: https://github.com/luckyian/whats-for-dinner</Link>
            </td>

        </tr>
    );
}

export default Project;