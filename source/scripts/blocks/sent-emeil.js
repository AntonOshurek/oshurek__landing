
export default function sentEmeil() {
  const POST_DATA_SOURCE = 'sentMeil.php';

  const contatForm = document.querySelector('.contact-form');

  const sendData = (body) => fetch(
    POST_DATA_SOURCE,
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if(response.ok) {
      return response;
    }
    throw new Error(`${response.status} ${response.statusText}`);
  });

  contatForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(contatForm);

    const dataArray = {
      title: formData.get('title'),
      message: formData.get('text'),
      emeil: formData.get('emeil'),
    };

    sendData(dataArray)
      .then((response) => {
        if (response.ok) {
          console.log(response);
        }
      }).catch(() => {
        console.log(Error);
      }).finally(() => {
        console.log('finally');
      });

  });
}
