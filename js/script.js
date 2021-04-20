var users = [

    /* Female */
    {name: 'Mary Jane',gender: 'F',hobby: 'Singing and Dancing',avatar: '1.jpg'},
    {name: 'Grace Frimpong',gender: 'F',hobby: 'Watching Movies',avatar: '2.jpg'},
    {name: 'Diana Harrison',gender: 'F',hobby: 'Running',avatar: '3.jpg'},
    {name: 'Mercy Abane',gender: 'F',hobby: 'Cooking',avatar: '4.jpg',},

    /* Male */
    {name: 'Eben Esson',gender: 'M',hobby: 'Travelling',avatar: 'avatar5.png'},
    {name: 'Emmanuel Gyamfi',gender: 'M',hobby: 'Music',avatar: 'avatar7.png'},
    {name: 'Victor James',gender: 'M',hobby: 'Swimming',avatar: 'avatar6.png'},
    {name: 'Robertson Asare',gender: 'M',hobby: 'Gyming',avatar: 'avatar8.png'},
];

window.addEventListener('load', function() {
    
    var results = document.getElementById('results');
    
    function search() {
        
        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
        
        //get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;

        var ageField = document.getElementById('age');
        // var 

        
        var resultsHtml = '';
        var usersLength = users.length;

        for(var i = 0; i < usersLength; i++) {
            //check gender
            if (gender == 'A' || gender == users[i].gender) {
                //check hobby
                if (hobby == '' || hobby == users[i].hobby) {
                    resultsHtml += '<div class="person-row">\
                           <img src="images/' + users[i].avatar + '" />\
                           <div class="person-info">\
                           <div>' + users[i].name + '</div>\
                           <div>' + users[i].hobby + '</div></div>\
                            <button>Add as friend</button></div>';  
                }
            }
        }
        
        results.innerHTML = resultsHtml;
    }
    
    var searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', search);
});
