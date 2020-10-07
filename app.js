let gameBoard= document.querySelector('.game');
document.addEventListener('keyup', control)
let scoreValue=document.getElementById("gameScore");
document.getElementById("newgame").addEventListener("click",newGame);
let score=0; 
let game =[
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
] 

function newGame()
{
    location.reload(); 
    
}

function generate()
{
    for(let i=0;i<4;i++)
    {
        for(let j=0;j<4;j++)
        {
            let element =document.createElement('div');
            (game[i][j]==0)?element.innerHTML="":element.innerHTML= game[i][j];
            
            element.id=String(i)+String(j);
            gameBoard.appendChild(element);  
        }
    }
}

function update()
{
    let id;
    let element;
    for(let i=0;i<4;i++)
    {
        for(let j=0;j<4;j++)
        {   
           id = String(i)+String(j);
           element = document.getElementById(id);
           (game[i][j]==0)?element.innerHTML="":element.innerHTML= game[i][j]; 
        }
    }
    

}

function showScore()
{
    scoreValue.innerHTML = score;
}

function randomElement()
{
    return Math.floor(Math.random(4)*4);
}

function addNewElement()
{
    let x =randomElement();
    let y =randomElement();

    (game[x][y]==0)? game[x][y]=2: addNewElement();   
}



function swipe(direction)
{

    for(let i=0;i<4;i++)
            {
               do {
                    mark=false;

                    if(direction=="right" || direction=="down")
                    {
                        for(let j=0;j<game.length-1;j++) 
                        {
                            if(j<game.length-1)// if array is not ouf bound 
                            {
                                switch(direction)
                                {
                                    case "right":
                                        if(game[i][j]>0 && game[i][j+1]==0)
                                        {
                                            let tmp=game[i][j];
                                            game[i][j]=game[i][j+1];
                                            game[i][j+1]=tmp; 
                                            mark=true;
                                        }  
                                        break;
                                    case "down":
                                        if(game[j][i]>0 && game[j+1][i]==0)
                                        {
                                            let tmp=game[j][i];
                                            game[j][i]=game[j+1][i];
                                            game[j+1][i]=tmp; 
                                            mark=true;
                                        } 
                                        break;
                                }
                               
                            }
                        } 
                    }

                    if(direction=="left" || direction=="up")
                    {
                        for(let j=game.length-1;j>=0;j--)
                        {
                            if(j>0)// if array is not ouf bound 
                                {
                                    switch(direction)
                                    {
                                        case "left":
                                            if(game[i][j]>0 && game[i][j-1]==0)
                                            {
                                                let tmp=game[i][j];
                                                game[i][j]=game[i][j-1];
                                                game[i][j-1]=tmp; 
                                                mark=true;
                                            }           
                                            break;
                                        case "up":
                                            if(game[j][i]>0 && game[j-1][i]==0)
                                            {
                                                let tmp=game[j][i];
                                                game[j][i]=game[j-1][i];
                                                game[j-1][i]=tmp; 
                                                mark=true;
                                            }        
                                            break;
                                    }
                                             
                                }
                        }
                    }
    
               }while(mark==true)
    }

}

function sumElemnets(direction)
{
    for(let i=0;i<4;i++) 
    {
        if(direction=="left" || direction=="up")
        {
            for(let j=0;j<game.length-1;j++) 
            {
                if(j<game.length-1)// if array is not ouf bound 
                {
                    switch(direction)
                    {
                        case "left":
                            if(game[i][j] == game[i][j+1])
                            {
                                
                                game[i][j]=game[i][j]+game[i][j+1];
                                game[i][j+1]=0; 
                                score+=game[i][j];
                                
                            }  
                            break;
                        case "up":
                            if(game[j][i] == game[j+1][i])
                            {
                                
                                game[j][i]=game[j][i]+game[j+1][i];
                                game[j+1][i]=0; 
                                score+=game[j][i];
                                
                            }  
                            break;
                    }
                    
                } 

            }
        }

        
        if(direction=="right" || direction=="down")
                    {
                        for(let j=game.length-1;j>=0;j--)
                        {
                            if(j>0)// if array is not ouf bound 
                                {
                                    switch(direction)
                                    {
                                        case "right":
                                            if(game[i][j] == game[i][j-1])
                                            {
                                                game[i][j]=game[i][j] + game[i][j-1];
                                                game[i][j-1]=0;
                                                score+=game[i][j];
                                                
                                            }           
                                            break;
                                        case "down":
                                            if(game[j][i] == game[j-1][i])
                                            {
                                                game[j][i]=game[j][i] + game[j-1][i];
                                                game[j-1][i]=0;
                                                score+=game[j][i];
                                                
                                            }        
                                            break;
                                    }
                                             
                                }
                        }
                    }

        
    }
}

function checkRestult()
{
    let moves=0;
    for(let i=0;i<game.length;i++) 
    {
        for(let j=0;j<game.length;j++) 
        {
           
            if(game[i][j]==0)
            {
                moves++;
                
            }
        }
        
    }
    if(moves==0)
    {
        for(let i=0;i<game.length;i++) 
        {
            for(let j=0;j<game.length;j++) 
            {
               
                //to be continued 
                if(i==0 && j==0)
                {
                    (game[i][j]==game[i][j+1])? moves++:moves=moves;
                    (game[i][j]==game[i+1][j])? moves++:moves=moves;
                }
                if(i==0 && j==3)
                {
                    (game[i][j]==game[i][j-1])? moves++:moves=moves;
                    (game[i][j]==game[i+1][j])? moves++:moves=moves;
                }
                if(i==3 && j==0)
                {
                    (game[i][j]==game[i][j+1])? moves++:moves=moves;
                    (game[i][j]==game[i-1][j])? moves++:moves=moves;
                }
                if(i==3 && j==3)
                {
                    (game[i][j]==game[i][j-1])? moves++:moves=moves;
                    (game[i][j]==game[i-1][j])? moves++:moves=moves;
                }
                if(i==1 && j==1 || i==1 && j==2 || i==2 && j==2 || i==2 && j==3)
                {
                    (game[i][j]==game[i+1][j])? moves++:moves=moves;
                    (game[i][j]==game[i-1][j])? moves++:moves=moves;
                    (game[i][j]==game[i][j+1])? moves++:moves=moves;
                    (game[i][j]==game[i][j-1])? moves++:moves=moves;

                } 
                if(i==1 && j==0 || i==2 && j==0)
                {
                    (game[i][j]==game[i+1][j])? moves++:moves=moves;
                    (game[i][j]==game[i-1][j])? moves++:moves=moves;
                    (game[i][j]==game[i][j+1])? moves++:moves=moves;
                }

                if(i==1 && j==3 || i==2 && j==3)
                {
                    (game[i][j]==game[i+1][j])? moves++:moves=moves;
                    (game[i][j]==game[i-1][j])? moves++:moves=moves;
                    (game[i][j]==game[i][j-1])? moves++:moves=moves;
                }

                if(i==0 && j==1 || i==0 && j==2)
                {
                    (game[i][j]==game[i][j+1])? moves++:moves=moves;
                    (game[i][j]==game[i][j]-1)? moves++:moves=moves;
                    (game[i][j]==game[i+1][j])? moves++:moves=moves;
                }

                if(i==3 && j==1 || i==3 && j==2)
                {
                    (game[i][j]==game[i][j+1])? moves++:moves=moves;
                    (game[i][j]==game[i][j]-1)? moves++:moves=moves;
                    (game[i][j]==game[i-1][j])? moves++:moves=moves;
                }

            }
            
        }
    }
   
    
    if(moves==0)
    {
        alert("Game over");
    }

}
function control(e) {
    if(e.keyCode === 37) {
        swipe("left");
        sumElemnets("left");
        swipe("left");
        update();
        showScore();
        addNewElement();
        update();
        checkRestult();
    } 
    if (e.keyCode === 38) {
        swipe("up");
        sumElemnets("up");
        swipe("up");
        update();
        showScore();
        addNewElement();
        update();
        checkRestult();
    } 
    if (e.keyCode === 39) {
        swipe("right");
        sumElemnets("right");
        swipe("right");
        update();
        showScore();
        addNewElement();
        update();
        checkRestult();
    } 
    if (e.keyCode === 40) {
        swipe("down");
        sumElemnets("down");
        swipe("down");
        update();
        showScore();
        addNewElement();
        update();
        checkRestult();
    }
  }

function init()
{
    addNewElement();
    addNewElement();
    generate();
}

init();

