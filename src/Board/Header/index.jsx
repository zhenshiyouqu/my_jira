import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import "./index.css"
const Header = props => {
    return (
        <div className={"header_div"}>
            <div className={"kanban_name"}>
                Kanban board
            </div>
            <a href={"https://github.com/oldboyxx/jira_clone"} target={"_blank"} rel={"noreferrer noopener"}>
                <button>Github Repo</button>
            </a>
        </div>
    );
};

Header.propTypes = {

};

export default Header;
