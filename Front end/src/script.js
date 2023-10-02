let notification = document.createElement("div");
notification.innerHTML = `
    <div class="transition-opacity relative m-3 max-w-sm w-[290px] h-min bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
    <div class="p-2">
    <div class="flex items-start">
        <div class="flex-shrink-0 pt-[2px] text-gray-600">
    <svg class="overflow-visible" width="20px" height="20px" viewBox="0 0 32 32"><circle opacity="0.6" fill="transparent" stroke="#34C759" stroke-width="4" cx="16" cy="16" r="20"></circle><path fill="none" stroke="#34C759" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" d="M9.8,17.2l3.8,3.6c0.1,0.1,0.3,0.1,0.4,0l9.6-9.7"></path></svg>
        </div>
        <div class="ml-3 w-0 flex-1 pt-0.5">
        <p class="text-sm font-medium text-gray-900">Configuration saved!</p>
        <p class="mt-1 text-sm text-gray-500" id="desc">
            You choosed 
        </p>
        </div>
        <div class="ml-4 flex-shrink-0 flex">
        <button onclick="this.parentElement.parentElement.parentElement.parentElement.remove()" class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <span class="sr-only">Close</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
        </button>
        </div>
    </div>
    </div>
`


let values = {"hub": "Hub", "simple_switch": "Simple Switch", "management_switch": "Management Switch"};

let notficationContainer = document.querySelector("#notificationContainer")
let radios = document.querySelector("form").elements["job"];
for(radio in radios) {
    radios[radio].onclick = function() {
        while(notficationContainer.children.length > 2){
            notficationContainer.removeChild(notficationContainer.firstChild);
        }
        notification.querySelector("#desc").innerHTML = `You choosed ${values[this.value]}`
        notficationContainer.innerHTML += notification.innerHTML
    }
}