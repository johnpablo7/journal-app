import cloudinary from 'cloudinary';
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
  cloud_name: 'johnpablo',
  api_key: '463652628137853',
  api_secret: 'u-W0rlzIZrIlllikPJrsEXHAs7g',
  secure: true
});

describe('Pruebas en fileUpload', () => {

  test('debe de cargar un archivo y retornar el URL', async () => {

    const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
    const blob = await resp.blob();

    const file = new File([blob], 'foto.png');
    const url = await fileUpload(file);

    // console.log(url);
    expect(typeof url).toBe('string');

    // Borrar imagen por ID
    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.png', '');
    // console.log(imageId)

    const folderName = "nombrecarpeta";
    // Fn de la API cloudinary para borrar la imagen subida
    await cloudinary.v2.api.delete_resources(`${imageId}`, {}, (error, result) => {
      console.log(error, result)
    });
  })

  test('debe de retornar un error', async () => {

    const file = new File([], 'foto.png');
    const url = await fileUpload(file);

    expect(url).toBe(null);
  })

})
