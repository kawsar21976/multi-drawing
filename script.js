//automatic execute korar jonno 
let socket, sendMessageBoard;
$(() => {
  socket = io.connect("http://localhost:8000");
  sendMessageBoard = new DrawingBoard.Board("sendMessageBoard");
  $("#sendDWGbtn").click(() => {
    // send dile sorasori image server e send hobe
    //console.log("SEND DRAWINGG");
    socket.emit("drawing", sendMessageBoard.getImg());
    //image send korar por to client er canvas khali korte hobe. so resetbackground() diye amra screen reset korbo
    sendMessageBoard.resetBackground();
    return false;
  });
  socket.on("drawing", function (msg) {
    $("#messageContainer").append(
      $("<li class='w-100 d-flex align-center justify-content-center'>").html(
        `<img src="${msg}" class="w-75 m-auto img-msg"/>`
      )
    );
    window.scrollTo(0, document.body.scrollHeight);
  });
});
