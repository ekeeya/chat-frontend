export const  conversations=[
    {   id:1,
        title:"Kanyike Andrew",
        imageUrl:require("../images/profiles/daryl.png"), 
        createdAt:"Apr 04", 
        latestMessageText:"In this crazy life, we reach for the best we can",
        messages:[]
    },
    {
        id:2,
        title:"Nnanda Kizito",
        imageUrl:require("../images/profiles/ben.png"), 
        createdAt:"Apr 05", 
        latestMessageText:"When i need you i just hold out my hand then i need you",
        messages:[]
    },
    {
        id:3,
        title:"Kayaga Sherinah",
        imageUrl:require("../images/profiles/sarah.jpeg"), 
        createdAt:"Apr 05", 
        latestMessageText:"When i need you i just hold out my hand then i need you",
        messages:[
            {
                imageUrl:require("../images/profiles/daryl.png"),
                imageAlt:"Keeya",
                messageText:"Damn, shit works",
                sentAt:"just now",
                isMyMessage:true
            },
            {
                imageUrl:require("../images/profiles/sarah.jpeg"),
                imageAlt:"Sherry",
                messageText:"Hey check if it works.",
                sentAt:"1 minute ago",
                isMyMessage:false
            },
            {
                imageUrl:require("../images/profiles/daryl.png"),
                imageAlt:"Keeya",
                messageText:"In this crazy life, we reach for the best we can, but sometimes it slips away no matter how we plan",
                sentAt:"2 minute ago",
                isMyMessage:true
            }, ]
    }
]