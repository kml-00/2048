let gameBoard= document.querySelector('.game');
document.addEventListener('keyup', control)
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
// split swiping a blocks and adding blocks !!!!! IMPORTANT
function moveRight()
{
    
    move("right");
    
    addNewElement();
}

function moveDown()
{
    move("down");
    addNewElement();
}

function moveLeft()
{
   move("left");
    
    addNewElement();
}

function moveUp()
{
    move("up");
    addNewElement();
}

function move(direction)
{
    let col0=[];
    let col1=[];
    let col2=[];
    let col3=[];
    let columns=[];
    let arraySize=4;
    switch(direction)
    {
        case "right":
            for(let i=0;i<4;i++)
            {
                let tmp=game[i].filter(item=>item>0);
                let zeroArr = Array(arraySize-tmp.length).fill(0);
                game[i] = zeroArr.concat(tmp);
                console.log(game[i]);  
                   
            }
            
            break;
        case "left":
            for(let i=0;i<4;i++)
            {
                let tmp=game[i].filter(item=>item>0);
                let zeroArr = Array(arraySize-tmp.length).fill(0);
                game[i] = tmp.concat(zeroArr);
                console.log(game[i]);  
                   
            }
            break;

        case "down":
            
            for(let i=0;i<4;i++)
            {
                col0.push(game[i][0]);
                col1.push(game[i][1]);
                col2.push(game[i][2]);
                col3.push(game[i][3]);
            }
            columns=[col0,col1,col2,col3];
            for(let i=0;i<4;i++)
            {
                let tmp=columns[i].filter(item=>item>0);
                let zeroArr = Array(arraySize-tmp.length).fill(0);
                columns[i] = tmp.concat(zeroArr);
                console.log(columns[i]);  
                   
            }
            break;
        case "up":
            
                for(let i=3;i>=0;i--)
                {
                    console.log(game[i][0]);
                    col0.push(game[i][0]);
                    col1.push(game[i][1]);
                    col2.push(game[i][2]);
                    col3.push(game[i][3]);
                }
                columns=[col0,col1,col2,col3];
                
                for(let i=0;i<4;i++)
                {
                    let tmp=columns[i].filter(item=>item>0);
                    let zeroArr = Array(arraySize-tmp.length).fill(0);
                    columns[i] = zeroArr.concat(tmp);
                    console.log(columns[i]);  
                       
                }
                break;
        
    }
    
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

function init()
{
    addNewElement();
    addNewElement();
    generate();
}

init();
