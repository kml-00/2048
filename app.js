let gameBoard= document.querySelector('.game');
let game =[
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
] 

function generate()
{
    for(let i=0;i<4;i++)
    {
        for(let j=0;j<4;j++)
        {
           
            let element =document.createElement('div')
            element.innerHTML= game[i][j];
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
           element.innerHTML=game[i][j];

            
        }
    }
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

function moveRight()
{
    for(let i=0;i<4;i++)
    {
        for(let j=0;j<4;j++)
        {
            
                if(game[i][j]>0 && game[i][j+1]==0)
                {
                    game[i][j+1]= game[i][j];
                    game[i][j]= 0;
                }
                if(game[i][j]==game[i][j+1])
                {
                    game[i][j+1]=game[i][j]+game[i][j+1];
                    game[i][j]= 0;
                }
                if(game[i][j]>0 && game[i][j+1]>0)
                {
                    console.log("block 3")
                    if(game[i][j]!=game[i][j+1] && j<2 && game[i][j+2]==0)
                    {
                        game[i][j+2]=game[i][j+1];
                        game[i][j+1]=game[i][j];
                        game[i][j]=0;
                    }
                }

                if(game[i][j]>0 && game[i][j+1]>0 && game[i][j+2]>0)
                {
                    console.log("block 4")
                    if(j<1 && game[i][j+3]==0)
                    {
                        game[i][j+3]=game[i][j+2];
                        game[i][j+2]=game[i][j+1];
                        game[i][j+1]=game[i][j];
                        game[i][j];
                    }
                }
        }
    }
    addNewElement();
}

function moveDown()
{
    for(let i=0;i<4;i++)
    {
        for(let j=0;j<4;j++)
        {
            console.log(j);
            if(game[j][i]==game[j+1][i])
                {
                    game[j+1][i]=game[j][i]+game[j+1][i];
                    game[j][i]= 0;
                }
                if(game[j][i]>0 && game[j+1][i]==0)
                {
                    game[j+1][i]= game[j][i];
                    game[j][i]= 0;
                }
                
               

                if(game[j][i]>0 && game[j+1][i]>0)
                {
                    if(game[j][i]!=game[j+1][i] && j<2 && game[j+2][i]==0)
                    {
                        game[j+2][i]=game[j+1][i];
                        game[j+1][i]=game[j][i];
                        game[j][i]=0;
                    }
                }

                if(j==0 &&game[j][i]>0 && game[j+1][i]>0 && game[j+2][i]>0)
                {
                    if(game[j+3][i]==0)
                    {
                        game[j+3][i]=game[j+2][i];
                        game[j+2][i]=game[j+1][i];
                        game[j+1][i]=game[j][i];
                        game[j][i];
                    }
                }
                
        }
    }
    addNewElement();
}

function moveLeft()
{
   
    for(let i=0;i<4;i++)
    {
       
        for(let j =4;j>0;j--)
        {
                if(game[i][j]==game[i][j-1])
                {
                    game[i][j-1]=game[i][j]+game[i][j-1];
                    game[i][j]= 0;
                }
                if(game[i][j]>0 && game[i][j-1]==0)
                {
                    game[i][j-1]= game[i][j];
                    game[i][j]= 0;
                }
                if(game[i][j]>0 && game[i][j-1]>0)
                {
                    if(j>1 && game[i][j-2]==0)
                    {
                        game[i][j-2]=game[i][j-1];
                        game[i][j-1]=game[i][j];
                        game[i][j]=0;
                    }
                }

                if(game[i][j]>0 && game[i][j-1]>0 && game[i][j-2]>0)
                {
                    if(j==3 && game[i][j-3]==0)
                    {
                        game[i][j-3]=game[i][j-2];
                        game[i][j-2]=game[i][j-1];
                        game[i][j-1]=game[i][j];
                        game[i][j];
                    }
                }
                
        }
            
            
    }
    addNewElement();
}

function moveUp()
{
    for(let i=0;i<4;i++)
    {
        for(let j=4;j>0;j--)
        {
            
                if(game[j][i]==game[j-1][i])
                {
                    game[j-1][i]=game[j][i]+game[j-1][i];
                    game[j][i]= 0;
                }
                if(game[j][i]>0 && game[j-1][i]==0)
                {
                    game[j-1][i]= game[j][i];
                    game[j][i]= 0;
                }

                if(game[j][i]>0 && game[j-1][i]>0)
                {
                    if(game[j][i]!=game[j-1][i] && j>2 && game[j-2][i]==0)
                    {
                        game[j-2][i]=game[j-1][i];
                        game[j-1][i]=game[j][i];
                        game[j][i]=0;
                    }
                }

                if(j==0 &&game[j][i]>0 && game[j-1][i]>0 && game[j-2][i]>0)
                {
                    if(game[j-3][i]==0)
                    {
                        game[j-3][i]=game[j-2][i];
                        game[j-2][i]=game[j+1][i];
                        game[j-1][i]=game[j][i];
                        game[j][i];
                    }
                }
                
        }
    }
    addNewElement();
}

function control(e) {
    if(e.keyCode === 37) {
      keyLeft()
    } else if (e.keyCode === 38) {
      keyUp()
    } else if (e.keyCode === 39) {
      keyRight()
    } else if (e.keyCode === 40) {
      keyDown()
    }
  }
  document.addEventListener('keyup', control)
  function keyRight() {
    moveRight()
    update()
    
    
  }

  function keyLeft() {
    moveLeft();
    update();
    
  }

  function keyUp() {
    moveUp()
    update();
  }

  function keyDown() {
    moveDown()
    update();
  }


addNewElement();
addNewElement();
generate();