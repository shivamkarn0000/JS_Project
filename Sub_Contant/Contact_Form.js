// Contact_Form
const Submit = document.getElementById("Submit");
const Name = document.getElementById("name");
const Phone = document.getElementById("Phone");
const Address = document.getElementById("Address");
const Display_Result = document.getElementById("Display_Result");
const Touch_Array = JSON.parse(localStorage.getItem("Form_Data")) || [];

Submit.addEventListener("click", (e) => {
    e.preventDefault();
    const Name_value = Name.value;
    const Phone_value = Phone.value;
    const Address_value = Address.value;
    if (Name_value == "") {
        Name.style.border = "1px solid red";
        Name.setAttribute("placeholder", "Required Name!");
    }
    if (Phone_value == "") {
        Phone.style.border = "1px solid red";
        Phone.setAttribute("placeholder", "Required Phone!");
    }
    if (Address_value == "") {
        Address.style.border = "1px solid red";
        Address.setAttribute("placeholder", "Required Address!");
    }
    if (Name_value !== "" & Phone_value !== "" & Address_value !== "") {
        Touch_String = {
            Name: Name_value,
            Phone: Phone_value,
            Address: Address_value
        };
        Touch_Array.push(Touch_String);
        localStorage.setItem("Form_Data", JSON.stringify(Touch_Array));
        Form_Data_Rander();
        
        Name.value = "";
        Phone.value = "";
        Address.value = "";

        Name.style.border = "2px solid green";
        Name.setAttribute("placeholder", "");
        Phone.style.border = "2px solid green";
        Phone.setAttribute("placeholder", "");
        Address.style.border = "2px solid green";
        Address.setAttribute("placeholder", "");
    };

}); 

function Form_Data_Rander() {
    for (let i = 0; i < Touch_Array.length; i++) {
        const Contact_Form_Div = document.createElement("div");
        Contact_Form_Div.id = "Contact_Form_Display_Main_Div";

        const Name_Input = document.createElement("input");
        Name_Input.type = "text";
        Name_Input.id = "Name_Input";
        Name_Input.value = Touch_Array[i].Name;

        const Phone_Input = document.createElement("input");
        Phone_Input.type = "text";
        Phone_Input.value = Touch_Array[i].Phone;

        const Address_Input = document.createElement("input");
        Address_Input.type = "text";
        Address_Input.value = Touch_Array[i].Address;

        const Form_Button = document.createElement("div");

        const Form_Edit_Button = document.createElement("button");
        Form_Edit_Button.innerHTML = "Edit";
        Form_Edit_Button.classList.add("Contact_Form_Button");

        const Form_Edit_Delete = document.createElement("button");
        Form_Edit_Delete.innerHTML = "X";
        Form_Edit_Delete.classList.add("Form_Edit_Delete");

        Form_Button.append(Form_Edit_Button, Form_Edit_Delete);
        Form_Button.id = "Form_Button";
        Contact_Form_Div.append(Name_Input, Phone_Input, Address_Input, Form_Button);
        Display_Result.append(Contact_Form_Div);

        Form_Edit_Button.addEventListener("click", () => {
            Display_Result.innerHTML = "";
            const Contact_Form_Sub_Div = document.createElement("div");
            Contact_Form_Sub_Div.id = "Contact_Form_Sub_Div";

            const Name_Input_Sub = document.createElement("input");
            Name_Input_Sub.type = "text";
            Name_Input_Sub.id = "Name_Input_Sub";
            Name_Input_Sub.value = Touch_Array[i].Name;

            const Phone_Input_Sub = document.createElement("input");
            Phone_Input_Sub.type = "text";
            Phone_Input_Sub.value = Touch_Array[i].Phone;

            const Address_Input_Sub = document.createElement("input");
            Address_Input_Sub.type = "text";
            Address_Input_Sub.value = Touch_Array[i].Address;

            const Contact_Form_Sub_btn_div = document.createElement("div");
            Contact_Form_Sub_btn_div.id = "Contact_Form_Sub_btn_div";

            const Save_Sub_Btn = document.createElement("button");
            Save_Sub_Btn.innerHTML = "Save";

            const Cancel_Sub_Btn = document.createElement("button");
            Cancel_Sub_Btn.innerHTML = "Cancel";
            Contact_Form_Sub_btn_div.append(Save_Sub_Btn, Cancel_Sub_Btn);

            Contact_Form_Sub_Div.append(Name_Input_Sub, Phone_Input_Sub, Address_Input_Sub, Contact_Form_Sub_btn_div);
            Display_Result.append(Contact_Form_Sub_Div);

            Save_Sub_Btn.addEventListener("click", () => {
                Touch_Array[i].Name = Name_Input_Sub.value;
                Touch_Array[i].Phone = Phone_Input_Sub.value;
                Touch_Array[i].Address = Address_Input_Sub.value;
                localStorage.setItem("Form_Data", JSON.stringify(Touch_Array));
                Display_Result.innerHTML = "";
                Form_Data_Rander();
            });
            Cancel_Sub_Btn.addEventListener("click", () => {
                Display_Result.innerHTML = "";
                Form_Data_Rander();
            });

        });
        Form_Edit_Delete.addEventListener("click", () => {
            Touch_Array.splice(i, 1);
            localStorage.setItem("Form_Data", JSON.stringify(Touch_Array));
            Display_Result.innerHTML = "";
            Form_Data_Rander();
        });
    };
};
Form_Data_Rander();

// Hembergar //
const Hembarger = document.getElementById("Hembarger");
const Navbar_Main_Container = document.getElementById("Navbar_Main_Container");
var Hembarger_count = 0;
Hembarger.addEventListener("click", ()=>{
if (Hembarger_count == 0){
    Hembarger_count = 1;
    Navbar_Main_Container.style.display = "block";
    
} else if(Hembarger_count == 1){
    Hembarger_count = 0;
    Navbar_Main_Container.style.display = "none";
}
});
