$(document).ready(function() {

    //show aside when bottom of page
    $(window).scroll(function() {

        if($(document).height() - ($(window).scrollTop() + $(window).height()) < 250 ) {
            $('.aside').addClass('show');
        }
        else  {
            $('.aside').removeClass('show');
        }
    });

    //stop submit form
    $("#form_checkout").submit(function (e) {
        e.preventDefault();
    });

    //validation form
    $(function(){
        $('#form_checkout').validate({
            rules: {
                ship_first_name: 'required',
                ship_last_name: 'required',
                ship_address: 'required',
                ship_city: 'required',
                ship_state: {
                    required: true,
                },
                ship_zip: {
                    required: true,
                    number: true
                },
                ship_country: 'required',
                ship_phone: 'required',
                ship_email: {
                    required: true,
                    email: true
                },

                card_first_name: 'required',
                card_last_name: 'required',
                card_number: {
                    required: true,
                    creditcard: true
                },
                cc_exp_month: 'required',
                cc_exp_year: 'required',
                cvv_number: {
                        required: true,
                        minlength: 3,
                        number: true
                     },
                card_phone: 'required',

                billing_street: 'required',
                billing_state: 'required',

                email_contact: 'required',
            },
            messages: {
                ship_first_name: 'Please enter your First Name',
                ship_last_name: 'Please enter your Last Name',
                ship_address: 'Please enter Address',
                ship_city: 'Please enter City',
                ship_state: 'Please select State',
                ship_zip: 'Please enter ZIP',
                ship_country: 'Please select Country',
                ship_phone: 'Please enter Phone',
                ship_email: 'Please enter a valid Email Address',

                card_first_name: 'Please enter your First Name',
                card_last_name: 'Please enter your Last Name',
                card_number: 'Please enter a valid Card Number',
                cc_exp_month: 'Please enter month of exp month card',
                cc_exp_year: 'Please enter year of exp month card',
                cvv_number: 'Please enter CVV number',
                card_phone: 'Please enter Phone',

                billing_street: 'Please enter Street',
                billing_state: 'Please select State',

                email_contact: 'Please enter valid contact Email Address',
            },
            errorElement: 'span',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');

                if (element.prop('type') === 'checkbox') {
                    error.insertAfter( element.closest(".input-wrapper").next('label'));
                } else {
                    error.insertAfter(element.closest(".input-wrapper"));
                }
            },
            highlight: function (element, errorClass, validClass) {
                $(element).addClass('is-invalid').removeClass('is-valid');
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).addClass('is-valid').removeClass('is-invalid');
            }
        });
    });

});