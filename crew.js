
let title = document.getElementById('crewTitle');
let id= document.getElementById('crewName');
let desc = document.getElementById('crewDescription');
let CrewImage = document.getElementById('Image');

function firstCrew(){

    title.innerHTML ='COMMANDER'
    id.innerHTML ='Douglas Hurley'
    desc.innerHTML = ` Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
    and former NASA astronaut. He launched into space for the third time as 
    commander of Crew Dragon Demo-2.`
    CrewImage.src='/starter-code/assets/crew/image-douglas-hurley.png'
    
}

function secondCrew(){
    title.innerHTML ='FLIGHT ENGINEER'
    id.innerHTML ='FLIGHT ENGINEER'
    desc.innerHTML = `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
    Ansari was the fourth self-funded space tourist, the first self-funded woman to 
    fly to the ISS, and the first Iranian in space.`
    CrewImage.src='/starter-code/assets/crew/image-anousheh-ansari.webp'

}

function thirdCrew(){
    title.innerHTML =' PILOT '
    id.innerHTML ='Victor Glover'
    desc.innerHTML = ` Pilot on the first operational flight of the SpaceX Crew Dragon to the 
    International Space Station. Glover is a commander in the U.S. Navy where 
    he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
    station systems flight engineer.`
    CrewImage.src='/starter-code/assets/crew/image-victor-glover.png'
}

function fourthCrew(){
    title.innerHTML ='MISSION SPECIALIST'
    id.innerHTML ='  Mark Shuttleworth'
    desc.innerHTML = ` Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
    the Linux-based Ubuntu operating system. Shuttleworth became the first South 
    African to travel to space as a space tourist. `
    CrewImage.src='/starter-code/assets/crew/image-mark-shuttleworth.png'


};
