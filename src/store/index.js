import { createStore } from 'redux';
import reducer from '../reducers';
import { saveState } from '../utils';

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(() => {
    const { parameters, textLabels, theme, view } = store.getState();
    saveState({ parameters, textLabels, theme, view });
  });

  return store;
}
