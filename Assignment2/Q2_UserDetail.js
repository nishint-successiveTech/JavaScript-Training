function userDetail()
{
    let name=prompt("Enter your name please: ");
    
    while(name.length==0)
    {
        alert("Please enter valid name");
        name=prompt("Enter your name please: ");
    }
    
    let age=Number(prompt("Enter your age please: "));
    while(age<0 || age>120)
    {
        alert("Please enter valid age");
        age=prompt("Enter your age please: ");
    }
    
    let phone_num=Number(prompt("Enter your phonenumber please: "));
    while(phone_num<10)
    {
        alert("Please enter valid age");
        phone_num=prompt("Enter your age please: ");
    }
    
  console.log("User Information:");
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Phone:", phone_num);

}


userDetail();
