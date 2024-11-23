function redirectToCustomer(element) {
    var customerId = element.getAttribute('data-id');
    window.location.href = '/manage/detail-customer/' + customerId;
}
function redirectToProduct(element) {
    var productId = element.getAttribute('data-id');
    window.location.href = '/manage/edit-product/' + productId;
}


//function updateBrandInputValue(){
//    var selectedBrandId = document.getElementById("brand-select").value;
//    document.getElementById("brand-id").value = selectedBrandId;
//}
//function updateUnitInputValue(){
//    var selectedBrandId = document.getElementById("unit-select").value;
//    document.getElementById("unit-id").value = selectedBrandId;
//}