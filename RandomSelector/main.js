var pictures = [
    "https://scontent.ftpe8-4.fna.fbcdn.net/v/t1.0-9/31946293_624543851223672_6121196890726858752_n.jpg?_nc_cat=104&_nc_oc=AQkFY5ACMQWFoy_k9OWs_GdosTjCjshu0i4DG8nT9ce3M-ECI1rBrDpL_esb4DuWHuk&_nc_ht=scontent.ftpe8-4.fna&oh=a78129d4195c7c5713e134ea940b6693&oe=5D9AECF0",
    "https://scontent.ftpe8-4.fna.fbcdn.net/v/t1.0-9/10425897_336161736564451_2256779112977509634_n.jpg?_nc_cat=110&_nc_oc=AQnLzmBQJUKhraJP7i-18XM1Wfa0EntkGfSambF-C9Y8dMW3GKEtpimD1tY22v9tuXU&_nc_ht=scontent.ftpe8-4.fna&oh=5eab8e66ff4618fa3e733dbf66b85667&oe=5D8E1EE1",
    "https://scontent.ftpe8-3.fna.fbcdn.net/v/t1.0-9/29571208_1728273893898607_5867127704199238175_n.jpg?_nc_cat=111&_nc_oc=AQn9lgjlIoBRX3btlCfiY9QklPKyWOL8Ar0UuK9ZVly1BU2omraTE5TJQuaOhpQ1HTw&_nc_ht=scontent.ftpe8-3.fna&oh=ebb08808206733588a82d287b4b57ba7&oe=5D816150",
]

$(document).ready(function(){
    $("input").click(function()
    {
        var numberOFListItem = $("#choices li").length; //計算有多少個選項
        var randomChildNumber = Math.floor(Math.random()*numberOFListItem); //在此亂數範圍中產生亂數
        
        $("H1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src", pictures[randomChildNumber]);
    });
});

