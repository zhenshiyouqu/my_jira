import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Table from "./Table";
import IconButton from "../general/IconButton";
import styled from 'styled-components';
import {mixin} from "../general/Styled";

// 该页面展示所有的需求，包括不属于自己的需求，若需求属于自己，则可以编辑，否则只能查看
// 可通过过滤器查看自己的需求等等
const Requirements = props => {
    function handleClick() {
        console.log("click")
    }
    return (
            <div style={{width:"100%"}}>
                <div style={{display:"flex",alignItems:"center",flexGrow: "1"}}>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <div >
                            <h1>所有需求</h1>
                        </div>
                        <div className="board-header-toggle-show-description-wrapper"><span className=""><button type="button" className="board-header-toggle-show-description button_2cc9b456c1 sizeSmall_bfe3f3cd5c kindTertiary_c100faa96e colorPrimary_5d4dbadec9 noSidePadding_c47d4a773a" data-testid="button" aria-disabled="false" aria-busy="false" aria-label="Show board description"><svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" className="icon_c85ee8f381 board-header-toggle-show-description-icon noFocusStyle_7a93ee2575" data-testid="icon"><path d="M4.5559 4.55593C5.99976 3.11206 7.95806 2.3009 10 2.3009C12.0419 2.3009 14.0002 3.11206 15.4441 4.55593C16.888 5.99979 17.6991 7.9581 17.6991 10C17.6991 12.042 16.888 14.0003 15.4441 15.4441C14.0002 16.888 12.0419 17.6992 10 17.6992C7.95806 17.6992 5.99976 16.888 4.5559 15.4441C3.11203 14.0003 2.30087 12.042 2.30087 10C2.30087 7.9581 3.11203 5.99979 4.5559 4.55593ZM10 3.8009C8.35589 3.8009 6.77912 4.45402 5.61656 5.61659C4.45399 6.77915 3.80087 8.35592 3.80087 10C3.80087 11.6441 4.45399 13.2209 5.61656 14.3835C6.77912 15.546 8.35589 16.1992 10 16.1992C11.6441 16.1992 13.2209 15.546 14.3834 14.3835C15.546 13.2209 16.1991 11.6441 16.1991 10C16.1991 8.35592 15.546 6.77915 14.3834 5.61659C13.2209 4.45402 11.6441 3.8009 10 3.8009ZM10 9.25006C10.4142 9.25006 10.75 9.58585 10.75 10.0001V13.4746C10.75 13.8888 10.4142 14.2246 10 14.2246C9.58579 14.2246 9.25 13.8888 9.25 13.4746V10.0001C9.25 9.58585 9.58579 9.25006 10 9.25006ZM9.54135 6.21669C9.7058 6.10681 9.89914 6.04816 10.0969 6.04816C10.3621 6.04816 10.6165 6.15351 10.804 6.34105C10.9916 6.52859 11.0969 6.78294 11.0969 7.04816C11.0969 7.24593 11.0383 7.43927 10.9284 7.60373C10.8185 7.76818 10.6623 7.89635 10.4796 7.97204C10.2969 8.04772 10.0958 8.06753 9.90183 8.02894C9.70786 7.99036 9.52967 7.89512 9.38982 7.75526C9.24996 7.61541 9.15472 7.43722 9.11614 7.24325C9.07755 7.04927 9.09736 6.8482 9.17304 6.66547C9.24873 6.48275 9.3769 6.32657 9.54135 6.21669Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button></span></div>
                        <div className="star-component-wrapper"><span className="referenceWrapper_a18020bde0"><button type="button" className="star-component-button favorite-star button_2cc9b456c1 sizeMedium_18a78b4558 kindTertiary_c100faa96e colorPrimary_5d4dbadec9 noSidePadding_c47d4a773a" data-testid="icon-button" aria-disabled="false" aria-busy="false" aria-label="Add to favorites" ><svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" className="icon_c85ee8f381 star-component-button-icon noFocusStyle_7a93ee2575" data-testid="icon"><path d="M10 3.90449L8.30061 7.34943C8.20168 7.5491 8.05582 7.72182 7.87554 7.85278C7.69525 7.98374 7.4859 8.06904 7.26543 8.10138L3.46267 8.65796L6.21005 11.3431C6.21018 11.3432 6.20992 11.343 6.21005 11.3431C6.37003 11.499 6.48998 11.6919 6.55878 11.9044C6.6275 12.1167 6.64348 12.3425 6.60534 12.5624C6.60528 12.5628 6.60521 12.5632 6.60514 12.5636L5.95599 16.3534L9.3594 14.563C9.5569 14.4592 9.77687 14.4048 10 14.4048C10.2231 14.4048 10.4429 14.4591 10.6404 14.5629L14.0349 16.3477L13.3857 12.5579C13.3856 12.5574 13.3856 12.5569 13.3855 12.5565C13.3474 12.3367 13.3634 12.1109 13.4321 11.8987C13.5009 11.6862 13.6204 11.4936 13.7804 11.3378C13.7805 11.3376 13.7803 11.3379 13.7804 11.3378L16.5322 8.65463L12.7353 8.10149C12.5148 8.06915 12.3048 7.98374 12.1245 7.85278C11.9442 7.72182 11.7983 7.54911 11.6994 7.34943L10 3.90449ZM10.5623 3.34904L11.2344 3.01626C11.1205 2.78619 10.9446 2.59254 10.7265 2.45714C10.5083 2.32175 10.2567 2.25 10 2.25C9.74328 2.25 9.49166 2.32175 9.27355 2.45714C9.05543 2.59254 8.87949 2.78619 8.76558 3.01626L6.98466 6.6265L2.99539 7.21037L2.99209 7.21086C2.73857 7.24912 2.50078 7.35743 2.30552 7.52359C2.11027 7.68974 1.9653 7.90714 1.88697 8.15127C1.80864 8.39539 1.80006 8.65655 1.8622 8.90529C1.92422 9.15357 2.05423 9.37963 2.23762 9.55808C2.23796 9.55842 2.2383 9.55875 2.23865 9.55909L5.11621 12.3715L4.43615 16.3417C4.43605 16.3422 4.43594 16.3428 4.43584 16.3434C4.39159 16.5975 4.41961 16.8589 4.51674 17.0979C4.6141 17.3374 4.77694 17.5446 4.98662 17.6958C5.1963 17.8471 5.44434 17.9362 5.70233 17.953C5.95874 17.9697 6.21467 17.9142 6.44115 17.793L10 15.9209L13.5498 17.7874C13.7763 17.9085 14.0322 17.964 14.2885 17.9473C14.5465 17.9305 14.7946 17.8414 15.0042 17.6901C15.2139 17.5389 15.3768 17.3317 15.4741 17.0922C15.5712 16.8532 15.5993 16.5918 15.555 16.3378C15.5549 16.3372 15.5548 16.3365 15.5547 16.3359L14.8747 12.3658L17.7568 9.55566C17.7571 9.55536 17.7574 9.55505 17.7577 9.55475C17.9412 9.37628 18.0712 9.15018 18.1332 8.90186C18.1954 8.65312 18.1868 8.39196 18.1085 8.14784C18.0301 7.90371 17.8852 7.68632 17.6899 7.52016C17.4946 7.354 17.2569 7.24569 17.0033 7.20743L13.0153 6.62645L11.2349 3.01724L10.5623 3.34904Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button></span></div>
                    </div>
                    <div style={{marginLeft:"auto"}}>
                        <div>
                            <button style={{display:"flex",border:"none",background:"transparent",alignItems:"center"}}>
                                <span>当前用户</span>
                                <div style={{flexBasis: "30px", margin: "0 19px"}}>
                                    <svg style={{marginTop: "6px"}} xmlns="http://www.w3.org/2000/svg" width="30px"
                                         height="30px" fill="currentColor" className="bi bi-motherboard-fill"
                                         viewBox="0 0 16 16">
                                        <path d="M5 7h3V4H5v3Z"/>
                                        <path
                                            d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2H1Zm11 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm2 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM3.5 10a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM4 4h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 0-1 1Zm7 7.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Z"/>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                    <div>
                        Manage any type of project. Assign owners, set timelines and keep track of where your project stands.
                    </div>
                    <a href="www.baidu.com">
                        <span>See More</span>
                    </a>
                </div>
                <div style={{display:"flex"}}>
                    <IconButton gap={6} size={20} className="bi bi-projector" text="New" />
                    <IconButton gap={6} size={20} className="bi bi-search" text="Search" />
                    <IconButton gap={6} size={20} className="bi bi-sort-down-alt" text="Sort" />
                    <IconButton gap={6} size={20} className="bi bi-person-add" text="Person" />
                    <IconButton gap={6} size={20} className="bi bi-save" text="Save Edit" onClick={handleClick} color="rgba(93,92,89,0.59)"/>
                </div>
                <Table/>
            </div>

    );
};





Requirements.propTypes = {};

export default Requirements;
