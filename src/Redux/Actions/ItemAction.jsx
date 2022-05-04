/**
 * Fetch updateItem
 * @param {*} postData 
 * @returns 
 */

 export const updateItem = (postData) => dispatch => {
    fetch('http://www.mocky.io/v2/5e69de892d00007a005f9e29?mocky-delay=2000ms', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'UPDATE_ITEM',
            payload: data
        })
        );
}
