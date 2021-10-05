
const FetchUsersDetail = async () => {

    try {

        const usersDetailQuery = await fetch(`http://localhost:3050/api/users/detail`).then(response => response.json())

        return usersDetailQuery


    } catch (e) { console.log(e) };


    //console.log("usersDetail", usersDetail);


}


export default FetchUsersDetail
