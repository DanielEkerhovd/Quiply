export default function logOut() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    window.location.href = '/';
}