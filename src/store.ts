import { createStore, createTypedHooks } from 'easy-peasy';
import model, { StoreModel } from './models';

const { useStoreActions, useStoreState, useStoreDispatch } = createTypedHooks<StoreModel>();

const storeCreator = () => createStore(model);

const store = createStore(model);

export default store;

export { useStoreActions, useStoreState, useStoreDispatch, storeCreator };
