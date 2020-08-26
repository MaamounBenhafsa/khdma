/**Mamoun Benhafsa Khdama Web Application 
Mon 03 Aug 2020
All Copyright  Reserved For Me
Please Respect My Work :)
*/

var urldataapi="https://khdma-d1868.firebaseio.com/Khdama.json"




//wilayas
  const wilaya = [{"id":"01","lat":26.418131,"lname":"Adrar","long":-0.6014717,"name":"Adrar"},{"id":"02","lat":36.1663328,"lname":" Chlef","long":1.3335514,"name":"Chlef"},{"id":"03","lat":33.8,"lname":" Laghouat","long":2.883333,"name":"Laghouat"},{"id":"04","lat":35.8775,"lname":"Oum El Bouaghi","long":7.1136111,"name":"Oum El Bouaghi"},{"id":"05","lat":35.55,"lname":" Batna","long":6.1666667,"name":"Batna"},{"id":"06","lat":36.75,"lname":" Béjaïa","long":5.0666667,"name":"Béjaïa"},{"id":"07","lat":34.85,"lname":" Biskra","long":5.7333333,"name":"Biskra"},{"id":"08","lat":31.608219,"lname":" Béchar","long":-2.220005,"name":"Béchar"},{"id":"09","lat":36.480499,"lname":" Blida","long":2.833905,"name":"Blida"},{"id":"10","lat":36.37763,"lname":" Bouira","long":3.8962348,"name":"Bouira"},{"id":"11","lat":24.0982893,"lname":" Tamanrasset","long":3.743509,"name":"Tamanrasset"},{"id":"12","lat":35.407139,"lname":" Tébessa","long":8.1208639,"name":"Tébessa"},{"id":"13","lat":34.8827758,"lname":" Tlemcen","long":-1.3166696,"name":"Tlemcen"},{"id":"14","lat":35.37849,"lname":" Tiaret","long":1.32569,"name":"Tiaret"},{"id":"15","lat":36.7166667,"lname":" Tizi Ouzou","long":4.05,"name":"Tizi Ouzou"},{"id":"16","lat":36.776214,"lname":"Alger","long":3.058375,"name":"Alger"},{"id":"17","lat":34.6666667,"lname":" Djelfa","long":3.25,"name":"Djelfa"},{"id":"18","lat":36.8,"lname":" Jijel","long":5.7666667,"name":"Jijel"},{"id":"19","lat":36.18898,"lname":" Sétif","long":5.414416,"name":"Sétif"},{"id":"20","lat":34.8333333,"lname":" Saïda","long":0.15,"name":"Saïda"},{"id":"21","lat":36.8666667,"lname":" Skikda","long":6.9,"name":"Skikda"},{"id":"22","lat":35.2022249,"lname":" Sidi Bel Abbès","long":-0.6298922,"name":"Sidi Bel Abbès"},{"id":"23","lat":36.902859,"lname":"Annaba","long":7.755543,"name":"Annaba"},{"id":"24","lat":36.4659,"lname":" Guelma","long":7.428361,"name":"Guelma"},{"id":"25","lat":36.35,"lname":" Constantine","long":6.6,"name":"Constantine"},{"id":"26","lat":36.2666667,"lname":" Médéa","long":2.75,"name":"Médéa"},{"id":"27","lat":35.939838,"lname":" Mostaganem","long":0.089767,"name":"Mostaganem"},{"id":"28","lat":35.70018,"lname":" M'Sila","long":4.545026,"name":"M'Sila"},{"id":"29","lat":35.400169,"lname":" Mascara","long":0.139852,"name":"Mascara"},{"id":"30","lat":31.96298,"lname":"Ouargla","long":5.342011,"name":"Ouargla"},{"id":"31","lat":35.6969444,"lname":"Oran","long":-0.6330556,"name":"Oran"},{"id":"32","lat":33.6802778,"lname":"El Bayadh","long":1.0202778,"name":"El Bayadh"},{"id":"33","lat":26.505,"lname":"Illizi","long":8.482222,"name":"Illizi"},{"id":"34","lat":36.0711916,"lname":" Bordj Bou Arreridj","long":4.7588042,"name":"Bordj Bou Arreridj"},{"id":"35","lat":36.7675962,"lname":" Boumerdès","long":3.7029002,"name":"Boumerdès"},{"id":"36","lat":36.7558581,"lname":"El Tarf","long":8.2212979,"name":"El Tarf"},{"id":"37","lat":27.6761012,"lname":" Tindouf","long":-8.1276526,"name":"Tindouf"},{"id":"38","lat":35.607778,"lname":" Tissemsilt","long":1.811111,"name":"Tissemsilt"},{"id":"39","lat":33.368309,"lname":"El Oued","long":6.867369,"name":"El Oued"},{"id":"40","lat":35.416667,"lname":" Khenchela","long":7.133333,"name":"Khenchela"},{"id":"41","lat":36.2863889,"lname":" Souk Ahras","long":7.9511111,"name":"Souk Ahras"},{"id":"42","lat":36.6178786,"lname":" Tipaza","long":2.3912362,"name":"Tipaza"},{"id":"43","lat":36.45,"lname":" Mila","long":6.25,"name":"Mila"},{"id":"44","lat":36.266667,"lname":"Aïn Defla","long":1.966667,"name":"Aïn Defla"},{"id":"45","lat":33.4350615,"lname":" Naâma","long":-0.9056623,"name":"Naâma"},{"id":"46","lat":35.30241,"lname":"Aïn Témouchent","long":-1.14489,"name":"Aïn Témouchent"},{"id":"47","lat":32.489059,"lname":" Ghardaïa","long":3.678539,"name":"Ghardaïa"},{"id":"48","lat":35.733333,"lname":" Relizane","long":0.55,"name":"Relizane"}]
  
  for (var i = 0; i < wilaya.length; i++) {
    console.log();
    document.getElementById("select_serach").innerHTML += '<option value="'+wilaya[i]["name"]+'" >'+wilaya[i]["name"]+'</option>'


  }










document.getElementById('search-filter').innerHTML = '<center><div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div> جاري التحميل ....</center>'



//shuffle function
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}





//none filter show all data from api
//filter box :) Search
function none_filter(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    document.getElementById('search-filter').innerHTML = '<center><div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div> جاري التحميل ....</center>'
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    document.getElementById('search-filter').innerHTML = "";
    //replaceByValue('work_type','masson','بناء')
    for( var i = 0; i < data.length; ++i ) {
      if( 'masson' == data[i]["work_type"] ) {
          data[i]["work_type"] = 'بناء' ;
      }
      if ('plumber' == data[i]["work_type"]) {
          data[i]["work_type"] = 'سباك'
      }
      if ('dyer' == data[i]["work_type"]) {
          data[i]["work_type"] = 'دهان'
      }
      if ('truck_driver' == data[i]["work_type"]) {
          data[i]["work_type"] = 'سائق شاحنة <br> وزن ثقيل'
      }
      if ('mini_truck_driver' == data[i]["work_type"]) {
          data[i]["work_type"] = 'سائق شاحنة <br> وزن خفيف'
      }
      if ('buldozer_driver' == data[i]["work_type"]) {
          data[i]["work_type"] = 'سائق جرافة'
      }   
      if ('electrician' == data[i]["work_type"]) {
          data[i]["work_type"] = 'كهربائي'
      }   
    }
    var data2 = shuffle(data)
    for (var i = 0; i < data2.length; i++) {
    document.getElementById('search-filter').innerHTML += '<div class="col-lg-3 col-md-6 mb-4" ><div class="card"><div class="view overlay"><a><div class="mask rgba-white-slight"></div></a></div><div class="card-body text-center"><h1><span class="badge  badge-primary">'+data[i]["work_type"]+'</span></h1><h2>'+data[i]["first_name"]+'  '+data[i]["last_name"]+'</h2></a><h5><strong><a href="tel:0'+data[i]["phone_number"]+'" class="dark-grey-text"><img src="img/phone.png" style="width: 34px">  0'+data[i]["phone_number"]+'</a></strong></h5><h4 class="font-weight-bold blue-text"><strong>'+data[i]["wilaya_place"]+'<br>'+data[i]["commune"]+'</strong></h4><a href="http://'+data[i]["facebook_messenger_url"]+'" target="_blank"><img src="img/messenger.png" class="img img-fluid"></img></a>  <p><button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#'+data[i]["first_name"].split(" ")[0]+'" aria-expanded="false" aria-controls="'+data[i]["first_name"].split(" ")[0]+'">عرض المزيد</button></p><div class="collapse" id="'+data[i]["first_name"].split(" ")[0]+'"><div class="card card-body">'+data[i]["caption"]+'</div></div></div></div></div>';
      }
    }
    };
    xmlhttp.open("GET", urldataapi, true);
    xmlhttp.send();
}








//filter by worker type
function filter(filter_value){
  document.getElementById("search-filter").scrollIntoView();
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    document.getElementById('search-filter').innerHTML = '<center><div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div> جاري التحميل ....</center>'
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    var data2 = shuffle(data);
    var filtered = data2.filter(a=>a.work_type==filter_value);
    document.getElementById('search-filter').innerHTML = "";
    for (var i = 0; i < filtered.length; i++) {
    document.getElementById('search-filter').innerHTML += '<div class="col-lg-3 col-md-6 mb-4" ><div class="card"><div class="view overlay"><a><div class="mask rgba-white-slight"></div></a></div><div class="card-body text-center"><h1><span class="badge  badge-primary">'+filtered[i]["work_type"]+'</span></h1><a href="" class="grey-text"><h2>'+filtered[i]["first_name"]+' '+filtered[i]["last_name"]+'</h2></a><h5><strong><a href="tel:0'+filtered[i]["phone_number"]+'" class="dark-grey-text"><img src="img/phone.png" style="width: 34px">  0'+filtered[i]["phone_number"]+'</a></strong></h5><h4 class="font-weight-bold blue-text"><strong>'+filtered[i]["wilaya_place"]+'<br>'+filtered[i]["commune"]+'</strong></h4><a href="http://'+filtered[i]["facebook_messenger_url"]+'" target="_blank"><img src="img/messenger.png" class="img img-fluid"></img></a><p><button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#'+filtered[i]["first_name"].split(" ")[0]+'" aria-expanded="false" aria-controls="'+filtered[i]["first_name"].split(" ")[0]+'">عرض المزيد</button></p><div class="collapse" id="'+filtered[i]["first_name"].split(" ")[0]+'"><div class="card card-body">'+filtered[i]["caption"]+'</div></div></div></div></div>';
      }
        }
    };
    xmlhttp.open("GET", urldataapi, true);
        xmlhttp.send();
}














//filter by place 
function filter_place(){
  document.getElementById("search-filter").scrollIntoView();
  var x = document.getElementById("select_serach").selectedIndex
  var place =document.getElementsByTagName("option")[x].value
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    document.getElementById('search-filter').innerHTML = '<center><div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div> جاري التحميل ....</center>'
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    var filtered_place = data.filter(a=>a.wilaya_place==place);
    document.getElementById('search-filter').innerHTML = "";
    if (place == 'الولاية') {
      none_filter()
    }
    if (filtered_place.length < 1) {
      document.getElementById('search-filter').innerHTML = '<div class="col-lg-3 col-md-6 mb-4" ><div class="card">'+ place+'  غير متوفر عمال في</div></div>'
    }
    else{
          for( var i = 0; i < data.length; ++i ) {
      if( 'masson' == data[i]["work_type"] ) {
          data[i]["work_type"] = 'بناء' ;
      }
      if ('plumber' == data[i]["work_type"]) {
          data[i]["work_type"] = 'سباك'
      }
      if ('dyer' == data[i]["work_type"]) {
          data[i]["work_type"] = 'دهان'
      }
      if ('truck_driver' == data[i]["work_type"]) {
          data[i]["work_type"] = 'سائق شاحنة <br> وزن ثقيل'
      }
      if ('mini_truck_driver' == data[i]["work_type"]) {
          data[i]["work_type"] = 'سائق شاحنة <br> وزن خفيف'
      }
      if ('buldozer_driver' == data[i]["work_type"]) {
          data[i]["work_type"] = 'سائق جرافة'
      }   
      if ('electrician' == data[i]["work_type"]) {
          data[i]["work_type"] = 'كهربائي'
      }   
    }
    var filtered_place = shuffle(filtered_place);
    for (var i = 0; i < filtered_place.length; i++) {
    document.getElementById('search-filter').innerHTML += '<div class="col-lg-3 col-md-6 mb-4" ><div class="card"><div class="view overlay"><a><div class="mask rgba-white-slight"></div></a></div><div class="card-body text-center"><h1><span class="badge  badge-primary">'+filtered_place[i]["work_type"]+'</span></h1><a href="" class="grey-text">'+filtered_place[i]["first_name"]+' '+filtered_place[i]["last_name"]+'</h2></a><h5><strong><a href="tel:0'+filtered_place[i]["phone_number"]+'" class="dark-grey-text"><img src="img/phone.png" style="width: 34px">  0'+filtered_place[i]["phone_number"]+'</a></strong></h5><h4 class="font-weight-bold blue-text"><strong>'+filtered_place[i]["wilaya_place"]+'<br>'+filtered_place[i]["commune"]+'</strong></h4><a href="http://'+filtered_place[i]["facebook_messenger_url"]+'" target="_blank"><img src="img/messenger.png" class="img img-fluid"></img></a><p><button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#'+filtered_place[i]["first_name"].split(" ")[0]+'" aria-expanded="false" aria-controls="'+filtered_place[i]["first_name"].split(" ")[0]+'">عرض المزيد</button></p><div class="collapse" id="'+filtered_place[i]["first_name"].split(" ")[0]+'"><div class="card card-body">'+filtered_place[i]["caption"]+'</div></div></div></div></div>';
      }
        }
      
    }
    };
    xmlhttp.onprogress = (event) => {
      document.getElementById('search-filter').innerHTML = '<center><div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div> جاري التحميل ....</center>'
    }
    xmlhttp.open("GET", urldataapi, true);
        xmlhttp.send();
}










//filter by place wilay 
function filter_place_w(filter_value){
  document.getElementById("search-filter").scrollIntoView();
  if (filter_value=="masson") {
    worker = 'بناء'
  }
  if (filter_value=="plumber") {
    worker = 'سباك'
  }
  if (filter_value=="dyer") {
    worker = 'دهان'
  }
  if (filter_value=="truck_driver") {
    worker = 'سائق شاحنة <br> وزن ثقيل'
  }
  if (filter_value=="mini_truck_driver") {
    worker = 'سائق شاحنة <br> وزن خفيف'
  }
  if (filter_value=="buldozer_driver") {
    worker = 'سائق جرافة'
  }
  if (filter_value=="electrician") {
    worker = 'كهربائي'
  }
  var x = document.getElementById("select_serach").selectedIndex
  var place_w =document.getElementsByTagName("option")[x].value
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    document.getElementById('search-filter').innerHTML = '<center><div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div> جاري التحميل ....</center>'
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    var filtered = data.filter(a=>a.work_type==filter_value);
    var filtered_place = shuffle(filtered.filter(a=>a.wilaya_place==place_w));
    document.getElementById('search-filter').innerHTML = "";

    if (filtered_place.length < 1) {
      document.getElementById('search-filter').innerHTML = '<div class="col-lg-3 col-md-6 mb-4"><div class="card"><h5> غير متوفر عمال ' +  worker +' في '+ place_w +'  <h5/></div></div>'
    }
    else{

    for (var i = 0; i < filtered_place.length; i++) {
    document.getElementById('search-filter').innerHTML += '<div class="col-lg-3 col-md-6 mb-4" ><div class="card"><div class="view overlay"><a><div class="mask rgba-white-slight"></div></a></div><div class="card-body text-center "><h1><span class="badge  badge-primary">'+worker+'</span></h1><a href="" class="grey-text"><h2>'+filtered_place[i]["first_name"]+' '+filtered_place[i]["last_name"]+'</h2></a><h5><strong><a href="tel:0'+filtered_place[i]["phone_number"]+'" class="dark-grey-text"><img src="img/phone.png" style="width: 34px">  0'+filtered_place[i]["phone_number"]+'</a></strong></h5><h4 class="font-weight-bold blue-text"><strong>'+filtered_place[i]["wilaya_place"]+'<br>'+filtered_place[i]["commune"]+'</strong></h4><a href="http://'+filtered_place[i]["facebook_messenger_url"]+'" target="_blank"><img src="img/messenger.png" class="img img-fluid"></img></a><p><button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#'+filtered[i]["first_name"].split(" ")[0]+'" aria-expanded="false" aria-controls="'+filtered[i]["first_name"].split(" ")[0]+'">عرض المزيد</button></p><div class="collapse" id="'+filtered[i]["first_name"].split(" ")[0]+'"><div class="card card-body">'+filtered[i]["caption"]+'</div></div></div></div></div>'
      }
    }
        }
    };
    xmlhttp.open("GET", urldataapi, true);
        xmlhttp.send();
}










function filter_place_c(filter_value){
  document.getElementById("search-filter").scrollIntoView();
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    document.getElementById('search-filter').innerHTML = '<center><div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div> جاري التحميل ....</center>'
  if (this.readyState == 4 && this.status == 200) {
  if (place == 'الولاية') {
      none_filter()
    var data = JSON.parse(this.responseText);
    var filtered = data.filter(a=>a.work_type==filter_value);
    var filtered_place = filtered.filter(a=>a.commune==place_c);
    document.getElementById('search-filter').innerHTML = "";
    for (var i = 0; i < filtered_place.length; i++) {
    document.getElementById('search-filter').innerHTML += '<div class="col-lg-3 col-md-6 mb-4" ><div class="card"><div class="view overlay"><a><div class="mask rgba-white-slight"></div></a></div><div class="card-body text-center"><a href="" class="grey-text"><h2>'+filtered_place[i]["first_name"]+' '+filtered_place[i]["last_name"]+'</h2></a><h5><strong><a href="tel:0'+filtered_place[i]["phone_number"]+'" class="dark-grey-text"><img src="img/phone.png" style="width: 34px">   0'+filtered_place[i]["phone_number"]+'</a></strong></h5><h4 class="font-weight-bold blue-text"><strong>'+filtered_place[i]["wilaya_place"]+'<br>'+filtered_place[i]["commune"]+'</strong></h4><a href="http://'+filter_place[i]["facebook_messenger_url"]+'" target="_blank"><img src="img/messenger.png" class="img img-fluid"></img></a><p><button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#'+filtered[i]["phone_number"]+'" aria-expanded="false" aria-controls="'+filtered[i]["phone_number"]+'">عرض المزيد</button></p><div class="collapse" id="'+filtered[i]["phone_number"]+'"><div class="card card-body">'+filtered[i]["caption"]+'</div></div></div></div></div>';
      }
    }
        }
    };
    xmlhttp.open("GET", urldataapi, true);
        xmlhttp.send();
}
