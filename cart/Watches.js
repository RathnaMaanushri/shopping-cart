var mongoose=require('mongoose');
var Schema=mongoose.Schema;
mongoose.connect('mongodb://localhost/rst');
var userSchema = new Schema({
 Watchname:{type:String},price:{type:Number}
 });
 var m=mongoose.model('Watches',userSchema,'Watches');
 module.exports=m;
 
 
 