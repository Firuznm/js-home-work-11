// 1) 1 ədəd Confirm metodu olacaq.Əgər user OK click etsə body background-color qara olacaq

// let bodyChangeColor= confirm("Səhifənin rəngi dəyişmək isləyirsiniz?");

// if(bodyChangeColor){
// 	document.body.style.backgroundColor = "black";  
// }else{
// 	alert("Xeyir secdiyinizə görə səhifənin rəngi dəyişmədi")
// }
// ============================================================================================
// 2) 1 ədəd Prompt metodu olacaq.
//    User yaşını daxil etməlidir.Əgər userin yaşı 18-dən balacadırsa xəbərdarlıq mesajı çıxarsın

// let userAge= +prompt("Yaşınızı daxil edin")

// if(userAge>18){
// 	alert("Buyurun xos gelmiziniz")
// }else{
// 	alert("Yaşınızı 18-dən kicik olduğu ücün daxil ola bilməzsiniz")
// }

// ======================================================================================================
// 3) 1 ədəd Class və Obyekt(ad,soyad,password propertiləri və fullname metodu olacaq) hazırlanır.
// Sonra elə bir metod yazılmalıdır ki həmin metodu çağırdıqda
//  Obyektin daxilindən fullname dəyərini götürüb bütün hərflərini böyük formada HTML'a yazdırsın

class User {

	constructor(name,surname,password) {
	  this.name = name;
	  this.surname=surname;
	  this.password=password
	}
	
	fullname() {
		const element = document.createElement('div');
		element.innerText =  `${this.name} ${this.surname}`.toUpperCase()
		document.body.append(element)
	}
  
  }
  
  let user = new User("firuz","memmedov");
  user.fullname();

 