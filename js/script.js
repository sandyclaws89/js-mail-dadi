let emailList =["test0@gmail","test1@gmail","test2@gmail","test3@gmail","test4@gmail","test5@gmail","test6@gmail","test7@gmail","test8@gmail","test9@gmail"];

let userEmail = prompt(`Inserire l'email`);
let PresentEmail = false;

for (let i = 0; i < emailList.length; i++) {

    if (emailList[i] == userEmail){
        PresentEmail=true;
    }

}

if (PresentEmail ==true){
    console.log (`Login ${userEmail}`);
    
} else {
    console.log (`Email non presente nel database`);
}
