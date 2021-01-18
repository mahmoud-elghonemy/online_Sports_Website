var r1 = document.getElementById('r1'),
    r2 = document.getElementById('r2'),
   
    x=document.getElementById('sec'),
  
    result=document.getElementById('result'),
  b=document.getElementsByName("Ticket type");

x.onclick=function(){
    
    if(b[0].checked==true){
        r1.onclick = function() {
            if(x.value=="First degree"){
  
     result.value=300+"$";   
   
}
     if(x.value=="second degree"  ){
    
     result.value=200+"$";   
   
}
     if(x.value=="third degree"){
          result.value=100+"$";   

}
      
}

    
       
    
    

       
        
if(x.value=="First degree"){
  
     result.value=300+"$";   
   
}
     if(x.value=="second degree"  ){
    
     result.value=200+"$";   
   
}
     if(x.value=="third degree"){
          result.value=100+"$";   

}
      
}else if(b[1].checked==true){
    r2.onclick = function() {
     if(x.value=="First degree"){
  
     result.value=3000+"$";   
   
}
     if(x.value=="second degree"  ){
    
     result.value=2000+"$";   
   
}
     if(x.value=="third degree"){
          result.value=1000+"$";   

}
      
}

    if(x.value=="First degree"){
  
     result.value=3000+"$";   
    
    
       
    
    
}
     if(x.value=="second degree"  ){
    
    
     result.value=2000+"$";   
   
    
}
     if(x.value=="third degree"){
          result.value=1000+"$";   

}
}




}