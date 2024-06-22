export default function fetchID() {

    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');
    return id;
    
};

