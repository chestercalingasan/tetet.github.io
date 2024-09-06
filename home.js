menu = document.getElementById('menu');
closeHiddenMenu = document.getElementById('closeHiddenMenu');
hiddenMenu = document.getElementById('hiddenMenu');
navInnerLeftImageBackground = document.getElementById('navInnerLeftImageBackground');
firstRowRightFirstPic = document.getElementById('firstRowRightFirstPic');

xboxContainer = document.getElementById('xboxContainer');
xbox = document.getElementById('xbox');

basketball = document.getElementById('basketball');
basketballContainer = document.getElementById('basketballContainer');

vscode = document.getElementById('vscode');
vscodeContainer= document.getElementById('vscodeContainer');

xboxSection = document.getElementById('xboxSection');
basketballSection = document.getElementById('basketballSection');
vscodeSection = document.getElementById('vscodeSection');

firstRow = document.getElementById('firstRow');
secondRow = document.getElementById('secondRow');

thirdRowInnerTop = document.getElementById('thirdRowInnerTop');
cathay = document.getElementById('cathay');
chase = document.getElementById('chase');
wyndham = document.getElementById('wyndham');
target = document.getElementById('target');
thirdRow = document.getElementById('thirdRow');
facebook = document.getElementById('facebook');
instagram = document.getElementById('instagram');
linkedin = document.getElementById('linkedin');
h1ContentExperience = document.getElementById('h1ContentExperience');
pContentExperience = document.getElementById('pContentExperience');

next = document.getElementById('next');
previous = document.getElementById('previous');
contact = document.getElementById('contact');
skills = document.getElementById('skills');

menu.onclick= function(){
    if( hiddenMenu.style.right !== '0%'){
        hiddenMenu.style.right = '0%'
        hiddenMenu.style.transition = '.5s';
        hiddenMenu.style.backgroundColor = '#17bace';
        menu.style.width = '0';
        menu.style.transition = '.3s';
        closeHiddenMenu.style.width = '37px';
        closeHiddenMenu.style.transition = '.3s';
    }
}

closeHiddenMenu.onclick= function(){
    if( hiddenMenu.style.right == '0%'){
        hiddenMenu.style.right = '-100%'
        hiddenMenu.style.transition = '.5s';
        hiddenMenu.style.backgroundColor = 'transparent';
        menu.style.width = '37px';
        menu.style.transition = '.3s';
        closeHiddenMenu.style.width = '0';
        closeHiddenMenu.style.transition = '.3s';
    }
}

window.onresize = function (){
    if((window.innerWidth) <= 1023 ){
        menu.style.width = '37px';
        secondRow.style.top = '0px';
        secondRow.style.opacity = '100%';

  
        
    }
    else{
      

    }
}

window.onload = function (){
    menu.style.width = '0px';
    closeHiddenMenu.style.width = '0px';
}

navInnerLeftImageBackground.onmouseover = function (){
    navInnerLeftImageBackground.style.rotate = '360deg';
    navInnerLeftImageBackground.style.transition = '.5s';
}

navInnerLeftImageBackground.onmouseout = function (){
    navInnerLeftImageBackground.style.rotate = '-360deg';
    navInnerLeftImageBackground.style.transition = '.5s';
}


xboxContainer.onmouseover = function (){
    xbox.style.top = '20px';
    xbox.style.transition = '.5s';
    xbox.style.width = '50px';
    xbox.style.height = '50px';
    xboxSection.style.transition = '.5s';
    xboxSection.style.opacity = '100%';
    xboxSection.style.height = 'calc(70% + 30%)';
}
xboxContainer.onmouseout = function (){
    xbox.style.top = '100px';
    xbox.style.transition = '.5s';
    xbox.style.width = '100px';
    xbox.style.height = '100px';
    xboxSection.style.transition = '.2s';
    xboxSection.style.opacity = '0%';
    xboxSection.style.height = 'calc(100% - 30%)';
}

basketballContainer.onmouseover = function (){
    basketball.style.top = '20px';
    basketball.style.width = '50px';
    basketball.style.height = '50px';
    basketball.style.transition = '.5s';
    basketballSection.style.transition = '.5s';
    basketballSection.style.opacity = '100%';
    basketballSection.style.height = 'calc(70% + 30%)';
}
basketballContainer.onmouseout = function (){
    basketball.style.top = '100px';
    basketball.style.width = '100px';
    basketball.style.height = '100px';
    basketball.style.transition = '.5s';
    basketballSection.style.transition = '.2s';
    basketballSection.style.opacity = '0%';
    basketballSection.style.height = 'calc(100% - 30%)';
}

vscodeContainer.onmouseover = function (){
    vscode.style.top = '20px';
    vscode.style.width = '50px';
    vscode.style.height = '50px';
    vscode.style.transition = '.5s';
    vscodeSection.style.transition = '.5s';
    vscodeSection.style.opacity = '100%';
    vscodeSection.style.height = 'calc(70% + 30%)';
}
vscodeContainer.onmouseout = function (){
    vscode.style.top = '100px';
    vscode.style.width = '100px';
    vscode.style.height = '100px';
    vscode.style.transition = '.5s';
    vscodeSection.style.transition = '.5s';
    vscodeSection.style.opacity = '0%';
    vscodeSection.style.height = 'calc(100% - 30%)';
}

firstRow.onmouseout = function (){
    secondRow.style.top = '0px';
    secondRow.style.opacity = '100%';
    secondRow.style.transition = '1.5s';
}

secondRow.onmouseout = function (){
    h1ContentExperience.style.top = '0px';
    h1ContentExperience.style.opacity = '100%';
    h1ContentExperience.style.transition = '1s';
    pContentExperience.style.top = '0px';
    pContentExperience.style.opacity = '100%';
    pContentExperience.style.transition = '2s';
}




next.onclick = function (){
    cathay.style.left = '-1000px';
    cathay.style.opacity = '0%';
    cathay.style.transition = '1s';
    
    chase.style.left = '-1000px';
    chase.style.opacity = '0%';
    chase.style.transition = '1.3s';
    


   if(cathay.style.left!=='1px'){
    cathay.style.left = '-1000px';
    cathay.style.transition = '1s';
    cathay.style.opacity = '0%';
    chase.style.left = '-1000px';
    chase.style.transition = '1.3s';
    chase.style.opacity = '0%';

    wyndham.style.left = '-950px';
    wyndham.style.transition = '1s';
    wyndham.style.opacity = '100%';
    target.style.left = '-950px';
    target.style.transition = '1.3s';
    target.style.opacity = '100%';
   }
}

previous.onclick = function (){
   
    if(cathay.style.left=='-1000px'){
        cathay.style.left = '0px';
        cathay.style.transition = '1s';
        cathay.style.opacity = '100%';
        chase.style.left = '0px';
        chase.style.transition = '1.3s';
        chase.style.opacity = '100%';

        wyndham.style.left = '0px';
        wyndham.style.transition = '1s';
        wyndham.style.opacity = '0%';
        target.style.left = '0px';
        target.style.transition = '1.3s';
        target.style.opacity = '0%';
    
       }
}

home.onclick = function(){
    document.body.scrollTop = 0;
    document.body.transition = '1s';
    document.documentElement.scrollTop = 0;
    document.documentElement.transition = '1s';
}
contact.onclick = function(){
    document.body.scrollBottom = 0;
    document.body.transition = '1s';
    document.documentElement.scrollBottom = 0;
    document.documentElement.transition = '1s';
}

facebook.onclick = function(){
    window.location.href = 'http://www.facebook.com/chester.calingasan.7';
}
instagram.onclick = function(){
    window.location.href = 'https://www.instagram.com/flavoredshotss';
}
linkedin.onclick = function(){
    window.location.href = 'https://www.linkedin.com/in/chestercalingasan';
}