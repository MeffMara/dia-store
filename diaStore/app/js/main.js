// var checkboxDiv = document.getElementsByClassName('checkbox');
// for (var key in checkboxDiv){
//     console.log('Ключ: '+ key +' значение'+checkboxDiv[key]);
// }
// Чекбоксы
// function chekced() {
//     var y='Checked';
//     var n='No checked';
//     var text = document.getElementsByTagName('input');
//         for(var i = 0;i<text.length;i++){
//         // console.log(text[i].nextSibling.nodeValue);
//     }
//     // console.log(text);
//     var allCheck = document.getElementsByTagName('input');
//     // console.log(allCheck);
//     for(var i = 0;i < allCheck.length;i++){
//     if(allCheck[i].checked == true){
//         var right = text[i].nextSibling.nodeValue;
//         console.log(y +" "+ right);
//     }else{
//         var noRight= text[i].nextSibling.nodeValue;
//         console.log(n +" "+ noRight);
//     }
    
//     }
// }
// Чекбоксы



p = document.querySelectorAll('p#invisionText');
for(var i = 0;i<p.length;i++){
    p.className = check+i;
    console.log(p.className);
}
// console.dir(p);
input = document.querySelectorAll('input#check');

function chekced(){ 
for(var i = 0;i<input.length;i++){
    if(input[i].checked == true){
    p[i].style='visibility:visible';}else{
    p[i].style='visibility:hidden'}
}}   





        // var q = document.getElementsByClassName('quote');
        // function quoteChange() {   
            
        //     var quote = document.getElementsByTagName('q')[0].innerHTML;
        //     var newQuote = q[0].cloneNode(true);
        //     // "My new quotes Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est voluptatum dolorum sequi sint perferendis, modi, numquam itaque accusamus cum repellendus. Explicabo alias tenetur facilis ex. Repellat aliquam aut cumque.";
        //     console.log(quote);
        //     // console.log(q);
        //     console.dir(newQuote);
        //     newQuote.innerHTML = "My new quotes Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est voluptatum dolorum sequi sint perferendis, modi, numquam itaque accusamus cum repellendus. Explicabo alias tenetur facilis ex. Repellat aliquam aut cumque.";
        //     console.dir(newQuote.innerHTML);
              
        // }
        // console.log(q[0].outerText);
        // console.log(newQuote);
        // newQuote.querySelector('q').innerHTML == "My new quotes Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est voluptatum dolorum sequi sint perferendis, modi, numquam itaque accusamus cum repellendus. Explicabo alias tenetur facilis ex. Repellat aliquam aut cumque.";
        // quote.parentNode.insertBefore(newQuote,q.nextSibling);  
        var quotes = {
                1:" You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.― William W. Purkey ",
                2:" Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.― Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches",
            };
       var divQuots = document.getElementById('quots');
        var queteTag = document.getElementsByTagName('q');
        quote1 = document.createTextNode(quotes[1]);
        quote2 = document.createTextNode(quotes[2]);
        quote1_1 = divQuots.appendChild(quote2);        
        console.log(queteTag);
        console.log(divQuots); 
        function quoteChange(){
            for (var i = queteTag.length - 1; i >= 0; i--) {
                queteTag[i]
            }
            //    divQuots.replaceChild(quote2,quote1);
            }
            


                    
                    // divQuots.replaceChild(quote1,quote2);
                // divQuots.appendChild(quote2);
                // divQuots.replaceChild(quote1,quote2);
            
              