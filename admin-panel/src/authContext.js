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

const Consumer = Component => 
    <Context.Consumer>
      {({ state, actions }) =>
        <Component {...Component.props} ctxTest={state} />
      }
    </Context.Consumer>
;

export {
    Provider,
    Consumer
}