let nextTodoId = 0


export function loadCompanies() {
  return (dispatch, getStore) => {
    let store = getStore();
    fetch().then((data, err) => {
      debugger
      // dispatch({
      // 	type: CLOSE_CONTEXT,
      // 	x: 0,
      // 	y: 0,
      // 	mode: undefined,
      // 	category: 'model'
      // });
    })

  }
}

