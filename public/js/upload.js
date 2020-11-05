function handleFiles(file) {
    const url = "https://api.cloudinary.com/v1_1/adas/image/upload"
    let button =  document.getElementById('uploadButton')
    let loader =  document.getElementById('loader')
    let imgSrc =  document.getElementById('imgSrc')
    document.getElementById('img').src = 'https://i.gifer.com/BvMu.gif'
    loader.hidden = true;
    const formData = new FormData();
    formData.append("upload_preset", "devices");
    formData.append("file", file[0]);
    fetch(url, {
    method: "POST",
    body: formData
    })
    .then((response) => {
        return response.text()
    })
    .then((data) => {
        button.innerHTML = '<i class="fas fa-edit"></i> Изменить'
        loader.hidden = false;
        document.getElementById('img').src = JSON.parse(data).url
    });
}