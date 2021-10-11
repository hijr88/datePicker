import {CustomDate, datePicker} from "/modules/date/date";

const beginDate = document.querySelector('#beginDate');
const endDate = document.querySelector('#endDate');

datePicker({
    'selector' : beginDate,
    pairId: 1,
    initialDate: '2021-08-06'
})

datePicker({
    'selector' : endDate,
    pairId: 1
})