import React from 'react';

function MainPage({user}) {
    return (
        <div>
            <p>Добро пожаловать {user.name} {user.lastname}, мы тебя ждали</p>
        </div>
    );
}

export default MainPage;