async function getData() {
    try{
        const res =await fetch("http://127.0.0.1:8000/produtos/Monitor")
        const data =await res.json();
    }
}