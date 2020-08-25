import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'
import PropTypes from 'prop-types';

const AppContent = ({ userinfo, repos, starred, handleSearch }) => (

    <div className='app'>

        <Search handleSearch={handleSearch}/>

        <div className='user-info'>

            {!!userinfo && <UserInfo userinfo={userinfo} />}

            {!!userinfo && <Actions />}

            {!!repos.length &&
                <Repos
                    className='repos'
                    title='Repositórios'
                    repos={repos}
                />}

            {!!starred.length && <Repos
                className='starred'
                title='Favoritos'
                repos={starred}
            />}

        </div>

    </div>
)

AppContent.protoTypes = {
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.is
}


export default AppContent;