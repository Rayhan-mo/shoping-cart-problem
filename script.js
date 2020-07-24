
//  need help to make code less and remove " - value " function. Thanks
// for iphone 11 add button
const addBtn = document.getElementById("addOne");
 addBtn.addEventListener("click", function(){
    const valueCheck= document.getElementById("addValue").value++;
    const valueCheckNumber = parseFloat(valueCheck);
    
    const currentTotalValue = document.getElementById("currentTotal").innerText;
    const currentTotalNumber = parseFloat(currentTotalValue);
    const totalAmount = currentTotalNumber + 1219;
    document.getElementById("currentTotal").innerText = totalAmount;
    
     const subTotal = document.getElementById("subTotalValue",).innerText;
     const subTotalNumber = parseFloat(subTotal);
     const subTotalAmount = subTotalNumber + 1219;
     document.getElementById("subTotalValue").innerText = subTotalAmount;

     const totalCart = document.getElementById("totalCartAmount").innerText;
     const cartTotalNumber = parseFloat(totalCart);
     const cartTotalAmount = cartTotalNumber + 1219;
     document.getElementById("totalCartAmount").innerText = cartTotalAmount;
 })

//  for case add button
 var addBtnCase = document.getElementById("addCase");
 addBtnCase.addEventListener("click", function(){
    const caseValueCheck = document.getElementById("addValueCase").value++;
    const caseValueNumber = parseFloat(caseValueCheck);

   var currentCase = document.getElementById("currentCaseTotal").innerText;
   var currentCaseNumber = parseFloat(currentCase);
   const totalCaseAmount = currentCaseNumber + 59;
   document.getElementById("currentCaseTotal").innerText = totalCaseAmount;

   const subTotal = document.getElementById("subTotalValue").innerText;
     const subTotalNumber = parseFloat(subTotal);
     const subTotalAmount = subTotalNumber + 59;
     document.getElementById("subTotalValue").innerText = subTotalAmount;
     
     const totalCart = document.getElementById("totalCartAmount").innerText;
     const cartTotalNumber = parseFloat(totalCart);
     const cartTotalAmount = cartTotalNumber + 59;
     document.getElementById("totalCartAmount").innerText = cartTotalAmount;
 })

// for iphone 11 sub button
 var subBtn = document.getElementById("subtractOne");
 subBtn.addEventListener("click", function(){
    const subValueCheck = document.getElementById("addValue").value--;
    const subValueNumber = parseFloat(subValueCheck);

    const currentTotal = document.getElementById("currentTotal").innerText;
    const currentTotalNumber = parseFloat(currentTotal);
    const totalAmount = currentTotalNumber - 1219;
    document.getElementById("currentTotal").innerText = totalAmount; 

    const subTotal = document.getElementById("subTotalValue").innerText;
     const subTotalNumber = parseFloat(subTotal);
     const subTotalAmount = subTotalNumber - 1219;
     document.getElementById("subTotalValue").innerText = subTotalAmount;

     const totalCart = document.getElementById("totalCartAmount").innerText;
     const cartTotalNumber = parseFloat(totalCart);
     const cartTotalAmount = cartTotalNumber - 1219;
     document.getElementById("totalCartAmount").innerText = cartTotalAmount;    
 })

//  for case sub button
 var subCaseBtn = document.getElementById("subtractCase");
 subCaseBtn.addEventListener("click", function(){
    const subCaseCurrent = document.getElementById("addValueCase").value--;
    const subCurrentNumber = parseFloat(subCaseCurrent);

    var currentCase = document.getElementById("currentCaseTotal").innerText;
    var currentCaseNumber = parseFloat(currentCase);
    const totalCaseAmount = currentCaseNumber - 59;
    document.getElementById("currentCaseTotal").innerText = totalCaseAmount;

     const subTotal = document.getElementById("subTotalValue").innerText;
     const subTotalNumber = parseFloat(subTotal);
     const subTotalAmount = subTotalNumber - 59;
     document.getElementById("subTotalValue").innerText = subTotalAmount;

     const totalCart = document.getElementById("totalCartAmount").innerText;
     const cartTotalNumber = parseFloat(totalCart);
     const cartTotalAmount = cartTotalNumber - 59;
     document.getElementById("totalCartAmount").innerText = cartTotalAmount;
 })


//  need help to make code less and remove " - value " function. Thanks