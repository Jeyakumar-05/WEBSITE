// function succes(){
//     console.log("You have enough balance");
// }

// function fail(){
//     console.log("You not have enough balance");
// }

// function error(){
//     console.log("error");
// }

// function bank(data , callfunc){
//     console.log(`Your balance ${data}`);
//     callfunc();
// }

// function trigger(data){
//     if(data > 0){
//         bank(data, succes);
//     }else if (data <= 0){
//         bank(data,fail);
//     }else{
//         error();
//     }
//     }
// trigger(900);

async function API(){
    try {
        const response = await fetch('https://66e5270a5cc7f9b6273c6d66.mockapi.io/users');
        const data = await response.json();
        return data;
        
    } catch (error) { 
        console.log(error);
    }
}


async function APIDATA(){
    const apidata = await API();
    // const structuredata = await apidata.map((datas) => {console.log(datas)}); 
    const specificName = await apidata.filter( (datas) => datas.name === "Gayle Spinka");
    console.log(specificName); 
    // console.log(apidata);
} 

APIDATA();
