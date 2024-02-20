Quagga.init({
    inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#interactive'),
        constraints: {
            width: 640,
            height: 480,
            facingMode: "environment" // or "user" for front camera
        },
    },
    decoder: {
        readers: ['ean_reader'] // You can add other readers based on the barcode types you want to support
    }
}, function (err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Initialization finished. Ready to start");
    Quagga.start();
});

Quagga.onDetected(function (result) {
    console.log("Barcode detected and processed", result);
    // Handle the detected barcode data as needed
    alert("Barcode detected: " + result.codeResult.code);
    // Stop further scanning
    Quagga.stop();
});
