import styled from 'styled-components';
import { css } from 'styled-components';
import {Link, Outlet} from "react-router-dom";


export const mixin = {
    buttonable:css`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px;
        padding: 5px;
    `
}

export const MyLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`