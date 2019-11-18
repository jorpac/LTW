let commentForm = document.querySelector('#comments form');

commentForm.addEventListener('submit', submitComment);

function submitComment(event) {
    event.preventDefault(); 
    console.log(event['target'][0].value);
    username = event['target'][0].value;
    text = event['target'][1].value;
    console.log(text);
    new_id = event['target'][2].value;
    console.log(new_id);
    comment = event['path'][1]['children'][event['path'][1].childElementCount-2];
    let comment_id = comment.querySelector('span').textContent;
    comment_id++;
    console.log(comment_id);
    let request = new XMLHttpRequest();
    request.onload = receiveComments
    request.open("post", "api_add_comment.php", true)
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    request.send(encodeForAjax({id: new_id, comment_id:comment_id, username: username, text:text}));
}

function receiveComments(){

}

function encodeForAjax(data) {
    return Object.keys(data).map(function(k){
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
  }