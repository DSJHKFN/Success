
// Create canvas variable

var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");
//Set initial positions for ball and hole images.
ball_y=0;
ball_x=0;
hole_x=Math.floor(Math.random()*100)*10;
hole_y=Math.floor(Math.random()*40)*10;
hole1_x=Math.floor(Math.random()*100)*10;
hole1_y=Math.floor(Math.random()*40)*10;
fole_x=Math.floor(Math.random()*100)*10;
fole_y=Math.floor(Math.random()*40)*10;
fole1_x=Math.floor(Math.random()*100)*10;
fole1_y=Math.floor(Math.random()*40)*10;
fole2_x=Math.floor(Math.random()*100)*10;
fole2_y=Math.floor(Math.random()*40)*10;
console.log(fole1_x,fole1_y)
var counter = 0;

block_image_width = 10;
block_image_height = 10;
function mount()
{
    x.play();
}
function coad_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("images (3) copy.jpeg", function(Img) {
	    fole_obj = Img;
        console.log("ano");
		fole_obj.scaleToWidth(50);
		fole_obj.scaleToHeight(50);
		fole_obj.set({
			top:fole_y,
		    left:fole_x
			});
			canvas.add(fole_obj);
            console.log("loaded");
		});
        fabric.Image.fromURL("images (3) copy 2.jpeg", function(Img) {
            fole1_obj = Img;
            console.log("ano1");
            fole1_obj.scaleToWidth(50);
            fole1_obj.scaleToHeight(50);
            fole1_obj.set({
                top:fole1_y,
                left:fole1_x
                });
                canvas.add(fole1_obj);
                console.log("loaded");
            });
            fabric.Image.fromURL("download (15).jpeg", function(Img) {
                fole2_obj = Img;
                console.log("ano2");
                fole2_obj.scaleToWidth(50);
                fole2_obj.scaleToHeight(50);
                fole2_obj.set({
                    top:fole2_y,
                    left:fole2_x
                    });
                    canvas.add(fole2_obj);
                    console.log("loaded");
                });
        console.log("yes");
        new_image();    
}

function load_image(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("images (3).jpeg", function(Img) {
	    hole_obj = Img;
        console.log("ano");
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
		    left:hole_x
			});
			canvas.add(hole_obj);
            console.log("loaded");
		});
        fabric.Image.fromURL("images (1).png", function(Img) {
            hole1_obj = Img;
            console.log("ano");
            hole1_obj.scaleToWidth(50);
            hole1_obj.scaleToHeight(50);
            hole1_obj.set({
                top:hole1_y,
                left:hole1_x
                });
                canvas.add(hole1_obj);
                console.log("loaded");
            });
        coad_img();
        console.log("yes");        
}
var score = 0;
function new_image()
{
	fabric.Image.fromURL("download (9).png", function(Img) {
	    ball_obj = Img;
		ball_obj.scaleToWidth(25);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
		    left:ball_x
			});
			canvas.add(ball_obj);
		});
}
var counter = 0;
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if(score>1)
    {
        canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="Move on";
		document.getElementById("myCanvas").style.borderColor="green";
        document.getElementById("aqui").style.visibility="visible";

	}
    else if(score<-1)
    {
		document.getElementById("hd3").innerHTML="Move on";
		document.getElementById("myCanvas").style.borderColor="black";
        document.getElementById("hi").style.visibility="visible";
    }
	else{
        if((ball_x==hole_x)&&(ball_y==hole_y)||(ball_x==hole1_x)&&(ball_y==hole1_y)){
            score++;
            console.log(score);
            counter++;
            document.getElementById("3").innerHTML = "Total number of things you chose are:" + counter;
        }
        if((ball_x==fole_x)&&(ball_y==fole_y)||(ball_x==fole1_x)&&(ball_y==fole1_y)||(ball_x==fole2_x)&&(ball_y==fole2_y)){
            score--;
            console.log(score);
            counter++;
            document.getElementById("3").innerHTML = "Total number of things you chose are:" + counter;
        }
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >=0){
			ball_y=ball_y-block_image_height;
            console.log(ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	function down()
	{
		if(ball_y <=500){
			ball_y=ball_y+block_image_height;
            console.log(ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x > 0)
		{
			ball_x=ball_x-block_image_width;
            console.log(ball_x);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1100)
		{
			ball_x=ball_x+block_image_width;
            console.log(ball_x);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}