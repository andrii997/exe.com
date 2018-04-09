$("#my_form").validate({
    rules: {
        full_name: {
            required: true,
            minlength: 6
        },
        email_form: {
            required: true,
            email: true
        },
        your_website: {
            required: true,
            minlength: 5
        }
    },
    messages: {
        full_name: {
            required: 'Please enter an full name'
        },
        email_form: {
            required: 'Please enter an email address',
            email: 'Please a <i>valid email address</i>'
        }
    }
});
