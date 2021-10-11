//show aside when bottom of page
$(window).scroll(function() {

    if($(document).height() - ($(window).scrollTop() + $(window).height()) < 250 ) {
        $('.aside').addClass('show');
    }
    else  {
        $('.aside').removeClass('show');
    }
});

$(function(){
    $('#form_checkout').validate({
        rules: {
            ship_first_name: 'required',
            ship_last_name: 'required',
            bill_email: {
                required: true,
                email: true
            },
            ship_state: {
                required: true,
                // minlength: 6
            },
            ship_address: 'required',
            ship_city: 'required',
            ship_zip: 'required',
            ship_country: 'required',
            ship_phone: 'required',
            // password: {
            //     required: true,
            //     minlength: 8
            // },
            // confirmPassword: {
            //     required: true,
            //     minlength: 8,
            //     equalTo: '#password'
            // }
        },
        messages: {
            ship_first_name: 'Please enter your First Name',
            ship_last_name: 'Please enter your Last Name',
            bill_email: 'Please enter a valid Email Address',
            ship_state: 'Please select State',
            ship_address: 'Please enter Address',
            ship_city: 'Please enter City',
            ship_zip: 'Please enter ZIP',
            ship_country: 'Please select Country',
            ship_phone: 'Please enter Phone',
            // userName: {
            //     required: 'Please enter a User Name',
            //     minlength: 'Your User Name must consist of at least 6 characters'
            // },
            // password: {
            //     required: 'Please provide a Password',
            //     minlength: 'Your Password must be at least 8 characters long'
            // },
            // confirmPassword: {
            //     required: 'Please provide a Password',
            //     minlength: 'Your Password must be at least 8 characters long',
            //     equalTo: 'Please enter the same Password as above'
            // }
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