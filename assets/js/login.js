function showPassword() {

    var key_attr = $('#key').attr('type');

    if (key_attr != 'text') {

        $('.checkbox').addClass('show');
        $('#key').attr('type', 'text');

    } else {

        $('.checkbox').removeClass('show');
        $('#key').attr('type', 'password');

    }

}

function signup() {
    location.href = "../patient-registration/sign-up.html";
}

function login() {
    location.href = "../admin-dashboard/context/client/client-patient.html"
}

function registerDoctor() {
    location.href = "../doctor-registration/sign-up.html"
}