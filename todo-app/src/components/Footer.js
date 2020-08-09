import React from 'react';
import FilterLink from '../containers/FilterLink';
import {VisibilityFilters} from '../actions';
import CountComponent from '../containers/CountComponent';

const Footer = () => (
    <div>
        <CountComponent/>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            All
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            Active
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
        </FilterLink>
    </div>
);

export default Footer;