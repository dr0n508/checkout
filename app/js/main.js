$(document).ready(function() {


    //show aside on mobile
    let docHeight = $(document).height();

    $(window).scroll(function() {

        if($(window).scrollTop() + 100 > (docHeight - $(window).height()) ) {
            $('.aside').addClass('show');
        }
        else {
            $('.aside').removeClass('show');
        }

    });

    //show billing address
    $('#billing_as_shipping').change(function(){
        $('#billing_address_section').toggle();
    });

    //promo-show
    $( "#promo_show").on( "click", function() {
        $('.promo-wrapper').toggleClass('show');
        $( "#promo_show_btn" ).toggleClass('down');
    });

    //remove item from cart
    $('.delete-item').click(function () {
        $(this).closest('.list-item').remove();
    });

    //custom imput number
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    //stop submit form
    $("#form_checkout1").submit(function (e) {
        e.preventDefault();
    });

    $("#form_checkout2").submit(function (e) {
        e.preventDefault();
    });

    //validation form
    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );

    $(function(){
        $('#form_checkout1').validate({
            rules: {
                ship_first_name: {
                    required: true,
                    lettersonly: true
                },
                ship_last_name: {
                    required: true,
                    lettersonly: true
                },
                ship_address: {
                    required: true,
                    regex: "^[a-zA-Z0-9]+$"
                },
                ship_city: {
                    required: true,
                    regex: "^[a-zA-Z0-9]+$"
                },
                ship_state: {
                    required: true,
                },
                ship_zip: {
                    required: true,
                    regex: "^[A-Za-z0-9 _-]*$",
                    minlength: 2,
                },
                ship_country: 'required',
                ship_phone: 'required',
                ship_email: {
                    required: true,
                    email: true
                }
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

    $(function(){
        $('#form_checkout2').validate({
            rules: {
                card_first_name: {
                    required: true,
                    lettersonly: true
                },
                card_last_name: {
                    required: true,
                    lettersonly: true
                },
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

                billing_street: {
                    required: true,
                    regex: "^[a-zA-Z0-9]+$"
                },
                billing_state: {
                    required: true,
                },

                email_contact: {
                    required: true,
                    email: true
                },
            },
            messages: {
                card_first_name: 'Please enter your First Name',
                card_last_name: 'Please enter your Last Name',
                card_number: 'Please enter a valid Card Number',
                cc_exp_month: 'Please enter month exp',
                cc_exp_year: 'Please enter year exp',
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