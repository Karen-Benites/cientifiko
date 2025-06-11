const getHash = () => 
    location.hash.replace(/^#/, '').toLocaleLowerCase().split('/')[1] || '/';

export default getHash;