// shadril238

let myLeads=[];
const inputEl=document.getElementById("input-el"); 
const inputBtn=document.getElementById("input-btn");
const ulEl=document.getElementById("ul-el");
const deleteBtn=document.getElementById("delete-btn");
const tabBtn=document.getElementById("tab-btn");

//get items from localstorage
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"));
// localStorage.clear();

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage;
    render(myLeads);
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
        //  let activeTab= tabs[0];
        //  let activeTabId=activeTab.id;
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });
});

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads=[];
    render(myLeads);
});

inputBtn.addEventListener("click",function(){

    myLeads.push(inputEl.value);
    inputEl.value="";
    //set items to localstorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);

    // console.log(localStorage.getItem("myLeads"));

});

function render(leads){
    let listItems="";
    for (let i=0; i<leads.length; i++){
        // listItems+="<li><a target='_blank' href='"+myLeads[i]+"'>"+ myLeads[i]+"</a></li>";
        //template string
        listItems+=`
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
            `;
    }
    ulEl.innerHTML=listItems;
    // alternative of innerHTML
    // const li=document.createElement("li");
    // li.textContent=myLeads[i];
    // ulEl.append(li);
}

