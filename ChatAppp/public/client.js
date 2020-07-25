const socket=io();
const chat=document.querySelector(".chat");
var chat_form=document.getElementById("chat-form");
socket.on('message',message=>{
    console.log(message);
    outputMessage(message);
    chat_form.scrollTop=chat_form.scrollHeight;
   
})


chat_form.addEventListener('submit',(e)=>{
    e.preventDefault();
  const message= e.target.elements.messagetext.value;
 socket.emit('chat-message',message);
 e.target.elements.messagetext.value="";
 e.target.elements.messagetext.focus();
})
function outputMessage(message)
{
    const div=document.createElement('div');
    div.classList.add('chat');
div.innerHTML=`<p> <span style='color:gray;opacity:0.5'>chat-bot</span></p>
<h4> ${message} </h4> `
document.querySelector('.chat-screen').appendChild(div);
}
var light=true;
function changeTheme()
{
    if(light)
    {
    document.body.style.backgroundColor="black"
    document.getElementById("chatscreen").style.backgroundColor="gray";
    light=false;
    }
    else
    {
        document.body.style.backgroundColor="rgb(73, 73, 126)";
        document.getElementById("chatscreen").style.backgroundColor="rgb(226, 221, 221)";
        light=true;
    }
}
function logout(){
     window.location="index.html";
}