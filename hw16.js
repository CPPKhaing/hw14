let html="";
    fetch("http://localhost:3001/api/htmlpage")
     .then(res => res.json())
     .then(data =>{ 
        let body = data.body;

        if(body.style != underfined){ 
          $("body").attr("style", body.style);
        }
        if(body.child.length != 0){
          childCreate(body.child);
        $("body").append(html)
      }
      } )
  
      .catch(error =>console.log(error))

let childCreate = (tags) => { 

  for (const tag of tags) {
      html += '"<${tag.element}" + "style=" + "${tag.style}" + ">" + "${tag.child}" +  "</${tag.element}>"' ;
      

      for(const firstchild of tag.child){

        $('${tag.child}').append("<${firstchild[0].element}" + "style=" + "${firstchild[0].style}" + ">" + 
                                "${firstchild[0].child}" + "</${firstchild[0].element}>")
        
          for(const secchild of firstchild[0].child){
            $('${firstchild[0].child}').append("<${secchild.element}" + "style=" + "${secchild.style}" +  
                                            "src=" + "${secchild.src}" + ">" + "</${secchild.element}>")
            
          }
        $('${tag.child}').append("<${firstchild[1].element}" + "style=" + "${firstchild[1].style}" + ">" + 
                              "${firstchild[1].child}" + "</${firstchild[1].element}>")


        for(const first1_secchild of firstchild[1].child){

          for(const fchild of first1_secchild[0]){
           $('${firstchild[1].child}').append("<${fchild.element}" + "style=" + "${fchild.style}" + ">" + "${fchild.text}" +
                                     "${fchild.child}" + "</${fchild.element}>" )
            
          }
          for(const schild of  first1_secchild[1]){

          $('${firstchild[1].child}').append("<${schild.element}" + "style=" + "${schild.style}" + ">" + "${schild.text}" +
                                      "${schild.child}" + "</${schild.element}>" )


          }
          for(const thirdchild of first1_secchild[2]){
     
            $('${firstchild[1].child}').append("<${thirdchild.element}" + "style=" + "${thirdchild.style}" + ">" + "${thirdchild.text}" +
                                        "${thirdchild.child}" + "</${thirdchild..element}>" )

          }

        }
      }
    if (tag.child != undefined)
      if(tag.child.length != 0)
        childCreate((tag.child))
  }
 

} 