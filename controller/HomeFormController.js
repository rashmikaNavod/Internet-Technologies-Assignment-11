import { customer_array,item_array,order_array } from "../db/Database.js";


$("#home").on('click',function(){
    let customer_count = customer_array.length;
    $("#customer-count").text(customer_count);

    let item_count = item_array.length;
    $("#item-count").text(item_count);

    let order_count = order_array.length;
    $("#orders-count").text(order_count);
});

