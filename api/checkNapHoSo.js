const checkNapHoSo = (MaUser) => (

    fetch('http://172.30.83.36/check_CV.php',

    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ MaUser })
    })
    .then(res => res.json())
);

module.exports = checkNapHoSo;