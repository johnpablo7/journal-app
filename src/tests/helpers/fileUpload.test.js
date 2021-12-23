import { fileUpload } from "../../helpers/fileUpload";


describe('Pruebas en fileUpload', () => {



  test('debe de cargar un archivo y retornar el URL', async () => {

    const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
    const blob = await resp.blob();

    const file = new File([blob], 'foto.png');
    const url = await fileUpload(file);

    // console.log(url);
    expect(typeof url).toBe('string');

  })

  test('debe de retornar un error', async () => {

    const file = new File([], 'foto.png');
    const url = await fileUpload(file);

    expect(url).toBe(null);

  })

})
