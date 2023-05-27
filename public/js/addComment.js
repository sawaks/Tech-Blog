
console.log("connected");

const addCommentHandler = async (event) => {
    console.log("in the function")
    event.preventDefault();
    let id = document.querySelector(".comment-btn").getAttribute("data-id")
    console.log(id)

    //if (event.target.hasAttribute('data-id')) {
    //const id = event.target.getAttribute('data-id');
    const comment = document.querySelector('#comment').value.trim();
    //console.log(id);
    console.log(comment);
    if (comment) {
        const response = await fetch(`/api/comment/${id}`, {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace(`/comment/${id}`);
        } else {
            alert('Failed to create blog');
        }
    }
    //}




};



document
    .querySelector('.add-comment-form')
    .addEventListener('submit', addCommentHandler);


