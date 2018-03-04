////////////////////////////////////////////////////////////
function getURL(){
    return "http://web.sit.kmutt.ac.th/sanit/int493/" ;
}

function fetchContacts(){
    const url= getURL()+"contacts.php" ;
    return fetch(url)
            .then( response => response.json())
            .then( resJs => {console.log(resJs.contacts)
                            return resJs.contacts ; } )

            .catch( err => {console.log(err) }) ;
}

export default {fetchContacts : fetchContacts} ; 
