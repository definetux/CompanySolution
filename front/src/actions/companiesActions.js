

export function loadCompanies() {
  return (dispatch, getStore) => {
    let store = getStore();
	debugger
	var myHeaders = new Headers();
	var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
    fetch('http://localhost:50189/api/company', myInit).then((data, err) => {
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
