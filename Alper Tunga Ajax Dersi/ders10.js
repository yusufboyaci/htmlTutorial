$(document).ready(function(){
    //Elements
  const lstGroup = $(".list-group");
  
  //Inputs
  const txtValue = $("#txtValue");


  //Buttons
  const btnAppend = $("#btn-append");
  const btnPrepend = $("#btn-prepend");

  btnPrepend.click(function() {
      const value = txtValue.val();
      const listItem = `<li class="list-group-item">${value}</li>`;
      lstGroup.prepend(listItem);//başa eklememizi sağlar
  });
  btnAppend.click(function(){
    let value = txtValue.val();
    let listItem = `<li class="list-group-item">${value}</li>`;
    lstGroup.append(listItem);//sona eklemememizi sağlar.
  });
});