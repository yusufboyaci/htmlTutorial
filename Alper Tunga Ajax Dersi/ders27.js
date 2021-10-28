$(document).ready(function(){
  let coloredDiv = $("#colored-div");
  let coloredDivTitle = $(".h1");
  
  let startTime = 0;
  let endTime = 0;
  let timeDifference = 0;


  coloredDiv.mousedown(function(){ //"mousedown" event i mouse a basıldığı andaki çalışan event tir.
      startTime = new Date().getTime();
  });

  coloredDiv.mouseup(function(){ //"mouseup" event i mouse un sol tuşu basılıyken bırakıldığı yani basma işine son verildiği anda çalıan event tir.
      endTime = new Date().getTime();
      timeDifference = endTime - startTime;
      coloredDivTitle.html(millisToMinutesAndSeconds(timeDifference));
  })



  function millisToMinutesAndSeconds(millis){
      let minutes = Math.floor(millis / 6000);
      let seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0':'') + seconds;//? işareti if demektir.Turnery is
  }
})