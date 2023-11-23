
function deleteSite(id){
    fetch(`http://localhost:8081sites/${id}`,{
        method: 'DELETE'
    }).then((result) => {
        result.json().then((response) => {
            console.log(response)
        })
    })
}