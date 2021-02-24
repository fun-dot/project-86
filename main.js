var canvas = new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var AVENGER_ob ="";
var block_image_ob="";
function player_update()
{
fabric.Image.fromURL("PLAYER.jpg",function(Img){
AVENGER_ob=Img;
AVENGER_ob.scaleToWidth(150);
AVENGER_ob.scaleToHeight(140);
AVENGER_ob.set({
top:AVENGER_y,
left:AVENGER_x
});
canvas.add(AVENGER_ob);
});
}
function new_image(get_image)
{
fabric.Image.fromURL(get_image,function(Img){
block_image_ob=Img;
block_image_ob.scaleToWidth(block_image_width);
block_image_ob.scaleToHeight(block_image_height);
block_image_ob.set({
top:AVENGER_y,
left:AVENGER_x
});
canvas.add(block_image_ob);
});
}  