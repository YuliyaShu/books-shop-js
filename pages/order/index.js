const obj = {
    todayIs() {
        let date =new Date;
        let month;
        if (date.getMonth() + 1 < 10) {
            month = `0${date.getMonth() + 1}`;
        } else {
            month = date.getMonth() + 1;
        }
        return `${date.getFullYear()}-${month}-${date.getDate() + 1}`;
    },

    totalSum() {
        return localStorage.getItem('sum');
    }
}
document.getElementById('date').min = obj.todayIs();
document.getElementById('submit').value = `Total: $ ${obj.totalSum()}     Confirm order`;