const getCV = (id) => (
    fetch('http://172.30.83.36/serverGetCV.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ id })
    })
    .then(res => res.json())
);
module.exports = getCV;
