$(document).ready(function(){
   // const listGroupItem = $(".list-group-item");
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

    // listGroupItem.click(function(event){
    //     $(this).remove(); //1. yol
    //    //$(event.target).remove(); // 2. yol
    // });

    $(document).on("click",".list-group-item" ,function(event) {
        $(this).remove();
    })
});