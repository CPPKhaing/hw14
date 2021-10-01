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
      tags.append(tag.element);
      tags.append(tag.style)

      for(const firstchild of tag.child){
        tags.append(firstchild[0].element)
        tags.append(firstchild[0].style)
          for(const secchild of firstchild[0].child){
            tags.append(secchild.element)
            tags.append(secchild.style)
            tags.append(secchild.src)
          }
        tags.append(firstchild[1].element)
        tags.append(firstchild[1].style)
        for(const first1_secchild of firstchild[1].child){
          for(const fchild of first1_secchild[0]){
            tags.append(fchild.element)
            tags.append(fchild.style)
            tags.append(fchild.text)
            tags.append(fchild.child)
          }
          for(const schild of  first1_secchild[1]){
            tags.append(schild.element)
            tags.append(schild.style)
            tags.append(schild.text)
            tags.append(schild.child)

          }
          for(const thirdchild of first1_secchild[2]){
            tags.append(thirdchild.element)
            tags.append(thirdchild.style)
            tags.append(thirdchild.text)
            tags.append(thirdchild.child)

          }

        }
      }
    if (tag.child != underfined)
      if(tag.child.length != 0)
        childCreate((tag.child))
  }
 

} 