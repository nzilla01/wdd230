async function fetchmembership() {
    const mem = "./data/member.json";
    try{
        const response = await fetch(mem);
        if(!response.ok) throw new Error("link was not found");
        const data = await response.json();
        console.log(data.members);
        document.getElementById("js").innerHTML = data.members.map(member => {

            return `
            <div class="companies">
             <img src=" ${member.image} " alt= "company logo " width = "300" loading="lazy">  <br>
            <p><strong> Name:</strong> ${member.name}</p>  <br>
            <p> <strong> Email: </strong> ${member.email} </p> <br>
             <p> <strong>Phone : </strong> ${member.phone}</p><br>
              <p> <strong> website: </strong> <a href="${member.website}"> ${member.website} </a> </p> <br>
              <p> <strong> membership: </strong> ${member.membership} </p></br> 
               <p> <strong> date joined: </strong> ${member.date} </p>
               </div>`
            ;
        }).join(""); ;
    }
        catch(error){
            console.error("membership fetch error:", error);
            document.getElementById("js").innerHTML = "<p> Sorry, we are unable to fetch the membership data at this time. Please try again later. 404 error </p>";
        }
    }
    document.addEventListener("DOMContentLoaded", () => {
        fetchmembership();
    });