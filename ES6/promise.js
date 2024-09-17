
function ProMax(){
    return new Promise((resolve, reject) => {
        const d = false;
        setTimeout(() => {
            if(d){
                resolve("success");
            }else{
                reject("error");
            }
        },3000)
       })
};

ProMax().then(field => {console.log(field)}).catch(ef => {console.log(ef)});

// // optimized method of try catch
// // then -> like try field 
// // promise using then and catch



//mapping
// const data = [
//     {Appname : "React"},
//    {Appdata : "ReactData"}];
// const structdata =  data.map((datas) => {console.log(datas)});
