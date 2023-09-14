//switch() is a statement
console.log(`Select an option:
a. Option 1
b. Option 2
c. Option 3`);

choice=prompt("PLease select an option")
var text;

switch(choice){
  case "a" :
    text = "Option 1 selected";
    break;
    case "b":
      text = "Option 2 is selected";
      break;
      case "c" :
        text = "Option 3 is selected";
        break;

        default:
          text= "No option is selected"
          break;
}

console.log(text);