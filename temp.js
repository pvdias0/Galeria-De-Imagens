import { createClient } from 'pexels';

const client = createClient('KbLyCqGD5fxELSlfoumgJzMkfKSTXPYk3WtlR5DpAnUmIULVstIVMn1x');
const query = 'paisage';
const per_page = 53;
client.photos.search({query,per_page}).then(response => {
    let photos = response.photos;
    let url = photos.map(photo => photo.src.original);
    let arr = url.join(' ').split(" ");
    console.log(arr);
});
