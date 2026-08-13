let element = document.getElementsByClassName("comment-likee");
    for (like of element){
        like.addEventListener("click", (l) =>{
            let like = l.target;
            console.log(like)
        });
    };
