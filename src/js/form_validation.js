$("myForm").validate({
    rules: {
        full_name: {

        },
        email: {
            required: true,
            email: true
        },
        website: {
            required: true,
            minlength: 3
        }

    }
});