import React from 'react';

const Context = React.createContext();

const Provider = props =>
    <Context.Provider
        value={{
            state: '123'
        }}
    >
        {props.children}
    </Context.Provider>

const withAuthContext = WrappedComponent => 
      props =>
        <Context.Consumer>
            {auth =>
                <WrappedComponent {...props} auth={auth} />
            }
        </Context.Consumer>
;

export {
    Provider,
    withAuthContext
}