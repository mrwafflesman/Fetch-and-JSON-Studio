window.addEventListener('load', function(){
    const astronuat = fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    
    astronuat.then(function(response){
        response.json().then(function(json){
            
            json.sort((a, b) => {
                return b.hoursInSpace - a.hoursInSpace;
            });
            
            let container = document.getElementById("container")

            for (let i=0; i<json.length; i++) {
                container.innerHTML += 
                `<div class='astronaut'>
                    <div class='bio'>
                        <h3>${json[i]["firstName"]} ${json[i]["lastName"]}</h3>
                        <ul>
                            <li>Hours in space: ${json[i]["hoursInSpace"]}</li>
                            <li id = "active${i}">Active: ${json[i]["active"]}</li>
                            <li>Skills: ${json[i]["skills"]}</li>
                        </ul>
                    </div>
                    <img class='avatar' src='${json[i]["picture"]}'>
                </div>`

                if (json[i]["active"] === true) {
                    document.getElementById(`active${i}`).style.color = "green";
                }
            }
            document.getElementById("astronautCount").innerHTML = `Astronuat count is ${json.length}`
        })
    })
})