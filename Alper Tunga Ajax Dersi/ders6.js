$(document).ready(function () {
    //Inputs
    const txtFirstName = $('#firstName');
    const txtLastName = $('#lastName');
    const txtEmailAddress = $('#emailAddress');
    const txtPhoneNumber = $('#phoneNumber');
    //Buttons
    const btnSend = $('#send');

    //User
    const user ={
        firstName:'Yusuf',
        lastName:'Boyacı',
        emailAddress:'alper@altu.dev',
        phoneNumber:'05556667755'
    };
    txtFirstName.val(user.firstName);//burdaki textbox a kullanıcının adını atamış oluyoruz
    txtLastName.val(user.lastName);
    txtEmailAddress.val(user.emailAddress);
    txtPhoneNumber.val(user.phoneNumber);
    btnSend.click(function() {
if (!txtFirstName.val().length > 0 || !txtLastName.val().length > 0 || !txtEmailAddress.val().length > 0 || !txtPhoneNumber.val().length > 0) {
    alert('Lütfen bilgilerinizi boş bırakmayınız.')
} else {
    
}
    });
})