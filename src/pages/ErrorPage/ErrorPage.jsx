import React from 'react';

function ErrorPage({user}) {
    return (
        <div>
            <p>Тебе сюда нельзя{user.name} {user.lastname}</p>
        </div>
    );
}

export default ErrorPage;