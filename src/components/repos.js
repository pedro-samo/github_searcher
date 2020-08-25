import React from 'react'
import PropTypes from 'prop-types';

function Repos({ className, title, repos }) {
    return (
        <div className={className}>
            <h2>{title}</h2>
            <ul>
                {repos.map((repo, index) => (
                    <li key={index}>
                        <a href={repo.link}>{repo.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

Repos.defaultProps = {
    className: '',
}

Repos.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    repos: PropTypes.array
}


export default Repos;


