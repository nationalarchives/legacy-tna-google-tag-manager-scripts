export const getEventLabel = () => {
    if (event.target.innerHTML !== '') {
        return event.target.innerHTML;
    } else {
        return event.target.getAttribute('title');
    }
};