let storeInstance ;

export function setStore(store){
	storeInstance = store;
}

export function getStore(store){
	return storeInstance;
}