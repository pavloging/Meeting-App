import React from 'react';
import PropTypes from 'prop-types';

const SearchStatus = ({ length }) => {
    console.log(length);
    const manyStatus = (len) => {
        if (len === 0) { return 'Никто не тусанет с тобой'; }
        if (len === 2 || len === 3 || len === 4) {
            return len + ' человекa тусанут с тобой сегодня';
        } else {
            return len + ' человек тусанут с тобой сегодня';
        }
    };
    return (
        <span className="btn btn-primary btn-sm m-2">
            {manyStatus(length)}
        </span>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number
};

export default SearchStatus;
