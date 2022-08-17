// declaration
const database = document.getElementById('database');
const search = document.getElementById('search');
const selectType =document.getElementById('type');
// let selecttypecontrol = '';



// templating html body function
function datainfo(arr){
    let result = '';
    arr.forEach(element => {
        result +=  `
                     <div class="col-md-3 mt-4">
                        <div class="card">
                            <div class="card-body">
                                <figure>
                                    <div class="main-title mb-4">
                                        <h1 class="${bgColor(element.type)}">${element.type}</h1>
                                    </div>
                                    <h2 class="name">${element.name}</h2>
                                    <p class="duration">from ${element.dateOpen} to ${element.dateClose} </p>
                                    <p class="description">${element.description}</p>
                                </figure>
                                <a href="${element.link}" target="_blank"><button type="button" class="btn btn-info">Details</button></a>
                            </div>
                        </div>
                    </div>
        `
    });
    database.innerHTML =result;
}
datainfo(db)


// callback function of keyup event on search
function onenter(ele){
    if(ele.key ==='Enter'){
        // console.log('event triggrd')
        let name = ele.target.value.toLowerCase().trim();
        // console.log(name)
        let findname = db.filter(title =>title.name.toLowerCase().trim().includes(name) )
        datainfo(findname)
    }else(
        datainfo(db)
    )
}

//function for colors on type
function bgColor (color){
    if(color === 'hardware'){
        return 'blue'
    }else if(color === 'app'){
        return 'orange'
    }else{
        return 'green'
    }
}

//callback function of change event for dropdown
function onchange(Event){
  let selecttypecontrol= Event.target.value
    // console.log(selecttypecontrol)
    if(selecttypecontrol !=='type') {
        let name = db.filter(a => a.type === selecttypecontrol)
    datainfo(name)
    }else{
        datainfo(db)
    }
    
}


// all events
search.addEventListener('keyup',onenter)
selectType.addEventListener('change',onchange)