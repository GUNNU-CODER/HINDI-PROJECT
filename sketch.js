var meerabai1,meerabai2;
var gameState;
var next;
function preload(){
meerabai1=loadImage("meerabai.jpg");
meerabai2=loadImage("meerabai1.jpg");
next=loadImage("intro.png");
birthplace=loadImage("birthplace.jfif");
marriage=loadImage("marriage.jfif");
death=loadImage("death.jfif");
krishna=loadImage("krishna.jfif");
}



function setup(){
createCanvas(800,700);
gameState=1;
meerabai=createSprite(150,200);
meerabai.addImage(meerabai1);
meerabai.scale=0.7;
meerabai.visible=false;
nextGameState=createSprite(650,650);
nextGameState.addImage(next);
nextGameState.scale=0.2;
nextGameState.visible=false;
meerabai1=createSprite(400,200);
meerabai1.addImage(meerabai2);
meerabai1.scale=0.7;
meerabai1.visible=false;
birth=createSprite(400,200);
birth.addImage(birthplace);
birth.visible=false;
nextGameState1=createSprite(650,150,30,30);
nextGameState1.addImage(next);
nextGameState1.visible=false;
nextGameState1.scale=0.2;
nextGameState2=createSprite(650,150,30,30);
nextGameState2.addImage(next);
nextGameState2.visible=false;
nextGameState2.scale=0.2;
nextGameState3=createSprite(650,150,30,30);
nextGameState3.addImage(next);
nextGameState3.visible=false;
nextGameState3.scale=0.2;
nextGameState4=createSprite(650,150,30,30);
nextGameState4.addImage(next);
nextGameState4.visible=false;
nextGameState4.scale=0.2;
nextGameState5=createSprite(650,150,30,30);
nextGameState5.addImage(next);
nextGameState5.visible=false;
nextGameState5.scale=0.2;
d=createSprite(600,400,30,30);
d.addImage(death);
d.visible=false;
k=createSprite(100,100,30,30);
k.addImage(krishna);
k.visible=false;
k.scale=0.6
}




function draw(){
background("black")





if(gameState===1){
textSize(100);
strokeWeight(10);
stroke("deeppink");
fill("white");
    text("मीरा बाई",300,150);
    textSize(50);
strokeWeight(5);
stroke("deeppink");
fill("white");
    text("जन्म: 1498, मेड़ता, राजस्थान",50,400);
    text("मृत्यु: 1547",50,500);
    text("कार्यक्षेत्र: कवियित्री, महान कृष्ण भक्त",50,600);
    meerabai.visible=true;
    nextGameState.visible=true;

d.visible=false
nextGameState5.visible=false
nextGameState4.visible=false;
nextGameState3.visible=false;
nextGameState2.visible=false;
nextGameState1.visible=false
    if(mousePressedOver(nextGameState)){
        gameState=2;
            }
}


if(gameState===2){
    textSize(50);
strokeWeight(10);
stroke("deeppink");
fill("white");
    text("भूमिका",350,60);
    textSize(20);
strokeWeight(1);
stroke("deeppink");
fill("white");
    text("मीरा बाई एक मध्यकालीन हिन्दू आध्यात्मिक कवियित्री और कृष्ण भक्त थीं। वे भक्ति आन्दोलन के सबसे",10,400);
    text("लोकप्रिय भक्ति-संतों में एक थीं। भगवान श्रीकृष्ण को समर्पित उनके भजन आज भी उत्तर भारत में",10,420);
    text("बहुत लोकप्रिय हैं और श्रद्धा के साथ गाये जाते हैं। मीरा का जन्म राजस्थान के एक राजघराने में हुआ",10,440);
    text("था। मीरा बाई के जीवन के बारे में तमाम पौराणिक कथाएँ और किवदंतियां प्रचलित हैं। ये सभी किवदंतियां ",10,460);
    text("मीराबाई के बहादुरी की कहानियां कहती हैं और उनके कृष्ण प्रेम और भक्ति को दर्शाती हैं। इनके माध्यम",10,480);
    text("से यह भी पता चलता है की किस प्रकार से मीराबाई ने सामाजिक और पारिवारिक दस्तूरों का बहादुरी से ",10,500);
    text("मुकाबला किया और कृष्ण को अपना पति मानकर उनकी भक्ति में लीन हो गयीं। उनके ससुराल पक्ष ने",10,520);
    text("उनकी कृष्ण भक्ति को राजघराने के अनुकूल नहीं माना और समय-समय पर उनपर अत्याचार किये।",10,540);
    text("भारतीय परंपरा में भगवान् कृष्ण के गुणगान में लिखी गई हजारों भक्तिपरक कविताओं का सम्बन्ध मीरा",10,560);
    text("के साथ जोड़ा जाता है पर विद्वान ऐसा मानते हैं कि इनमें से कुछ कवितायेँ ही मीरा द्वारा रचित थीं बाकी",10,580);
    text("की कविताओं की रचना 18वीं शताब्दी में हुई प्रतीत होती है। ऐसी ढेरों कवितायेँ जिन्हें मीराबाई द्वारा रचित ",10,600);
    text("माना जाता है, दरअसल उनके प्रसंशकों द्वारा लिखी मालूम पड़ती हैं। ये कवितायेँ ‘भजन’ कहलाती हैं और",10,620);
    text(" उत्तर भारत में बहुत लोकप्रिय हैं।मीराबाई का जीवन आधुनिक युग में कई फिल्मों, साहित्य और कॉमिक्स ",10,640);
    text("का विषय रहा है।",10,660);
    
    meerabai.visible=false;
    meerabai1.visible=true;

    
    
     nextGameState1.visible=true;
     nextGameState.visible=false;
     nextGameState.y=665;

     if(mousePressedOver(nextGameState1)){
        gameState=3
        }
}




if(gameState===3){
    textSize(50);
    strokeWeight(10);
    stroke("deeppink");
    fill("white");
        text("प्रारंभिक जीवन",250,60);
        textSize(20);
    strokeWeight(1);
    stroke("deeppink");
    fill("white");
        text("मीराबाई के जीवन से सम्बंधित कोई भी विश्वसनीय ऐतिहासिक दस्तावेज नहीं हैं। विद्वानों ने साहित्य और",10,400);
        text("दूसरे स्रोतों से मीराबाई के जीवन के बारे में प्रकाश डालने की कोशिश की है। इन दस्तावेजों के अनुसार",10,420);
        text("मीरा का जन्म राजस्थान के मेड़ता में सन 1498 में एक राजपरिवार में हुआ था।",10,440);
        text("",10,460);
        text("उनके पिता रतन सिंह राठोड़ एक छोटे से राजपूत रियासत के शासक थे। वे अपनी माता-पिता की",10,480);
        text("इकलौती संतान थीं और जब वे छोटी बच्ची थीं तभी उनकी माता का निधन हो गया था। उन्हें संगीत, धर्म,",10,500);
        text("राजनीति और प्राशासन जैसे विषयों की शिक्षा दी गयी। मीरा का लालन-पालन उनके दादा के देख-रेख",10,520);
        text("में हुआ जो भगवान् विष्णु के गंभीर उपासक थे और एक योद्धा होने के साथ-साथ भक्त-हृदय भी थे और",10,540);
        text("साधु-संतों का आना-जाना इनके यहाँ लगा ही रहता था। इस प्रकार मीरा बचपन से ही साधु-संतों और",10,560);
        text("धार्मिक लोगों के सम्पर्क में आती रहीं।",10,580);
    
    meerabai1.visible=false;
    birth.visible=true;
nextGameState1.visible=false
nextGameState2.visible=true;
nextGameState2.y=665;
    if(mousePressedOver(nextGameState2)){
        gameState=4;
    }
}

if(gameState===4){
    background(marriage);
    textSize(100);
    strokeWeight(10);
    stroke("deeppink");
    fill("black");
        text("विवाह",250,100);
        textSize(30);
    strokeWeight(1);
    stroke("deeppink");
    fill("black");
        text("मीरा का विवाह राणा सांगा के पुत्र और मेवाड़ के राजकुमार भोज राज ",10,250);
        text("के साथ सन 1516 में संपन्न हुआ। उनके पति भोज राज दिल्ली सल्तनत",10,290);
        text("के शाशकों के साथ एक संघर्ष में सन 1518 में घायल हो गए और इसी ",10,330);
        text("कारण सन 1521 में उनकी मृत्यु हो गयी। उनके पति के मृत्यु के कुछ",10,370);
        text("वर्षों के अन्दर ही उनके पिता और श्वसुर भी मुग़ल साम्राज्य के संस्थापक",10,410);
        text("बाबर के साथ युद्ध में मारे गए। ऐसा कहा जाता है कि उस समय की",10,450);
        text("प्रचलित प्रथा के अनुसार पति की मृत्यु के बाद मीरा को उनके पति के",10,490);
        text("साथ सती करने का प्रयास किया गया किन्तु वे इसके लिए तैयार नही हुईं",10,530);
        text("और धीरे-धीरे वे संसार से विरक्त हो गयीं और साधु-संतों की संगति में",10,570);
        text("कीर्तन करते हुए अपना समय व्यतीत करने लगीं।",10,610);
    meerabai1.visible=false;
    birth.visible=false;
    nextGameState2.visible=false;
    nextGameState3.visible=true
    if(mousePressedOver(nextGameState3)){
        gameState=5;
    }
}

if(gameState===5){
    textSize(100);
    strokeWeight(10);
    stroke("deeppink");
    fill("white");
        text("कृष्ण भक्ति ",250,120);
        textSize(20);
    strokeWeight(1);
    stroke("deeppink");
    fill("white");
        text("पति के मृत्यु के बाद इनकी भक्ति दिनों-दिन बढ़ती गई। मीरा अक्सर मंदिरों में जाकर कृष्णभक्तों के सामने कृष्ण",10,250);
        text("की मूर्ति के सामने नाचती रहती थीं। मीराबाई की कृष्णभक्ति और इस प्रकार से नाचना और गाना उनके",10,290);
        text("पति के परिवार को पति के परिवार को अच्छा नहीं लगा जिसके वजह से कई बार उन्हें विष देकर मारने",10,330);
        text("की कोशिश की गई। ",10,370);
        text("ऐसा माना जाता है कि सन्‌ 1533 के आसपास मीरा को ‘राव बीरमदेव’ ने मेड़ता बुला लिया और मीरा के",10,410);
        text("चित्तौड़ त्याग के अगले साल ही सन्‌ 1534 में गुजरात के बहादुरशाह ने चित्तौड़ पर कब्ज़ा कर लिया। इस",10,450);
        text("युद्ध में चितौड़ के शासक विक्रमादित्य मारे गए तथा सैकड़ों महिलाओं ने जौहर किया। इसके पश्चात सन्‌",10,490);
        text("1538 में जोधपुर के शासक राव मालदेव ने मेड़ता पर अधिकार कर लिया जिसके बाद बीरमदेव ने भागकर",10,530);
        text("अजमेर में शरण ली और मीरा बाई ब्रज की तीर्थ यात्रा पर निकल पड़ीं। सन्‌ 1539 में मीरा बाई वृंदावन में",10,570);
        text(" रूप गोस्वामी से मिलीं। वृंदावन में कुछ साल निवास करने के बाद मीराबाई सन्‌ 1546 के आस-पास",10,610);
        text(" द्वारका चली गईं।",10,650);
    meerabai1.visible=false;
    birth.visible=false;
    nextGameState3.visible=false;
    nextGameState4.visible=true;
    nextGameState4.y=665;
    k.visible=true
    if(mousePressedOver(nextGameState4)){
        gameState=6;
    } 
}
if(gameState===6){
    textSize(100);
    strokeWeight(10);
    stroke("deeppink");
    fill("white");
        text("मृत्यु",250,120);
        textSize(20);
    strokeWeight(1);
    stroke("deeppink");
    fill("white");
        text("ऐसा माना जाता है कि बहुत दिनों तक वृन्दावन में रहने के बाद मीरा द्वारिका चली गईं जहाँ सन 1560 में वे",10,250);
        text("भगवान श्रीकृष्ण की मूर्ति में समा गईं।",10,290);
        d.visible=true;
        k.visible=false
        nextGameState4.visible=false
        nextGameState5.visible=true
        if(mousePressedOver(nextGameState5)){
            gameState=1
        }
}
    drawSprites();
}
















