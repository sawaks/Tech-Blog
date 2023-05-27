
const newFormHandler = async (event) => {

  event.preventDefault();
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const title = document.querySelector('#blog-title').value.trim();
    const contents = document.querySelector('#blog-contents').value.trim();

    if (title && contents) {
      const response = await fetch(`/api/dashboard/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify({ title, contents }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update blog');
      }
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/dashboard/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete blog');
    }
  }
};



document
  .querySelector('.update-btn')
  .addEventListener('click', newFormHandler);

document
  .querySelector('.delete-btn')
  .addEventListener('click', delButtonHandler);

