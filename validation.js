// validation script here

const patterns = {
	telephone: /^\d{11}$/, // must be 11 characters long and digits only
	username: /^[a-z\d]{5,12}$/i,// must be 5 to 12 chars long and only alpha numerical characters, case insensitive
	password: /^[\w@-]{8,20}$/i,// alphanumeric @,_ and - are allowed, case insensitive, 8 to 20 chars long
	slug: /^[a-z\d-]{8,20}$/, //only lowercase letters, numbers and hyphens allowed, 8 to 20 chars long.
	email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

const inputs = document.querySelectorAll('input');

// validation function
//const validate = (field,regex) => field.className  = regex.test(field.value) ? 'valid' : 'invalid'; 
function validate(field,regex){
	if (regex.test(field.value)){
		field.className = 'valid';
	} else {
		field.className = 'invalid';
	}
} 


inputs.forEach((input) => {
	input.addEventListener('keyup', (e) =>{
		//console.log(e.target.attributes.name.value);
		validate(e.target,patterns[e.target.attributes.name.value])
	});
});
