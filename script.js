console.log("helló")

document.getElementById('urlap').onsubmit=function(e){
    e.preventDefault()
    // console.log(e.target.elements)

    // Array.from(e.target.elements).forEach(element => {
    //     console.log(element.name,": ",element.value)        
    // });

    // console.log("ForOf")

    // for (const element of e.target.elements) {
    //     console.log(element.name,": ",element.value)        
    // }

    // console.log("ForIn")
    // for (const key in e.target.elements) {
    //     console.log(key) 
    // }
    // console.log(e.target.elements.nev.value)
    let elemek= e.target.elements
   
    console.log(elemek.feltet)

    feltetTomb=[]
    elemek.feltet.forEach(element => {
        if (element.checked) feltetTomb.push(
            document.querySelector(`label[for="${element.id}"]`).innerHTML
            )
    });

    meret=Array.from(elemek.meret).find(
        (e)=> {return e.checked}
    )
    
    // let pizzaFajta=elemek.pizzak.children[elemek.pizzak.value-1].innerHTML
    let pizzaFajta=elemek.pizzak.children[elemek.pizzak.selectedIndex].innerHTML
    // console.log("pizza:", pizzaFajta )
    
    let szoveg = `<h2>Kedves ${elemek.nev.value}!</h2><p>
    Rendeltél ${elemek.db.value} db ${meret.value} cm-es ${pizzaFajta} pizzát!
    ${feltetTomb.length>0?'Plusz feltét: '+feltetTomb.join(', '):""}
    . A kiszállításra ${elemek.datum.value.replace('T',' ').replaceAll('-','.')} fog sor kerülni!
    </p>
    <p>Üdv, SuperPizza!</p>`
    document.getElementById('urlap').style.display='none'
    document.getElementById("message").innerHTML=szoveg
    console.log(meret.value)

    console.log(feltetTomb.length>0?feltetTomb.join(', '):"Nem kértél plusz feltétet!")

}