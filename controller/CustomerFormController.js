import { validateMobile,validateEmail } from "../util/Validation.js";
import CustomerModel from "../models/CustomerModel.js";
import {customer_array} from "../db/Database.js"

const btnDisableOrEnable = (value)=>{
    $("#customer_update_btn").prop("disabled", value);
    $("#customer_delete_btn").prop("disabled", value);
};

btnDisableOrEnable(true);

const cleanCustomerForm  = () => {
    $('#mobileNumber').val("");
    $('#name').val("")
    $('#email').val("");
    $('#address').val("");
};

let selected_customer_index = null;

const loadCustomerTable = ()=>{
    $("#customerTableBody").empty();
    customer_array.map((item,index)=>{
        console.log(item);
        let data = `<tr><td>${item.mobileNumber}</td><td>${item.name}</td><td>${item.email}</td><td>${item.address}`
        $("#customerTableBody").append(data);
    })
};

$("#customer_add_btn").on('click', ()=>{
    let mobileNumber = $('#mobileNumber').val(); 
    let name = $('#name').val();
    let email = $('#email').val();
    let address = $('#address').val();

    if(!validateMobile(mobileNumber)){
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Mobile",
        });
    }else if(name.length===0){
        Swal.fire({
            title: "Invalid Input",
            text: "Enter customer name",
            icon: "question"
          });
    }else if(!validateEmail(email)){
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Email",
        });
    }else if(address.length===0){
        Swal.fire({
            title: "Invalid Input",
            text: "Enter customer address",
            icon: "question"
          });
    }else{
        
        let customer = new CustomerModel(mobileNumber,name,email,address);

        customer_array.push(customer);
        cleanCustomerForm();
        loadCustomerTable();
    }
});

$('#customerTableBody').on('click', 'tr', function(){
    let index = $(this).index();

    selected_customer_index = $(this).index();

    let customer_obj = customer_array[index];

    let mobileNumber = customer_obj.mobileNumber;
    let name = customer_obj.name;
    let email = customer_obj.email;
    let address = customer_obj.address;

    $('#mobileNumber').val(mobileNumber);
    $('#name').val(name)
    $('#email').val(email);
    $('#address').val(address);

    btnDisableOrEnable(false);

});

$('#customer_update_btn').on('click', function(){

    let mobileNumber = $('#mobileNumber').val(); 
    let name = $('#name').val();
    let email = $('#email').val();
    let address = $('#address').val();

    if(!validateMobile(mobileNumber)){
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Mobile",
        });
    }else if(name.length===0){
        Swal.fire({
            title: "Invalid Input",
            text: "Enter customer name",
            icon: "question"
          });
    }else if(!validateEmail(email)){
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Email",
        });
    }else if(address.length===0){
        Swal.fire({
            title: "Invalid Input",
            text: "Enter customer address",
            icon: "question"
          });
    }else{
        
        let customer = new CustomerModel(mobileNumber,name,email,address);
        customer_array[selected_customer_index] = customer;
        cleanCustomerForm();
        loadCustomerTable();
        btnDisableOrEnable(true);
    }

});

$('#customer_delete_btn').on('click', function(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            cancelButton: "btn btn-primary",
            confirmButton: "btn btn-danger"
        },
        // buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You want to delete customer?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
        reverseButtons: false
    }).then((result) => {
        if (result.isConfirmed) {

            customer_array.splice(selected_customer_index, 1);
            cleanCustomerForm();
            loadCustomerTable();
            btnDisableOrEnable(true);
            
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            
        }
    });
});