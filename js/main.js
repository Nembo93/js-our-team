`use strict`;

const team =[
    {
        "memberName": `Wayne Barnett`,
        "role": `Founder and Ceo`,
        "picture": `wayne-barnett-founder-ceo.jpg`
    },
    {
        "memberName": `Angela Caroll`,
        "role": `Chief Editor`,
        "picture": `angela-caroll-chief-editor.jpg`
    },
    {
        "memberName": `Walter Gordon`,
        "role": `Office manager`,
        "picture": `walter-gordon-office-manager.jpg`
    },
    {
        "memberName": `Angela Lopez`,
        "role": `Social media manager`,
        "picture": `angela-lopez-social-media-manager.jpg`
    },
    {
        "memberName": `Scott Estrada`,
        "role": `Developer`,
        "picture": `scott-estrada-developer.jpg`
    },
    {
        "memberName": `Barbara Ramos`,
        "role": `Graphic Designer`,
        "picture": `barbara-ramos-graphic-designer.jpg`
    }
]
// // console.log(team);
// function myfunction(){
//     document.createElement(`ul`);
//     console.log(myfunction);
// for(i=0; i<team.length; i++){
//     document.createElement(`ul`).innerHTML=;
//     for (let key in team[i]){
//         console.log(team[i][key]);
//     }
// }
// }



for(i=0; i<team.length; i++){
    const member = document.createElement(`div`);
    document.body.appendChild(member);
    console.log(member);
    for (let key in team[i]){
        console.log(team[i][key]);
        let data = team[i][key];
        member.append(data);
    }
}
