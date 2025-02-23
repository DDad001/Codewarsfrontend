function checkToken(){
    let result = false;
    let lsData = localStorage.getItem('Token');
    if(lsData && lsData != null)
    {
        result = true;
    }
    return result;
}

//These are the User Endpoints

//Create Account
async function createAccount(createdUser){
    let res = await fetch('http://localhost:5031/User/AddUser', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(createdUser)
    });

    if(!res.ok)
    {
        const message = `An error has occured ${res.status}`
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data)
    return data;
}

//Login
async function login(userInfo){
    let res = await fetch('http://localhost:5031/User/Login', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(userInfo)
    });

    if(!res.ok)
    {
        const message = `An error has occured ${res.status}`
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data)
    return data;
}

//Update User
async function updateUser(id, codeWarName, cohortName, isAdmin, isDeleted){
    let res = await fetch('http://localhost:5031/User/UpdateUsername/'+id+'/'+codeWarName+'/'+cohortName+'/'+isAdmin+'/'+isDeleted, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify()
    });

    if(!res.ok)
    {
        const message = `An error has occured ${res.status}`
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data)
    return data;
}

//Give User Admin
async function giveUserAdmin(id){
    let res = await fetch('http://localhost:5031/User/GiveUserAdmin/'+id, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify()
    });

    if(!res.ok)
    {
        const message = `An error has occured ${res.status}`
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data)
    return data;
}

//Permanently Delete a User
async function permanentlyDeleteUser(id){
    let res = await fetch('http://localhost:5031/User/DeleteUser/'+id, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify()
    });

    if(!res.ok)
    {
        const message = `An error has occured ${res.status}`
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data)
    return data;
}

//GetAllUsers
async function getAllUsers(){
    let res = await fetch("http://localhost:5031/User/GetAllUsers");
    let data = await res.json();
    // console.log(data);
    return data;
}

//GetUserByUsername
async function getUserByUsername(codeWarName){
    let res = await fetch("http://localhost:5031/User/GetUserByUsername/"+codeWarName);
    let data = await res.json();
    // console.log(data);
    return data;
}

//GetUserById
async function getUserById(id){
    let res = await fetch("http://localhost:5031/User/GetUserByUsername/"+id);
    let data = await res.json();
    // console.log(data);
    return data;
}

//Get Users by Cohort
async function getUsersByCohortName(cohortName){
    let res = await fetch("http://localhost:5031/User/GetAllUsersByCohortName/"+cohortName);
    let data = await res.json();
    // console.log(data);
    return data;
}

//-----------------------------------------------------------------------------------------------
//These are the enpoints for the Reservation

//Get Reserved Kata By CodeWar Name
async function getReservedKataByCodeWarName(codeWarName){
    let res = await fetch("http://localhost:5031/Reservation/GetReservedKataByCodeWarName/"+codeWarName);
    let data = await res.json();
    return data;
}

//Get All Reserved Katas
async function getAllReservedKatas(){
    let res = await fetch("http://localhost:5031/Reservation/GetAllReservedKatas");
    let data = await res.json();
    return data;
}

//Update Reserved Katas
async function updateReservedKata(updateReservation){
    let res = await fetch('http://localhost:5031/Reservation/UpdateReservedKata', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(updateReservation)
    });

    if(!res.ok)
    {
        const message = `An error has occured ${res.status}`
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data)
    return data;
}

//-------------------------------------------------------------------------------------------------
//These are for Completed Katas

//Get All Completed Katas
async function getAllCompletedKatas(){
    let res = await fetch("http://localhost:5031/CompletedKatas/GetAllCompletedKatas");
    let data = await res.json();
    return data;
}

//Get Completed Katas By CodeWar Name
async function getAllCompletedKatasByCodeWarName(codeWarName){
    let res = await fetch("http://localhost:5031/CompletedKatas/GetAllCompletedKatas/"+codeWarName);
    let data = await res.json();
    return data;
}

//------------------------------------------------------------------------------------------------------
//These are for the Cohort

//Add a Cohort
async function createCohort(createdCohort){
    let res = await fetch('http://localhost:5031/Cohort/AddCohort', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(createdCohort)
    });

    if(!res.ok)
    {
        const message = `An error has occured ${res.status}`
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data)
    return data;
}

//Update Cohort
async function updateCohort(updatedCohort){
    let res = await fetch('http://localhost:5031/Cohort/UpdateCohort', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(updatedCohort)
    });

    if(!res.ok)
    {
        const message = `An error has occured ${res.status}`
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data)
    return data;
}

//Get Cohort By Cohort Name
async function getCohortByCohortName(cohortName){
    let res = await fetch("http://localhost:5031/Cohort/GetCohortByCohortName/"+cohortName);
    let data = await res.json();
    return data;
}

//Get Cohort By CodeWar Name
async function getCohortByCodeWarName(codewarName){
    let res = await fetch("http://localhost:5031/Cohort/GetCohortByCodeWarName/"+codewarName);
    let data = await res.json();
    return data;
}

//Get Cohort By Id
async function getCohortById(id){
    let res = await fetch("http://localhost:5031/Cohort/GetCohortById/"+id);
    let data = await res.json();
    return data;
}

export{ checkToken, createAccount, login,
    updateUser, giveUserAdmin, permanentlyDeleteUser,
    getAllUsers, getUserByUsername, getUserById,
    getUsersByCohortName, getReservedKataByCodeWarName,
    getAllReservedKatas, updateReservedKata, getAllCompletedKatas,
    getAllCompletedKatasByCodeWarName, createCohort, updateCohort,
    getCohortByCohortName, getCohortByCodeWarName, getCohortById
}