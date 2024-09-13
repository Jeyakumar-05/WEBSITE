const function1 = () => {console.log("In function 1")};
const function2 = () => {console.log("Calling function 2 in function3")};

const function3 = () => { function2() };

function1();
function3();