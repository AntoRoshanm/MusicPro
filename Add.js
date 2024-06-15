import { Keyboard } from "react-native";
import {firebase} from "./config"

const Home = () => {
    const todoRef = firebase.firestore().collection ('newData');
    const [addData, setAddData] = useState('');
    // add a new field
    const addField = () => {
    // check if we have new field data
    if (addData && addData.length > 0){
    // get the timestamp
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    const data = {
    heading: addData,
    createdAt: timestamp
    };
    todoRef
    .add(data)
    .then(() => {
        setAddData('');
        Keyboard.dismiss();
    })
    .catch((error) => {
        alert(error);
    })
    }
    }
}